import React from 'react';
import { Outlet } from 'react-router-dom';

import { 
  CalendarsHeader,
  CalendarsHeaderTitle,
  CalendarsPageContainer,
} from './styles';

const Calendars = props => {
  return (
    <CalendarsPageContainer>
      <CalendarsHeader>
        <CalendarsHeaderTitle>
          Calendar - Schedule a Meeting!
        </CalendarsHeaderTitle>
      </CalendarsHeader>
      <Outlet />
    </CalendarsPageContainer>
  );
};

export default Calendars;