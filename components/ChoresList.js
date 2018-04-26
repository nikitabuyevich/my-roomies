import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChoreItem from '../components/ChoreItem';
import Task from '../components/Task';

export default class ChoresList extends Component {
  render() {
    const { userId, currentUserId, enableUserListScroll, disableUserListScroll } = this.props;

    return (
      <View style={styles.containerStyle}>
        {this.props.data.map(chore => (
          <Task
            key={chore.id}
            chore={chore}
            userId={userId}
            currentUserId={currentUserId}
            enableUserListScroll={enableUserListScroll}
            disableUserListScroll={disableUserListScroll}
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
    justifyContent: 'center'
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#777'
  }
});
