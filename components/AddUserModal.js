import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormInput, FormLabel, Card } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import AddModalButton from '../components/AddModalButton';
import Colors from '../constants/Colors';

const sexProps = [
  {
    label: 'Male',
    value: 'M'
  },
  {
    label: 'Female',
    value: 'F'
  }
];

export default class AddTaskModal extends Component {
  state = {
    firstNameText: '',
    lastNameText: '',
    sexProp: 'M'
  };

  onSubmit = () => {
    const { firstNameText, lastNameText, sexProp } = this.state;

    if (firstNameText && lastNameText) {
      this.props.addUser(firstNameText, lastNameText, sexProp);
      this.props.hideAddUserModal();
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
              title="Add a New Roommate"
              style={styles.formContainerStyle}
            >
              <FormLabel>First Name</FormLabel>
              <FormInput
                autoFocus
                inputStyle={{ width: '100%' }}
                onChangeText={firstNameText => this.setState({ firstNameText })}
                value={this.state.firstNameText}
                placeholder="Enter first name..."
              />
              <FormLabel>Last Name</FormLabel>
              <FormInput
                inputStyle={{ width: '100%' }}
                onChangeText={lastNameText => this.setState({ lastNameText })}
                value={this.state.lastNameText}
                placeholder="Enter last name..."
              />
              <FormLabel>Sex</FormLabel>
              <RadioForm
                radio_props={sexProps}
                initial={0}
                formHorizontal
                labelStyle={styles.radioButtonLabelStyle}
                buttonColor={Colors.orangeColor}
                selectedButtonColor={Colors.orangeColor}
                style={{ marginTop: 6, marginLeft: 10 }}
                labelHorizontal={false}
                onPress={sexProp => {
                  this.setState({ sexProp });
                }}
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
    flex: 0.65,
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
  },
  radioButtonLabelStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#777'
  }
});
