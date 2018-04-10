import React from 'react';
import { Text } from 'react-native';

export class RobotoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'Roboto' }]} />;
  }
}
