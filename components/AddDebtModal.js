import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class AddDebtModal extends Component {
  state = {
    titleText: '',
    descriptionText: '',
    paid: false
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <View style={styles.formContainerStyle}>
            <Text style={styles.addDebtTextStyle}>Add Debt</Text>
            <FormLabel>Title</FormLabel>
            <FormInput
              autoFocus
              inputStyle={{ width: '100%' }}
              onChangeText={titleText => this.setState({ titleText })}
              value={this.state.titleText}
              placeholder="Enter title..."
            />
            <FormLabel>Description</FormLabel>
            <FormInput
              inputStyle={{ width: '100%' }}
              onChangeText={descriptionText => this.setState({ descriptionText })}
              value={this.state.descriptionText}
              onSubmitEditing={() => {
                if (this.state.descriptionText) {
                  this.props.addDebt(this.state.titleText, this.state.descriptionText);
                  this.props.hideAddDebtModal();
                }
              }}
              placeholder="Enter description..."
            />
            <Text style={styles.textHelperStyle}>Swipe up to dismiss</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.75,
    justifyContent: 'center'
  },
  addDebtTextStyle: {
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
