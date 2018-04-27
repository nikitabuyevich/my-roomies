import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Task from '../components/Task';
import Colors from '../constants/Colors';

export default class ChoresList extends Component {
  renderNoChoresMessage = () => {
    if (this.props.user.chores.length === 0) {
      return (
        <View>
          <Text style={styles.noAssignedChoresTextStyle}>No assigned chores</Text>
        </View>
      );
    }
  };

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
        {this.renderNoChoresMessage()}
        {this.props.user.chores.map((chore, index) => {
          if (index === this.props.user.chores.length - 1) {
            return (
              <Task
                key={chore.id}
                chore={chore}
                user={user}
                currentUserId={currentUserId}
                enableUserListScroll={enableUserListScroll}
                disableUserListScroll={disableUserListScroll}
                alertMessage={alertMessage}
              />
            );
          }

        return (
            <Task
              key={chore.id}
              chore={chore}
              user={user}
              bottomBorder={{
                borderBottomWidth: 1,
                borderColor: Colors.greyColor
              }}
              currentUserId={currentUserId}
              enableUserListScroll={enableUserListScroll}
              disableUserListScroll={disableUserListScroll}
              alertMessage={alertMessage}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center'
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#777'
  },
  noAssignedChoresTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'center',
    color: '#999'
  }
});
