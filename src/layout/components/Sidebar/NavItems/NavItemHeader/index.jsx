import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import {
    NavItemHeaderButton,
    NavChildrenBlock,
    NavLabel,
    RouterNavLink
} from '../styles'

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

const NavItemHeader = props => {
  const { item } = props;
  const { label, Icon, to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpand] = useState(
    location.pathname.includes(headerToPath)
  );

  const onExpandChange = e => {
    e.preventDefault();
    setExpand(expanded => !expanded);
  };

  const ChevronIcon = expanded => {
    if(expanded.expanded) {
      return (
        <ExpandLess />
      );
    } else {
      return (
        <ExpandMore />
      );
    }
  };
  
  return (
    <>
      <NavItemHeaderButton onClick={onExpandChange} expanded={expanded}>
        <Icon />
        <NavLabel>{label}</NavLabel>
        <ChevronIcon expanded={expanded} />
      </NavItemHeaderButton>

      {expanded && (
        <NavChildrenBlock>
          {children.map((item, index) => {
            const key = `${item.label}-${index}`;

            const { label, Icon, children } = item;
            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <RouterNavLink
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
              >
                <Icon />
                <NavLabel>{label}</NavLabel>
              </RouterNavLink>
            );
          })}
        </NavChildrenBlock>
      )}
    </>
  );
};

export default NavItemHeader;