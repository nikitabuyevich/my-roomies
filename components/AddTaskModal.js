import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormInput } from 'react-native-elements';

export default class AddTaskModal extends Component {
  state = {
    choreText: ''
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <View style={styles.formContainerStyle}>
            <FormInput
              autoFocus
              inputStyle={{ width: '100%' }}
              onChangeText={choreText => this.setState({ choreText })}
              value={this.state.choreText}
              onSubmitEditing={() => {
                if (this.state.choreText) {
                  this.props.hideAddTaskModal();
                }
              }}
              placeholder="Enter a new chore..."
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
