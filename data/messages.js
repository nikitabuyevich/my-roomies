export default [
  {
    _id: 1,
    text: 'Jeff Turner paid his $8.99 debt owed to Dave Benson for the eggs',
    createdAt: new Date('April 6, 2018 15:09:00'),
    system: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Added it to our debts 👍',
    createdAt: new Date('April 6, 2018 15:04:00'),
    user: {
      _id: 1,
      name: 'Jeff Turner',
      avatar: 'https://i.imgur.com/t1jJtKu.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Came out to $8.99',
    image: 'https://i.imgur.com/mUblypI.gif',
    createdAt: new Date('April 6, 2018 14:58:00'),
    user: {
      _id: 3,
      name: 'Dave Benson',
      avatar: 'https://i.imgur.com/DWg0fS1.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Sure thing!',
    createdAt: new Date('April 6, 2018 14:53:00'),
    user: {
      _id: 3,
      name: 'Dave Benson',
      avatar: 'https://i.imgur.com/DWg0fS1.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Yeah, can you pick up some eggs?',
    createdAt: new Date('April 6, 2018 14:52:00'),
    user: {
      _id: 1,
      name: 'Jeff Turner',
      avatar: 'https://i.imgur.com/sUighr1.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Hey guys, I'm at the grocery store. Anyone need anything?",
    createdAt: new Date('April 6, 2018 14:46:00'),
    user: {
      _id: 3,
      name: 'Dave Benson',
      avatar: 'https://i.imgur.com/DWg0fS1.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Awesome 👍',
    createdAt: new Date('April 6, 2018 13:26:00'),
    user: {
      _id: 2,
      name: 'Lucy Walker',
      avatar: 'https://i.imgur.com/kq60ViM.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Just dropped off our monthly rent 💸',
    createdAt: new Date('April 6, 2018 13:24:00'),
    user: {
      _id: 1,
      name: 'Jeff Turner',
      avatar: 'https://i.imgur.com/sUighr1.png'
    },
    sent: true,
    received: true
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Welcome to MyRoomies chat 💬',
    createdAt: new Date(),
    system: true
  }
];
