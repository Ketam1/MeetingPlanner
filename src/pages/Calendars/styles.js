import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const CalendarsPageContainer = styled.div`
  background-color: ${colors.secondaryGrey};
  height: 100%;
`;

export const CalendarsHeader = styled.div`
  height: 50px; 
  display: flex;
  align-items: center;
  margin: 0px 15px;
  padding: 5px 0px;
  border-bottom: 2px solid ${colors.primaryBlue};
`;

export const CalendarsHeaderTitle = styled.div`
  font-size: 20px;
`;

export default null;
