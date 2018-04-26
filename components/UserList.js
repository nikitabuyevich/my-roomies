import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import UserItem from '../components/UserItem';
import users from '../data/users';

export default class UserList extends Component {
  state = {
    isScrollable: true
  };

  enableUserListScroll = () => {
    this.setState({ isScrollable: true });
  };

  disableUserListScroll = () => {
    this.setState({ isScrollable: false });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.weekTextStyle}>Week of APR 9 2018 </Text>
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
    marginTop: 20,
    fontFamily: 'Roboto',
    color: '#777',
    textAlign: 'center',
    fontSize: 14
  }
};
