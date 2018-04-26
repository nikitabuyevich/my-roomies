import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';

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
              onChangeText={choreText => this.setState({ choreText })}
              value={this.state.choreText}
              onSubmitEditing={() => {
                if (this.state.choreText) {
                  this.props.hideAddTaskModal();
                }
              }}
              placeholder="Enter a new chore..."
            />
            <Icon name="x-circle" type="feather" color="red" />;
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
    flexDirection: 'row'
  }
});
