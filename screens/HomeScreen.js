import React from 'react';
import { View, Text } from 'react-native';
import HomeNavBar from '../components/HomeNavBar';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <HomeNavBar />
        <Text>This the links screen</Text>
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
