import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Modal from 'react-native-modal';
import UserItem from '../components/UserItem';
import dummyUsers from '../data/users';
import Colors from '../constants/Colors';
import AddTaskModal from '../components/AddTaskModal';

const currentUserId = 1;

export default class UserList extends Component {
  state = {
    isScrollable: true,
    addTaskModalIsVisible: false,
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

  refreshFlatList = () => {
    this.setState({
      refreshList: !this.state.refreshList
    });
  };

  addChoreToARandomUser = choreText => {
    const { users } = this.state;
    const randomIdxOfUser = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIdxOfUser];

    const chore = {
      id: selectedUser.chores.length + 1,
      text: choreText,
      completed: false
    };

    selectedUser.chores.push(chore);
    this.setState({
      users
    });
    this.refreshFlatList();

    let notifyMessage = `We have randomly assigned ${selectedUser.name.first} ${
      selectedUser.name.last
    } the ${choreText} chore!`;

    if (selectedUser.id === currentUserId) {
      notifyMessage = `You have been randomly assigned the ${choreText} chore!`;
    }

    this.props.alertMessage('success', 'Added Chore', notifyMessage);
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
        <Header
          leftComponent={{
            icon: 'settings',
            type: 'feather',
            color: '#666',
            size: 28,
            component: TouchableOpacity,
            containerStyle: styles.settingsButtonStyle,
            onPress: () => {
              console.log('ayy');
            }
          }}
          centerComponent={{ text: 'Week of APR 9 2018', style: styles.weekTextStyle }}
          rightComponent={{
            icon: 'plus-circle',
            type: 'feather',
            color: Colors.lightBlueColor,
            size: 28,
            component: TouchableOpacity,
            containerStyle: styles.addTaskButtonStyle,
            onPress: () => {
              this.setState({ addTaskModalIsVisible: true });
            }
          }}
          backgroundColor="#fff"
          outerContainerStyles={styles.userListHeaderContainerStyle}
        />
        <FlatList
          scrollEnabled={this.state.isScrollable}
          data={this.state.users}
          extraData={this.state.refreshList}
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
    color: '#777',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14
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
