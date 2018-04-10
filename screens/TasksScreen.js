import React from 'react';
import { View, Text } from 'react-native';

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This the links screen</Text>
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
