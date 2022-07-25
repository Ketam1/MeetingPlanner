import React from 'react';

import {
  RouterNavLink,
  NavLabel
} from '../styles'

import NavItemHeader from '../NavItemHeader';

const NavItem = props => {
  const { label, Icon, to, children } = props.item;
  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <RouterNavLink
      exact
      to={to}
    >
      <Icon />
      <NavLabel>{label}</NavLabel>
    </RouterNavLink>
  );
};

export default NavItem;