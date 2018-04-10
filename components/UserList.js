import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import UserItem from '../components/UserItem';
import users from '../data/users';

export default class UserList extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.weekTextStyle}>Week of APR 9 2018 </Text>
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <UserItem key={item.id} user={item} />}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    padding: 10
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#777',
    textAlign: 'center',
    fontSize: 14
  }
};
