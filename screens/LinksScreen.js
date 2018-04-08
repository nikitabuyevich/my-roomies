import React from 'react';
import { View, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
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
    backgroundColor: '#fff',
  },
};
