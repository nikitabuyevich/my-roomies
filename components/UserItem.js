import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import ChoresList from '../components/ChoresList';

const UserItem = ({
  user,
  enableUserListScroll,
  disableUserListScroll,
  alertMessage,
  currentUserId
}) => {
  const { name, avatar } = user;
  const { containerStyle, avatarStyle, avatarImageStyle, avatarTextStyle } = styles;

  return (
    <Card containerStyle={{ flex: 1, paddingLeft: 0 }}>
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
          currentUserId={currentUserId}
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
    width: 70,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarTextStyle: {
    color: '#333',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    marginTop: 10
  },
  avatarImageStyle: {
    width: 60,
    height: 60
  }
};

export default UserItem;
