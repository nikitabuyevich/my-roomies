import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Modal from 'react-native-modal';
import UserItem from '../components/UserItem';
import dummyUsers from '../data/users';
import Colors from '../constants/Colors';
import AddTaskModal from '../components/AddTaskModal';
import AddUserModel from '../components/AddUserModal';

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
      males: [
        'https://i.imgur.com/3FDGnAk.png',
        'https://i.imgur.com/BaFiCQa.png',
        'https://i.imgur.com/hLaBSLw.png'
      ],
      females: [
        'https://i.imgur.com/6umrMwe.png',
        'https://i.imgur.com/lEYRGzf.png',
        'https://i.imgur.com/liXLTNP.png'
      ]
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
          swipeDirection="up"
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
          swipeDirection="up"
          swipeThreshold={50}
        >
          <AddUserModel addUser={this.addUser} hideAddUserModal={this.hideAddUserModal} />
        </Modal>
        <Header
          leftComponent={{
            icon: 'user-plus',
            type: 'feather',
            color: '#fff',
            size: 28,
            component: TouchableOpacity,
            containerStyle: styles.settingsButtonStyle,
            onPress: () => {
              this.setState({ addUserModalIsVisible: true });
            }
          }}
          centerComponent={{ text: 'Week of APR 9 2018', style: styles.weekTextStyle }}
          rightComponent={{
            icon: 'plus-circle',
            type: 'feather',
            color: '#fff',
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
          data={this.state.users}
          extraData={this.state.refreshList}
          style={{ marginBottom: 15 }}
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
    color: '#fff',
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
    height: 50
  }
};
