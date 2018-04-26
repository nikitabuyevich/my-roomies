import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header, FormLabel, FormInput } from 'react-native-elements';
import Modal from 'react-native-modal';
import UserItem from '../components/UserItem';
import users from '../data/users';
import Colors from '../constants/Colors';
import AddTaskModal from '../components/AddTaskModal';

export default class UserList extends Component {
  state = {
    isScrollable: true,
    addTaskModalIsVisible: false
  };

  enableUserListScroll = () => {
    this.setState({ isScrollable: true });
  };

  disableUserListScroll = () => {
    this.setState({ isScrollable: false });
  };

  hideAddTaskModal = () => {
    this.setState({ addTaskModalIsVisible: false });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <Modal
          isVisible={this.state.addTaskModalIsVisible}
          onSwipe={() => this.setState({ addTaskModalIsVisible: false })}
          swipeDirection="up"
          swipeThreshold={50}
        >
          <AddTaskModal hideAddTaskModal={this.hideAddTaskModal} />
        </Modal>
        <Header
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
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <UserItem
              key={item.id}
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
  userListHeaderContainerStyle: {
    margin: 0,
    padding: 0,
    height: 50
  }
};
