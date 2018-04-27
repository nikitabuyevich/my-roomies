import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';
import Colors from '../constants/Colors';

export default class Task extends Component {
  state = {
    isScrollable: true,
    leftActionActivated: false,
    toggle: false
  };

  componentDidMount = () => {
    const { completed } = this.props.chore;
    this.setState({ toggle: completed });
  };

  onSwipeStart = () => {
    this.setState({
      isScrollable: false
    });
    this.props.disableUserListScroll();
  };

  onSwipeRelease = () => {
    this.setState({
      isScrollable: true
    });
    this.props.enableUserListScroll();
  };

  onBellPress = (user, text) => {
    this.remindUser(user.name, text);
    this.swipeable.recenter();
  };

  remindUser = (name, text) => {
    this.props.alertMessage(
      'info',
      'Notified',
      `${name.first} ${name.last} has been notified to complete the ${text} chore!`
    );
  };

  renderTaskIcon = () => {
    const { toggle, leftActionActivated } = this.state;

    // activated
    if (toggle && !leftActionActivated) {
      return <Icon name="check-circle" type="feather" color={Colors.greenColor} />;
    }

    // not activated, activating
    if (!toggle && leftActionActivated) {
      return <Icon name="check-circle" type="feather" color={Colors.greenColor} />;
    }

    // activated, canceling
    if (toggle && leftActionActivated) {
      return <Icon name="circle" type="feather" color="#999" />;
    }

    // not activated
    return <Icon name="circle" type="feather" color="#999" />;
  };

  renderLeftActionContent = (userId, currentUserId) => {
    if (userId !== currentUserId) {
      return;
    }

    // activated
    if (this.state.toggle) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.backgroundGreyColor }}
        >
          <Icon
            name="x"
            type="feather"
            color="#fff"
            size={30}
            containerStyle={{ alignItems: 'flex-end', marginRight: 20 }}
          />
        </View>
      );
    }

    // not activated
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Colors.lightGreenColor }}>
        <Icon
          name="check"
          type="feather"
          color="#fff"
          size={30}
          containerStyle={{ alignItems: 'flex-end', marginRight: 20 }}
        />
      </View>
    );
  };

  renderLabelTextColor = () => {
    const { toggle, leftActionActivated } = this.state;

    // activated
    if (toggle && !leftActionActivated) {
      return { color: '#999' };
    }

    // not activated, activating
    if (!toggle && leftActionActivated) {
      return { color: '#999' };
    }

    // activated, canceling
    if (toggle && leftActionActivated) {
      return { color: '#555' };
    }

    // not activated
    return { color: '#555' };
  };

  renderRightButtons = (user, currentUserId, text, completed) => {
    if (user.id === currentUserId || completed) {
      return;
    }

    return [
      <TouchableOpacity
        style={[styles.rightSwipeItem]}
        onPress={() => {
          this.onBellPress(user, text);
        }}
      >
        <Icon
          name="bell"
          type="feather"
          color="#fff"
          size={24}
          containerStyle={{ alignItems: 'flex-start' }}
        />
      </TouchableOpacity>
    ];
  };

  render() {
    const { toggle, isScrollable } = this.state;
    const { chore, user, currentUserId } = this.props;
    const { text, completed } = chore;
    const { container, listItem, labelTextStyle, taskTextViewContainerStyle } = styles;

    return (
      <ScrollView scrollEnabled={isScrollable} style={container}>
        <Swipeable
          onRef={ref => (this.swipeable = ref)}
          onSwipeStart={this.onSwipeStart}
          onSwipeRelease={this.onSwipeRelease}
          leftActionActivationDistance={75}
          rightButtonWidth={60}
          leftContent={this.renderLeftActionContent(user.id, currentUserId)}
          onLeftActionActivate={() =>
            this.setState({
              leftActionActivated: true
            })
          }
          onLeftActionDeactivate={() =>
            this.setState({
              leftActionActivated: false
            })
          }
          onLeftActionComplete={() =>
            this.setState({
              toggle: !toggle
            })
          }
          rightButtons={this.renderRightButtons(user, currentUserId, text, completed)}
        >
          <View style={[listItem]}>
            <View style={taskTextViewContainerStyle}>
              {this.renderTaskIcon()}
              <View style={{ marginLeft: 10 }}>
                <Text style={[labelTextStyle, this.renderLabelTextColor()]}>{text}</Text>
              </View>
            </View>
          </View>
        </Swipeable>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.greyColor
  },
  labelTextStyle: {
    fontSize: 18,
    fontFamily: 'Roboto'
  },
  taskTextViewContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItem: {
    height: 60,
    paddingLeft: 10,
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
    paddingLeft: 18,
    backgroundColor: Colors.backgroundGreyColor
  }
});
