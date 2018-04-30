import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Header, Card, Divider } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';
import Modal from 'react-native-modal';
import DropdownAlert from 'react-native-dropdownalert';
import debts from '../data/debts';
import DebtsModal from '../components/DebtsModal';
import AddDebtModal from '../components/AddDebtModal';
import Colors from '../constants/Colors';
import checkImg from '../assets/images/check.png';
import timesImg from '../assets/images/times.png';
import { getDate } from '../helpers';

export default class DebtsScreen extends Component {
  static navigationOptions = {
    title: 'Debts'
  };

  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);

    this.state = {
      data: debts,
      selected: null,
      debtsModalIsVisible: false,
      addDebtModalIsVisible: false,
      selectedDebtPaid: false
    };
  }

  componentDidMount = () => {
    this.scrollToBottom(false);
  };

  onEventPress(selectedData) {
    this.setState({
      selected: selectedData,
      selectedDebtPaid: selectedData.paid,
      debtsModalIsVisible: true
    });
  }

  scrollToBottom = animated => {
    setTimeout(() => {
      this.scrollView.scrollToEnd({ animated });
    }, 250);
  };

  alertMessage = (type, title, message) => {
    this.dropdownAlert.alertWithType(type, title, message);
  };

  hideDebtsModal = () => {
    this.setState({
      debtsModalIsVisible: false
    });
  };

  hideAddDebtModal = () => {
    this.setState({
      addDebtModalIsVisible: false
    });
  };

  togglePaidStatus = () => {
    const { data, selected } = this.state;
    let selectedDebt = data[selected.id];

    if (selected.paid) {
      selectedDebt = {
        ...selectedDebt,
        lineColor: Colors.redColor,
        icon: timesImg,
        paid: false
      };
      const notifyMessage = `The ${selectedDebt.title} for ${
        selectedDebt.description
      } is no longer paid!`;
      this.alertMessage('success', 'Unpaid', notifyMessage);
    } else {
      selectedDebt = {
        ...selectedDebt,
        lineColor: Colors.greenColor,
        icon: checkImg,
        paid: true
      };
      const notifyMessage = `The ${selectedDebt.title} for ${selectedDebt.description} is paid!`;
      this.alertMessage('success', 'Paid', notifyMessage);
    }
    data[selectedDebt.id] = selectedDebt;
    this.forceUpdate();
  };

  addDebt = (title, description) => {
    const { data } = this.state;

    data.push({
      id: data.length,
      time: getDate(),
      title,
      description,
      lineColor: Colors.redColor,
      lineWidth: 2,
      icon: timesImg,
      paid: false
    });

    const notifyMessage = `The ${title} for ${description} has been added!`;
    this.alertMessage('success', 'Added Debt', notifyMessage);

    this.forceUpdate();
    this.scrollToBottom(true);
  };

  renderDetail = rowData => {
    if (rowData.owed && rowData.paid) {
      return (
        <Card
          containerStyle={[
            styles.rowCardContainerStyle,
            { backgroundColor: Colors.lightGreenColor }
          ]}
        >
          <Text style={styles.rowTitleTextStyle}>{rowData.title}</Text>
          <Text style={styles.rowDescriptionTextStyle}>{rowData.description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Divider />
            <Text style={styles.rowAmountTextStyle}>${rowData.amount}</Text>
            <Text style={styles.rowStatusTextStyle}>settled up</Text>
            <Text style={styles.rowTimeTextStyle}>{rowData.time}</Text>
          </View>
        </Card>
      );
    }
    if (rowData.owed && !rowData.paid) {
      return (
        <Card
          containerStyle={[styles.rowCardContainerStyle, { backgroundColor: Colors.lightRedColor }]}
        >
          <Text style={styles.rowTitleTextStyle}>{rowData.title}</Text>
          <Text style={styles.rowDescriptionTextStyle}>{rowData.description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Divider />
            <Text style={styles.rowAmountTextStyle}>${rowData.amount}</Text>
            <Text style={styles.rowStatusTextStyle}>owes you</Text>
            <Text style={styles.rowTimeTextStyle}>{rowData.time}</Text>
          </View>
        </Card>
      );
    }

    if (rowData.paid) {
      return (
        <Card
          containerStyle={[
            styles.rowCardContainerStyle,
            { backgroundColor: Colors.lightGreenColor }
          ]}
        >
          <Text style={styles.rowTitleTextStyle}>{rowData.title}</Text>
          <Text style={styles.rowDescriptionTextStyle}>{rowData.description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Divider />
            <Text style={styles.rowAmountTextStyle}>${rowData.amount}</Text>
            <Text style={styles.rowStatusTextStyle}>settled up</Text>
            <Text style={styles.rowTimeTextStyle}>{rowData.time}</Text>
          </View>
        </Card>
      );
    }

    return (
      <Card
        containerStyle={[styles.rowCardContainerStyle, { backgroundColor: Colors.lightRedColor }]}
      >
        <Text style={styles.rowTitleTextStyle}>{rowData.title}</Text>
        <Text style={styles.rowDescriptionTextStyle}>{rowData.description}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Divider />
          <Text style={styles.rowAmountTextStyle}>${rowData.amount}</Text>
          <Text style={styles.rowStatusTextStyle}>you owe</Text>
          <Text style={styles.rowTimeTextStyle}>{rowData.time}</Text>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <DropdownAlert closeInterval={5000} ref={c => (this.dropdownAlert = c)} zIndex={100} />
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'Debts Timeline', style: styles.headerTitleStyle }}
          rightComponent={{
            icon: 'plus',
            type: 'feather',
            color: '#f3f3f3',
            size: 30,
            component: TouchableOpacity,
            onPress: () => {
              this.setState({ addDebtModalIsVisible: true });
            }
          }}
          outerContainerStyles={{ backgroundColor: Colors.orangeColor, borderBottomWidth: 0 }}
        />
        <Modal
          isVisible={this.state.debtsModalIsVisible}
          onSwipe={() =>
            this.setState({
              debtsModalIsVisible: false
            })
          }
          swipeDirection="up"
          swipeThreshold={50}
        >
          <DebtsModal
            togglePaidStatus={this.togglePaidStatus}
            paid={this.state.selectedDebtPaid}
            hideDebtsModal={this.hideDebtsModal}
          />
        </Modal>
        <Modal
          isVisible={this.state.addDebtModalIsVisible}
          onSwipe={() =>
            this.setState({
              addDebtModalIsVisible: false
            })
          }
          swipeDirection="up"
          swipeThreshold={50}
        >
          <AddDebtModal addDebt={this.addDebt} hideAddDebtModal={this.hideAddDebtModal} />
        </Modal>
        <View style={styles.timelineContainer}>
          <Timeline
            style={styles.list}
            data={this.state.data}
            showTime={false}
            renderDetail={this.renderDetail}
            descriptionStyle={{ color: 'gray' }}
            options={{
              style: { paddingTop: 5 },
              ref: ref => (this.scrollView = ref)
            }}
            innerCircle={'icon'}
            iconStyle={{
              width: 22,
              height: 22
            }}
            onEventPress={this.onEventPress}
            separator={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGreyColor
  },
  timelineContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 20
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: '#666'
  },
  headerTitleStyle: {
    color: '#f3f3f3',
    fontSize: 20,
    fontFamily: 'Roboto'
  },
  rowTitleTextStyle: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    color: '#f3f3f3',
    fontSize: 20,
    marginBottom: 10
  },
  rowDescriptionTextStyle: {
    fontFamily: 'Roboto',
    color: '#f3f3f3',
    fontSize: 17
  },
  rowTimeTextStyle: {
    fontFamily: 'Roboto',
    alignSelf: 'flex-end',
    flex: 1,
    color: '#f9f9f9',
    fontSize: 14,
    textAlign: 'right'
  },
  rowCardContainerStyle: {
    flex: 1,
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 8
  },
  rowStatusTextStyle: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    color: '#f6f6f6',
    fontSize: 18
  },
  rowAmountTextStyle: {
    fontFamily: 'Roboto-Bold',
    alignSelf: 'flex-start',
    flex: 1,
    color: '#f3f3f3',
    fontSize: 20
  }
});
