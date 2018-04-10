import React, { Component } from 'react';
import { View } from 'react-native';
import ChoreItem from '../components/ChoreItem';

export default class ChoresList extends Component {
  render() {
    const { userId, currentUserId } = this.props;

    return (
      <View style={styles.containerStyle}>
        {this.props.data.map(chore => (
          <ChoreItem key={chore.id} chore={chore} userId={userId} currentUserId={currentUserId} />
        ))}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20
  },
  weekTextStyle: {
    fontFamily: 'Roboto',
    color: '#777'
  }
};
