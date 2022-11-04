import React from 'react';
import NavItem from './NavItems/NavItem';
import { getSideMenu } from './helper';

import { Sidebar } from './styles';

const SidebarComponent = ({ items }) => {
  const sideMenu = getSideMenu(items);
  return (
    <Sidebar>
      {sideMenu.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </Sidebar>
  );
};

export default SidebarComponent;