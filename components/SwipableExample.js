import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-swipeable';

export default class SwipeableExample extends Component {
  state = {
    isSwiping: false,
    leftActionActivated: false,
    toggle: false
  };

  render() {
    const { leftActionActivated, toggle } = this.state;

    return (
      <ScrollView scrollEnabled={!this.state.isSwiping} style={styles.container}>
        <Swipeable
          onSwipeStart={() => this.setState({ isSwiping: true })}
          onSwipeRelease={() => this.setState({ isSwiping: false })}
          leftActionActivationDistance={100}
          leftContent={
            <View
              style={[
                styles.leftSwipeItem,
                { backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue' }
              ]}
            >
              {leftActionActivated ? <Text>release!</Text> : <Text>keep pulling!</Text>}
            </View>
          }
          onLeftActionActivate={() => this.setState({ leftActionActivated: true })}
          onLeftActionDeactivate={() => this.setState({ leftActionActivated: false })}
          onLeftActionComplete={() => this.setState({ toggle: !toggle })}
          rightButtons={[
            <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'lightseagreen' }]}>
              <Text>1</Text>
            </TouchableOpacity>
          ]}
        >
          <View style={[styles.listItem, { backgroundColor: toggle ? 'thistle' : 'darkseagreen' }]}>
            <Text>Example 3</Text>
          </View>
        </Swipeable>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  }
});
