import React from 'react';
import NavItem from './NavItems/NavItem';
import { sideMenu } from './helper';

import { Sidebar } from './styles';

const SidebarComponent = props => {
  return (
    <Sidebar>
      {sideMenu.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </Sidebar>
  );
};

export default SidebarComponent;