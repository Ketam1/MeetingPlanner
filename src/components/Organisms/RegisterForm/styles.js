import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const RegisterFormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    box-shadow: ${colors.primaryBlue} 0px 3px 8px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 15px;
`;

export default null;