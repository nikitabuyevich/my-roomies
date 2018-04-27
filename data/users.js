import jeffTurnerAvatarImage from '../assets/images/jeff_turner_avatar.png';
import daveBensonAvatarImage from '../assets/images/dave_benson_avatar.png';
import lucyWalkerAvatarImage from '../assets/images/lucy_walker_avatar.png';

export default [
  {
    id: 0,
    name: {
      first: 'Jeff',
      last: 'Turner'
    },
    sex: 'M',
    avatar: jeffTurnerAvatarImage,
    chores: [
      {
        id: 0,
        text: 'Cleaning dishes',
        completed: true
      },
      {
        id: 1,
        text: 'Vaccuming',
        completed: true
      },
      {
        id: 2,
        text: 'Cleaning bathroom',
        completed: false
      }
    ]
  },
  {
    id: 1,
    name: {
      first: 'Dave',
      last: 'Benson'
    },
    sex: 'M',
    avatar: daveBensonAvatarImage,
    chores: [
      {
        id: 0,
        text: 'Grocery shopping',
        completed: true
      },
      {
        id: 1,
        text: 'Sweeping floor',
        completed: true
      }
    ]
  },
  {
    id: 2,
    name: {
      first: 'Lucy',
      last: 'Walker'
    },
    sex: 'F',
    avatar: lucyWalkerAvatarImage,
    chores: [
      {
        id: 0,
        text: 'Cleaning room',
        completed: false
      },
      {
        id: 1,
        text: 'Wash car',
        completed: false
      }
    ]
  }
];
