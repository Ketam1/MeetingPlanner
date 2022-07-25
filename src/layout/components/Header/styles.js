import styled from 'styled-components';
import colors from 'assets/styles/colors';

export const Header = styled.div`
    background-color: ${colors.black};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: ${colors.white};
    margin-left: 20px;
    h1 {
      margin: 0;
    }
`;

export default null;