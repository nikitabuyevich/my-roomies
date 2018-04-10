import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import NavBar from '../components/NavBar';
import debts from '../data/debts';

export default class DebtsScreen extends Component {
  static navigationOptions = {
    title: 'Debts'
  };

  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);

    this.data = debts;
    this.state = {
      selected: null
    };
  }

  onEventPress(data) {
    this.setState({
      selected: data
    });
  }

  renderSelected() {
    if (this.state.selected && !this.state.selected.paid) {
      Linking.openURL('https://www.paypal.com/us/home');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="💵 Debts Timeline" />
        <View style={styles.timelineContainer}>
          {this.renderSelected()}
          <Timeline
            style={styles.list}
            data={this.data}
            circleSize={20}
            circleColor="rgba(0,0,0,0)"
            lineColor="rgb(45,156,219)"
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{
              textAlign: 'center',
              backgroundColor: '#36cdff',
              color: 'white',
              padding: 5,
              borderRadius: 13
            }}
            descriptionStyle={{ color: 'gray' }}
            options={{ style: { paddingTop: 5 } }}
            innerCircle={'icon'}
            onEventPress={this.onEventPress}
            separator={false}
            detailContainerStyle={{
              marginBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
              borderWidth: 2,
              borderColor: '#36cdff',
              borderRadius: 10
            }}
            columnFormat="two-column"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  timelineContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: '#666'
  }
});
