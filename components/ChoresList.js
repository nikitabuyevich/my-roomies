import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Task from '../components/Task';
import Colors from '../constants/Colors';

export default class ChoresList extends Component {
  render() {
    const {
      user,
      currentUserId,
      enableUserListScroll,
      disableUserListScroll,
      alertMessage
    } = this.props;

    return (
      <View style={styles.containerStyle}>
        {this.props.user.chores.map(chore => (
          <Task
            key={chore.id}
            chore={chore}
            user={user}
            currentUserId={currentUserId}
            enableUserListScroll={enableUserListScroll}
            disableUserListScroll={disableUserListScroll}
            alertMessage={alertMessage}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.greyColor
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#777'
  }
});
