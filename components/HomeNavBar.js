import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import UserPoints from '../components/UserPoints';
import Podium from '../components/Podium';
import LastWeeksWinner from '../components/LastWeeksWinner';

export default class HomeNavBar extends Component {
  render() {
    return (
      <Header
        leftComponent={<UserPoints />}
        centerComponent={<Podium />}
        outerContainerStyles={styles.outerContainer}
        backgroundColor="#fff"
        rightComponent={<LastWeeksWinner />}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  outerContainer: {
    height: 130
  },
  headerStyle: {
    fontSize: 32,
    color: 'red',
    fontFamily: 'Roboto'
  }
};
