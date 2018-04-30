import Colors from '../constants/Colors';
import checkImg from '../assets/images/check.png';
import timesImg from '../assets/images/times.png';

export default [
  {
    id: 0,
    time: 'APR 5, 2018',
    title: 'Rent',
    description: 'The month of April',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    amount: 600.0,
    owed: true,
    paid: true
  },
  {
    id: 1,
    time: 'APR 6, 2018',
    title: 'Eggs from Dave',
    description: 'Grocery store trip',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    owed: false,
    amount: 8.99,
    paid: false
  },
  {
    id: 2,
    time: 'APR 8, 2018',
    title: 'Movies with Lucy',
    description: 'Watching Avengers',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    amount: 14.0,
    owed: false,
    paid: true
  },
  {
    id: 3,
    time: 'APR 10, 2018',
    title: 'Lunch with Dave',
    description: 'Food at Marianos',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    amount: 12.0,
    owed: false,
    paid: true
  },
  {
    id: 4,
    time: 'APR 10, 2018',
    title: 'Bowling with Lucy',
    description: 'Renting shoes and games',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    amount: 18.0,
    owed: true,
    paid: true
  },
  {
    id: 5,
    time: 'APR 11, 2018',
    title: 'Dancing with Lucy',
    description: 'Renting shoes',
    lineColor: Colors.redColor,
    lineWidth: 2,
    icon: timesImg,
    amount: 18.0,
    owed: true,
    paid: false
  },
  {
    id: 6,
    time: 'APR 12, 2018',
    title: 'Ice-Skating with Dave',
    description: 'Renting ice skates',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    amount: 22.0,
    owed: false,
    paid: true
  },
  {
    id: 7,
    time: 'APR 14, 2018',
    title: 'Ice-Cream with Lucy',
    description: 'Chocolate sunday cone',
    lineColor: Colors.redColor,
    lineWidth: 2,
    icon: timesImg,
    amount: 6.0,
    owed: false,
    paid: false
  }
];
