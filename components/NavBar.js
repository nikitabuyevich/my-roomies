import React from 'react';
import NavBar, { NavTitle, NavButton } from 'react-native-nav';

export default function NavBarCustom(props) {
  return (
    <NavBar>
      <NavButton />
      <NavTitle>{props.title}</NavTitle>
      <NavButton />
    </NavBar>
  );
}
