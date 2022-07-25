import styled from 'styled-components';

export const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 100px 1fr 100px;
    min-height: 100vh;
`;

export const PageHeader = styled.div`
    grid-area: 1 / 1 / 2 / 3;
`;

export const PageAside = styled.div`
    grid-area: 2 / 1 / 4 / 2;
`;

export const PageMain = styled.div`
    grid-area: 2 / 2 / 2 / 3;
`;

export const PageFooter = styled.div`
    grid-area: 3 / 2 / 4 / 3;
`;

export default null;