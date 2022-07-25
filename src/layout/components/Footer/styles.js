import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const Footer = styled.div`
  background-color: ${colors.black};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const LeftInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const RightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const Info = styled.div`
  color: ${colors.white};
  text-align: ${props => (props.justify && 'justify')};
  margin-bottom: 5px;

  h1 {
    margin: 0;
  }
`;

export default null;