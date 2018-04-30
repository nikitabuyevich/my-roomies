import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class AddModalButton extends Component {
  render() {
    return (
      <View>
        <Button
          backgroundColor="#f3f3f3"
          icon={{
            name: 'plus-circle',
            type: 'feather',
            size: 20,
            color: '#f3f3f3'
          }}
          title="ADD"
          onPress={this.props.onPress}
          fontFamily="Roboto"
          fontSize={20}
          color="#f3f3f3"
          buttonStyle={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            paddingBottom: 6,
            marginTop: 10,
            marginLeft: 5,
            borderWidth: 1,
            borderColor: Colors.orangeColor,
            backgroundColor: Colors.orangeColor,
            borderRadius: 6
          }}
          component={TouchableOpacity}
        />
      </View>
    );
  }
}
