import {
  Home,
} from '@mui/icons-material';

export const getSideMenu = (items) => {
  const sideMenu = [
    {
      label: 'Home',
      Icon: Home,
      to: '/',
    },
  ];
  if(items){
    items.forEach(item => {
      sideMenu.push(item);
    });
  }
  
  return sideMenu;
}

