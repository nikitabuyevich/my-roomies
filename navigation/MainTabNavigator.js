import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import ChatScreen from '../screens/ChatScreen';
import DebtsScreen from '../screens/DebtsScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigation = new TabNavigator(
  {
    Chat: {
      screen: ChatScreen
    },
    Home: {
      screen: HomeScreen
    },
    Debts: {
      screen: DebtsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Chat':
            iconName =
              Platform.OS === 'ios'
                ? `ios-chatbubbles${focused ? '' : '-outline'}`
                : 'md-chatboxes';
            break;
          case 'Home':
            iconName =
              Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
            break;
          case 'Debts':
            iconName = Platform.OS === 'ios' ? `ios-cash${focused ? '' : '-outline'}` : 'md-cash';
            break;
          default:
            return;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: false,
    swipeEnabled: true
  }
);

export default class MainTabNavigator extends Component {
  render() {
    return <MainNavigation />;
  }
}
