import {
  Home,
  PeopleAlt,
  PersonAdd,
  ManageAccounts,
} from '@mui/icons-material';

export const sideMenu = [
  {
    label: 'Home',
    Icon: Home,
    to: '/',
  },
  {
    label: 'Users',
    Icon: PeopleAlt,
    to: '/users',
    children: [
      {
        label: 'Register',
        Icon: PersonAdd,
        to: 'register',
      },
      {
        label: 'Manage',
        Icon: ManageAccounts,
        to: 'manage',
      },
    ],
  },
];