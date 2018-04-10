import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import hardCodedMessages from '../data/messages';
import NavBar from '../components/NavBar';

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      step: 0
    };

    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    this.setState({ messages: hardCodedMessages });
  }

  onSend(messages = []) {
    const step = this.state.step + 1;
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [
        { ...messages[0], sent: true, received: true }
      ]),
      step
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1
          }}
          parsePatterns={this.parsePatterns}
        />
      </View>
    );
  }
}
