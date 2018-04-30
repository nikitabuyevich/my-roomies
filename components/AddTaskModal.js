import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormInput, Card } from 'react-native-elements';
import AddModalButton from '../components/AddModalButton';
import Colors from '../constants/Colors';

export default class AddTaskModal extends Component {
  state = {
    choreText: ''
  };

  onSubmit = () => {
    if (this.state.choreText) {
      this.props.hideAddTaskModal();
      this.props.addChoreToARandomUser(this.state.choreText);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <View style={{ backgroundColor: '#f3f3f3', padding: 10 }}>
            <Card
              titleStyle={styles.titleTextStyle}
              containerStyle={{ padding: 10, margin: 5 }}
              title="Add a New Chore"
              style={styles.formContainerStyle}
            >
              <FormInput
                autoFocus
                inputStyle={{ width: '100%' }}
                onChangeText={choreText => this.setState({ choreText })}
                value={this.state.choreText}
                onSubmitEditing={this.onSubmit}
                placeholder="Add a new chore..."
              />
              <AddModalButton onPress={this.onSubmit} />
              <Text style={styles.textHelperStyle}>Swipe right to dismiss</Text>
            </Card>
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
  titleTextStyle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: Colors.orangeColor
  },
  formContainerStyle: {
    backgroundColor: '#f3f3f3',
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
