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
    label: 'Branches',
    Icon: PeopleAlt,
    to: '/branch',
    children: [
      {
        label: 'Meetings',
        Icon: ManageAccounts,
        to: 'meetings',
      },
    ],
  },
];