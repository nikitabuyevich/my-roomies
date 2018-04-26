import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import Modal from 'react-native-modal';
import DropdownAlert from 'react-native-dropdownalert';
import NavBar from '../components/NavBar';
import debts from '../data/debts';
import DebtsModal from '../components/DebtsModal';
import Colors from '../constants/Colors';
import checkImg from '../assets/images/check.png';
import timesImg from '../assets/images/times.png';

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
      selectedDebtPaid: false
    };
  }

  onEventPress(selectedData) {
    this.setState({
      selected: selectedData,
      selectedDebtPaid: selectedData.paid,
      debtsModalIsVisible: true
    });
  }

  componentDidMount = () => {
    console.log(this.state.data);
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

  alertMessage = (type, title, message) => {
    this.dropdownAlert.alertWithType(type, title, message);
  };

  hideDebtsModal = () => {
    this.setState({
      debtsModalIsVisible: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DropdownAlert closeInterval={5000} ref={c => (this.dropdownAlert = c)} zIndex={100} />
        <NavBar title="💵 Debts Timeline" />
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
        <View style={styles.timelineContainer}>
          <Timeline
            style={styles.list}
            data={this.state.data}
            circleSize={20}
            circleColor="rgba(0,0,0,0)"
            lineColor="rgb(45,156,219)"
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{
              textAlign: 'center',
              backgroundColor: Colors.lightBlueColor,
              color: 'white',
              padding: 5,
              borderRadius: 13
            }}
            descriptionStyle={{ color: 'gray' }}
            options={{ style: { paddingTop: 5 } }}
            innerCircle={'icon'}
            onEventPress={this.onEventPress}
            separator={false}
            detailContainerStyle={{
              marginBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
              borderWidth: 2,
              borderColor: Colors.lightBlueColor,
              borderRadius: 10
            }}
            columnFormat="two-column"
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
  }
});
