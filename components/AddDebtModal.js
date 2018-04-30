import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { FormInput, FormLabel, Card } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
import AddModalButton from '../components/AddModalButton';
import Colors from '../constants/Colors';

const oweProps = [
  {
    label: 'Yes',
    value: true
  },
  {
    label: 'No',
    value: false
  }
];

const paidProps = [
  {
    label: 'Yes',
    value: true
  },
  {
    label: 'No',
    value: false
  }
];

export default class AddDebtModal extends Component {
  state = {
    titleText: '',
    descriptionText: '',
    amountText: '',
    paid: false,
    oweProp: false,
    paidProp: false
  };

  onSubmit = () => {
    const { titleText, descriptionText, amountText, oweProp, paidProp } = this.state;
    if (titleText && descriptionText && amountText) {
      this.props.addDebt(titleText, descriptionText, amountText, oweProp, paidProp);
      this.props.hideAddDebtModal();
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStyle}>
          <ScrollView style={{}}>
            <View style={styles.scrollViewContainerStyle}>
              <Card
                titleStyle={styles.titleTextStyle}
                containerStyle={{ padding: 10, margin: 5 }}
                title="Add a New Debt"
                style={styles.formContainerStyle}
              >
                <FormLabel>Title</FormLabel>
                <FormInput
                  autoFocus
                  onSubmitEditing={this.onSubmit}
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
                  onSubmitEditing={this.onSubmit}
                  placeholder="Enter description..."
                />
                <FormLabel>Amount</FormLabel>
                <FormInput
                  inputStyle={{ width: '100%' }}
                  onChangeText={amountText => this.setState({ amountText })}
                  value={this.state.amountText}
                  keyboardType="numeric"
                  onSubmitEditing={this.onSubmit}
                  placeholder="Enter amount..."
                />
                <FormLabel>Owe</FormLabel>
                <RadioForm
                  radio_props={oweProps}
                  initial={0}
                  formHorizontal
                  labelStyle={styles.radioButtonLabelStyle}
                  buttonColor={Colors.orangeColor}
                  selectedButtonColor={Colors.orangeColor}
                  style={{ marginTop: 6, marginLeft: 10 }}
                  labelHorizontal={false}
                  onPress={oweProp => {
                    this.setState({ oweProp });
                  }}
                />
                <FormLabel>Paid</FormLabel>
                <RadioForm
                  radio_props={paidProps}
                  initial={0}
                  formHorizontal
                  labelStyle={styles.radioButtonLabelStyle}
                  buttonColor={Colors.orangeColor}
                  selectedButtonColor={Colors.orangeColor}
                  style={{ marginTop: 6, marginLeft: 10 }}
                  labelHorizontal={false}
                  onPress={paidProp => {
                    this.setState({ paidProp });
                  }}
                />
                <AddModalButton onPress={this.onSubmit} />
                <Text style={styles.textHelperStyle}>Swipe right to dismiss</Text>
              </Card>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center'
  },
  scrollViewContainerStyle: {
    backgroundColor: '#f3f3f3',
    marginTop: 40,
    padding: 10
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
