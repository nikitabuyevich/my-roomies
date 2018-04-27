import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Header, Card } from 'react-native-elements';
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
    this.scrollToBottom();
  };

  onEventPress(selectedData) {
    this.setState({
      selected: selectedData,
      selectedDebtPaid: selectedData.paid,
      debtsModalIsVisible: true
    });
  }

  scrollToBottom = () => {
    setTimeout(() => {
      this.scrollView.scrollToEnd({ animated: true });
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
    this.scrollToBottom();
  };

  renderDetail = rowData => {
    if (rowData.paid) {
      return (
        <Card title={rowData.title} containerStyle={{ flex: 1, margin: 0 }}>
          <View>
            <Text>{rowData.description}</Text>
          </View>
        </Card>
      );
    }

    return (
      <Card title={rowData.title} containerStyle={{ flex: 1, margin: 0 }}>
        <View>
          <Text>{rowData.description}</Text>
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
            color: '#fff',
            size: 30,
            component: TouchableOpacity,
            onPress: () => {
              this.setState({ addDebtModalIsVisible: true });
            }
          }}
          outerContainerStyles={{ backgroundColor: Colors.orangeColor }}
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
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
});
