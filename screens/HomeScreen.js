import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import HomeNavBar from '../components/HomeNavBar';
import UserList from '../components/UserList';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    swipeEnabled:
      typeof navigation.state.params === 'undefined' ||
      typeof navigation.state.params.swipeEnabled === 'undefined'
        ? false
        : navigation.state.params.swipeEnabled
  });

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'Home', style: styles.headerTitleStyle }}
          rightComponent={{
            icon: 'cog',
            type: 'font-awesome',
            color: '#fff',
            component: TouchableOpacity,
            onPress: () => {
              console.log(this.props.navigation.state.params);
              this.props.navigation.setParams({ swipeEnabled: true });
            }
          }}
          outerContainerStyles={{ backgroundColor: Colors.orangeColor }}
        />
        <HomeNavBar />
        <UserList />
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
