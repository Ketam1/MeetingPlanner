import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListSubheader,
} from '@mui/material';
import ListHeader from 'components/Molecules/ListHeader';

function UsersList({
  users,
  handleAdd,
  handleDelete,
  handleEdit,
}) {
  let mockUsers = [{
    name: 'jair',
    id: 1,
    contacts: [
      {
        name: 'messias',
        id: 7
      },
      {
        name: 'bolsonaro',
        id: 17
      }
    ]
  }];

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">
          Users List (Click on the User to show the respective contact list)
        </ListSubheader>
      }
    >
      {mockUsers.map(user => (
        <ListHeader
          headerTitle={user.name}
          headerId={user.id}
          subRows={user.contacts}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};


export default UsersList;