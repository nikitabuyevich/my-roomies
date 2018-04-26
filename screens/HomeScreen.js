import React from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import HomeNavBar from '../components/HomeNavBar';
import UserList from '../components/UserList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    swipeEnabled: false
  };

  alertMessage = (type, title, message) => {
    this.dropdownAlert.alertWithType(type, title, message);
  };

  render() {
    return (
      <View style={styles.container}>
        <DropdownAlert closeInterval={5000} ref={c => (this.dropdownAlert = c)} zIndex={100} />
        <HomeNavBar />
        <UserList alertMessage={this.alertMessage} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
};
