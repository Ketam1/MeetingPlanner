import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const CalendarPageContainer = styled.div`
  height: 100vh !important;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: ${props => props.noForms ? "100%" : "75%"};
  border-right: 1px solid ${colors.black};
  display: flex;
  justify-content: center;
`;

export const CalendarContainer = styled.div`
  width: 100%;
`;

export const RightContainer = styled.div`
  height: 100%;
  width: ${props => props.noForms ? "0%" : "25%"};
`;

export const TextBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`ks
  font-size: 25px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  width: 80%;
  text-justify: justify;

  p {
    color: ${colors.primaryBlue};
  }
`;

export const BlueText = styled.span`
  color: ${colors.primaryBlue};
  font-weight: bold;
`;

export default null;