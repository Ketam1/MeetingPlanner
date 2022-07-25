import React from 'react';
import { Outlet } from 'react-router-dom';

import { 
  UsersHeader,
  UsersHeaderTitle,
  UsersPageContainer,
} from './styles';

const Users = props => {
  return (
    <UsersPageContainer>
      <UsersHeader>
        <UsersHeaderTitle>
          Users Page - Add or Manage a user
        </UsersHeaderTitle>
      </UsersHeader>
      <Outlet />
    </UsersPageContainer>
  );
};

export default Users;