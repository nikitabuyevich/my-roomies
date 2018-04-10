import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import rankStandingsImg from '../assets/images/rank_standings.png';

export default class Podium extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} resizeMode="contain" source={rankStandingsImg} />
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
    width: 150
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center'
  }
};
