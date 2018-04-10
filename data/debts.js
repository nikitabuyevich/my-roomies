import Colors from '../constants/Colors';
import checkImg from '../assets/images/check.png';
import timesImg from '../assets/images/times.png';

export default [
  {
    time: 'APR 5, 2018',
    title: 'Pay landlord Rent',
    description: '$600 for the month of April',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    paid: true
  },
  {
    time: 'APR 6, 2018',
    title: 'Pay Dave for Eggs',
    description: '$8.99 for dozen eggs',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    paid: true
  },
  {
    time: 'APR 8, 2018',
    title: 'Pay Lucy for Movies',
    description: '$14 for watching Avengers',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    paid: true
  },
  {
    time: 'APR 10, 2018',
    title: 'Pay Dave for Lunch',
    description: '$12 for food at Marianos',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    paid: true
  },
  {
    time: 'APR 11, 2018',
    title: 'Pay Lucy for Bowling',
    description: '$18 for renting shoes and games',
    lineColor: Colors.redColor,
    lineWidth: 2,
    icon: timesImg,
    paid: false
  },
  {
    time: 'APR 12, 2018',
    title: 'Pay Dave for Ice-Skating',
    description: '$22 for renting ice skates',
    lineColor: Colors.greenColor,
    lineWidth: 2,
    icon: checkImg,
    paid: true
  },
  {
    time: 'APR 14, 2018',
    title: 'Pay Lucy for Ice-Cream',
    description: '$6 for chocolate sunday cone',
    lineColor: Colors.redColor,
    lineWidth: 2,
    icon: timesImg,
    paid: false
  }
];
