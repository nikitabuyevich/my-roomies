import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import jeffAvatar from '../assets/images/jeff_turner_avatar.png';

export default class UserPoints extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={jeffAvatar} />
        <Text style={styles.textStyle}>⭐️ 500</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  imageStyle: {
    marginLeft: 10,
    marginTop: 10,
    width: 50,
    height: 50
  },
  textStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  }
};
