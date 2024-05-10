import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
        width: 25%;
        min-width: 295px;
        height: 282px;
        margin-top: 80px;


    `}
`;

export const ContainerTitle = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        gap: 10px;
    `}
`;

export const TitleItem = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.darkRed};
        font-family: ${theme.font.typewriterSerial};
        font-size: 30px;
        text-align: center;
    `}
`;

export const PItem = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.font.arial};
        font-size: 16px;
        color: ${theme.colors.lightBlack};
        line-height: 30px;
        text-align: center;
        padding: 0 22px;
        letter-spacing: 0.8px;
        height: 180px;
    `}
`;