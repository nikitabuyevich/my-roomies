import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LastWeeksWinner extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Last Week's</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>Winner: </Text>
          <Text style={styles.winnerTextStyle}>Lucy</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    marginLeft: 10,
    width: 50,
    height: 50
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  winnerTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  }
};
