import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Modal from 'react-native-modal';
import UserItem from '../components/UserItem';
import dummyUsers from '../data/users';
import Colors from '../constants/Colors';
import AddTaskModal from '../components/AddTaskModal';
import AddUserModel from '../components/AddUserModal';
import { getWeekOf } from '../helpers';

import maleAvatar1Image from '../assets/images/avatars/male/1.png';
import maleAvatar2Image from '../assets/images/avatars/male/2.png';
import maleAvatar3Image from '../assets/images/avatars/male/3.png';

import femaleAvatar1Image from '../assets/images/avatars/female/1.png';
import femaleAvatar2Image from '../assets/images/avatars/female/2.png';
import femaleAvatar3Image from '../assets/images/avatars/female/3.png';

const currentUserId = 0;

export default class UserList extends Component {
  state = {
    isScrollable: true,
    addTaskModalIsVisible: false,
    addUserModalIsVisible: false,
    users: [],
    refreshList: false
  };

  componentDidMount = () => {
    this.setState({
      users: dummyUsers
    });
  };

  enableUserListScroll = () => {
    this.setState({
      isScrollable: true
    });
  };

  disableUserListScroll = () => {
    this.setState({
      isScrollable: false
    });
  };

  hideAddTaskModal = () => {
    this.setState({
      addTaskModalIsVisible: false
    });
  };

  hideAddUserModal = () => {
    this.setState({
      addUserModalIsVisible: false
    });
  };

  refreshFlatList = () => {
    this.setState({
      refreshList: !this.state.refreshList
    });
  };

  scrollToBottom = () => {
    setTimeout(() => {
      this.flatlist.scrollToEnd({ animated: true });
    }, 250);
  };

  addChoreToARandomUser = choreText => {
    const { users } = this.state;
    let choresMin = Number.MAX_SAFE_INTEGER;
    let selectedUser = null;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const choresOfUser = user.chores;

      if (choresOfUser.length < choresMin) {
        selectedUser = user;
        choresMin = choresOfUser.length;
      }
    }

    const chore = {
      id: selectedUser.chores.length,
      text: choreText,
      completed: false
    };

    selectedUser.chores.push(chore);
    this.setState({
      users
    });
    this.refreshFlatList();

    let notifyMessage = `${selectedUser.name.first} ${
      selectedUser.name.last
    } has been randomly assigned the ${choreText} chore!`;

    if (selectedUser.id === currentUserId) {
      notifyMessage = `You have been randomly assigned the ${choreText} chore!`;
    }

    this.props.alertMessage('success', 'Added Chore', notifyMessage);
  };

  randomlyPickAvatar = sex => {
    const avatars = {
      males: [maleAvatar1Image, maleAvatar2Image, maleAvatar3Image],
      females: [femaleAvatar1Image, femaleAvatar2Image, femaleAvatar3Image]
    };

    if (sex === 'M') {
      const randomNum = Math.floor(Math.random() * avatars.males.length);
      return avatars.males[randomNum];
    }

    const randomNum = Math.floor(Math.random() * avatars.females.length);
    return avatars.females[randomNum];
  };

  addUser = (firstName, lastName, sex) => {
    const { users } = this.state;

    const user = {
      id: users.length,
      name: {
        first: firstName,
        last: lastName
      },
      sex,
      avatar: this.randomlyPickAvatar(sex),
      chores: []
    };

    users.push(user);
    this.refreshFlatList();

    const notifyMessage = `${firstName} ${lastName} has been added as a new roommate. Welcome!`;
    this.props.alertMessage('success', 'Added Roommate', notifyMessage);
    this.scrollToBottom();
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Modal
          isVisible={this.state.addTaskModalIsVisible}
          onSwipe={() =>
            this.setState({
              addTaskModalIsVisible: false
            })
          }
          animationIn="slideInDown"
          swipeDirection="right"
          swipeThreshold={50}
        >
          <AddTaskModal
            addChoreToARandomUser={this.addChoreToARandomUser}
            hideAddTaskModal={this.hideAddTaskModal}
          />
        </Modal>
        <Modal
          isVisible={this.state.addUserModalIsVisible}
          onSwipe={() =>
            this.setState({
              addUserModalIsVisible: false
            })
          }
          animationIn="slideInDown"
          swipeDirection="right"
          swipeThreshold={50}
        >
          <AddUserModel addUser={this.addUser} hideAddUserModal={this.hideAddUserModal} />
        </Modal>
        <Header
          leftComponent={{
            icon: 'user-plus',
            type: 'feather',
            color: '#f3f3f3',
            size: 28,
            component: TouchableOpacity,
            containerStyle: styles.settingsButtonStyle,
            onPress: () => {
              this.setState({ addUserModalIsVisible: true });
            }
          }}
          centerComponent={{ text: `Week of ${getWeekOf()}`, style: styles.weekTextStyle }}
          rightComponent={{
            icon: 'plus-circle',
            type: 'feather',
            color: '#f3f3f3',
            size: 28,
            component: TouchableOpacity,
            containerStyle: styles.addTaskButtonStyle,
            onPress: () => {
              this.setState({ addTaskModalIsVisible: true });
            }
          }}
          backgroundColor={Colors.orangeColor}
          outerContainerStyles={styles.userListHeaderContainerStyle}
        />
        <FlatList
          scrollEnabled={this.state.isScrollable}
          ref={ref => (this.flatlist = ref)}
          data={this.state.users}
          extraData={this.state.refreshList}
          style={{ marginTop: 15 }}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <UserItem
              key={item.id}
              currentUserId={currentUserId}
              enableUserListScroll={this.enableUserListScroll}
              disableUserListScroll={this.disableUserListScroll}
              user={item}
              alertMessage={this.props.alertMessage}
            />
          )}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#f3f3f3',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16
  },
  addTaskButtonStyle: {
    marginRight: 20,
    alignSelf: 'center'
  },
  settingsButtonStyle: {
    marginLeft: 20,
    alignSelf: 'center'
  },
  userListHeaderContainerStyle: {
    margin: 0,
    padding: 0,
    borderBottomWidth: 0,
    height: 50
  }
};
