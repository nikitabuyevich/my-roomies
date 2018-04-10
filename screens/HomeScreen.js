import React from 'react';
import { View } from 'react-native';
import HomeNavBar from '../components/HomeNavBar';
import UserList from '../components/UserList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <HomeNavBar />
        <UserList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
};
