import styled, { css } from 'styled-components';


export const Header = styled.header`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        height: calc(100vh - 90px);
    `}
`;
