import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class DebtsModal extends Component {
  onButtonPress = () => {
    this.props.togglePaidStatus();
    this.props.hideDebtsModal();
  };

  renderButton = () => {
    if (this.props.paid) {
      return (
        <Button
          component={TouchableOpacity}
          raised
          backgroundColor={Colors.redColor}
          icon={{ name: 'user-x', size: 30, type: 'feather' }}
          title="UNMARK AS PAID"
          fontFamily="Roboto"
          onPress={this.onButtonPress}
        />
      );
    }

    return (
      <Button
        component={TouchableOpacity}
        raised
        backgroundColor={Colors.greenColor}
        icon={{ name: 'user-check', size: 30, type: 'feather' }}
        title="MARK AS PAID"
        fontFamily="Roboto"
        onPress={this.onButtonPress}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <View style={{ backgroundColor: '#fff', padding: 10 }}>
            <Card
              titleStyle={styles.titleTextStyle}
              containerStyle={{ padding: 10, margin: 5 }}
              title="Update Debt"
              style={styles.formContainerStyle}
            >
              {this.renderButton()}
              <Text style={styles.textHelperStyle}>Swipe up to dismiss</Text>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  titleTextStyle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: Colors.orangeColor
  },
  formContainerStyle: {
    backgroundColor: '#fff',
    padding: 10
  },
  textHelperStyle: {
    fontFamily: 'Roboto',
    color: '#999',
    alignSelf: 'flex-end',
    fontSize: 14,
    marginTop: 10,
    marginRight: 10
  }
});
