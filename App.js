import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font, Asset } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import MainTabNavigator from './navigation/MainTabNavigator';

import RobotoFont from './assets/fonts/Roboto-Regular.ttf';
import RobotoBoldFont from './assets/fonts/Roboto-Bold.ttf';

import jeffTurnerAvatarImage from './assets/images/jeff_turner_avatar.png';
import daveBensonAvatarImage from './assets/images/dave_benson_avatar.png';
import lucyWalkerAvatarImage from './assets/images/lucy_walker_avatar.png';

import maleAvatar1Image from './assets/images/avatars/male/1.png';
import maleAvatar2Image from './assets/images/avatars/male/2.png';
import maleAvatar3Image from './assets/images/avatars/male/3.png';

import femaleAvatar1Image from './assets/images/avatars/female/1.png';
import femaleAvatar2Image from './assets/images/avatars/female/2.png';
import femaleAvatar3Image from './assets/images/avatars/female/3.png';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        jeffTurnerAvatarImage,
        daveBensonAvatarImage,
        lucyWalkerAvatarImage,
        maleAvatar1Image,
        maleAvatar2Image,
        maleAvatar3Image,
        femaleAvatar1Image,
        femaleAvatar2Image,
        femaleAvatar3Image
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        Roboto: RobotoFont,
        'Roboto-Bold': RobotoBoldFont
      })
    ]);

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        <MainTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  }
});
