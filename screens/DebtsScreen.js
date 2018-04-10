import React from 'react';
import { View, Text } from 'react-native';

export default class DebtsScreen extends React.Component {
  static navigationOptions = {
    title: 'Debts'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the settings scren</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
};
