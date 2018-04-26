import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import ChoresList from '../components/ChoresList';

const UserItem = ({ user, enableUserListScroll, disableUserListScroll, alertMessage }) => {
  const { name, avatar } = user;
  const { containerStyle, avatarStyle, avatarImageStyle, avatarTextStyle } = styles;

  return (
    <Card containerStyle={{ flex: 1 }}>
      <View style={containerStyle}>
        <View style={avatarStyle}>
          <Image style={avatarImageStyle} source={{ uri: avatar }} />
          <Text style={avatarTextStyle}>{name.first}</Text>
          <Text style={avatarTextStyle}>{name.last}</Text>
        </View>
        <ChoresList
          enableUserListScroll={enableUserListScroll}
          disableUserListScroll={disableUserListScroll}
          user={user}
          currentUserId={1}
          alertMessage={alertMessage}
        />
      </View>
    </Card>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  avatarStyle: {
    width: 55,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarTextStyle: {
    color: '#333',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    marginTop: 10
  },
  avatarImageStyle: {
    width: 40,
    height: 40
  }
};

export default UserItem;
