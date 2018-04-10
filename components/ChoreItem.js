import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const renderChore = (chore, userId, currentUserId) => {
  const { text, completed } = chore;
  const { textStyle, uncompletedChoreTextStyle, choreTaskStyle, iconContainerStyle } = styles;

  if (completed) {
    return (
      <View style={choreTaskStyle}>
        <Text style={[textStyle, uncompletedChoreTextStyle]}> {text} </Text>
        <View style={iconContainerStyle}>
          <Ionicons
            style={{ alignSelf: 'flex-end' }}
            name="md-checkmark-circle-outline"
            size={32}
            color={Colors.greenColor}
          />
        </View>
      </View>
    );
  }

  // Current user
  if (currentUserId === userId) {
    return (
      <View style={choreTaskStyle}>
        <Text style={textStyle}> {text} </Text>
      </View>
    );
  }

  return (
    <View style={choreTaskStyle}>
      <Text style={textStyle}> {text} </Text>
      <View style={iconContainerStyle}>
        <Ionicons
          style={{ alignSelf: 'flex-end' }}
          name="md-notifications-outline"
          size={32}
          color={Colors.redColor}
        />
      </View>
    </View>
  );
};

const ChoreItem = ({ chore, userId, currentUserId }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{renderChore(chore, userId, currentUserId)}</View>;
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: 8
  },
  avatarImageStyle: {
    width: 75,
    height: 75
  },
  choreTaskStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  iconContainerStyle: {
    flex: 1
  },
  textStyle: {
    fontFamily: 'Roboto',
    color: '#333',
    fontSize: 20
  },
  uncompletedChoreTextStyle: {
    textDecorationLine: 'line-through'
  }
};

export default ChoreItem;
