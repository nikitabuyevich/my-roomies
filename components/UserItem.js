import React from 'react';
import { View, Text, Image } from 'react-native';
import ChoresList from '../components/ChoresList';

const UserItem = ({ user }) => {
  const { id, name, avatar, chores } = user;
  const { containerStyle, avatarStyle, avatarImageStyle, avatarTextStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={avatarStyle}>
        <Image style={avatarImageStyle} source={{ uri: avatar }} />
        <Text style={avatarTextStyle}>{name}</Text>
      </View>
      <ChoresList data={chores} userId={id} currentUserId={1} />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  avatarStyle: {
    width: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarTextStyle: {
    color: '#666',
    fontFamily: 'Roboto',
    fontSize: 16,
    marginTop: 10
  },
  avatarImageStyle: {
    width: 75,
    height: 75
  }
};

export default UserItem;
