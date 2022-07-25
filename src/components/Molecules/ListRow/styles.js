import styled from 'styled-components';
import colors from 'assets/styles/colors';
import {
  ListItemButton,
  ListItemText,
} from '@mui/material';

import {
  SubdirectoryArrowRight,
} from '@mui/icons-material';

export const ListButton = styled(ListItemButton)`
  && {
    background-color: ${colors.white};
  }
`;

export const ListText = styled(ListItemText)`
  && {
    margin-top: 6px;
    margin-left: 2px;
  }
`;

export const RightArrow = styled(SubdirectoryArrowRight)`
  && {
    font-size: 14px;
    margin-left: 10px;
  }
`;

export default null;
