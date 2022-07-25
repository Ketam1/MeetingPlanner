import {
  NavLink,
} from 'react-router-dom';

import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const RouterNavLink = styled(NavLink)`
  padding: 0.8rem 1.25rem;
  text-decoration: none;
  color: ${colors.primaryGrey};
  display: flex;
  align-items: center;

  &.active {
    color: ${colors.white};
  }
`;

export const NavIcon = styled.span`
  color: #d1d5db;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const NavLabel = styled.span`
  font-size: 1rem;
`;

export const NavItemHeaderButton = styled.button`
  padding: 0.8rem 1.25rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100 %;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => (props.expanded ? colors.white : colors.primaryGrey)};
`;

export const NavChildrenBlock = styled.div`
    background-color: hsl(226, 71 %, 36 %);
`;