import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormInput, Card, Button } from 'react-native-elements';
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
              <Button
                backgroundColor="#f3f3f3"
                icon={{
                  name: 'plus-circle',
                  type: 'feather',
                  size: 20,
                  color: '#f3f3f3'
                }}
                title="ADD"
                onPress={this.onSubmit}
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
