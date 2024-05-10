import styled, { css } from 'styled-components';

import texture from '../../assets/images/texture.jpg'

export const Container = styled.footer`
    ${() => css`
        background-image: url(${texture});
        width: 100%;
        height: 382px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;

        @media (max-width: 920px) {
            height: auto;
        }
    `}
`;

export const ContentItens = styled.div`
    ${() => css`
        max-width: 1180px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 302px;
        width: 100%;
    `}

    @media (max-width: 920px) {
        & > img {
            transform: scale(0.7);
        }
    }

    @media (max-width: 680px) {
        flex-direction: column;
        height: auto;
        gap: 50px;
        padding: 40px 40px;
        align-items: flex-start;

        & > img {
            transform: scale(1);
        }
    }
`;

export const PFooter = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondDarkRed};
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${theme.font.arial};
        font-size: 16px;
        letter-spacing: 0.75px;

        @media (max-width: 680px) {
            padding: 0 20px;
        }

        @media (max-width: 460px) {
            font-size: 12px;
            line-height: 18px;
        }
    `}
`;

export const TitleContatos = styled.h3`
    ${({ theme }) => css`
        font-family: ${theme.font.arialBold};
        color: ${theme.colors.white};
        font-size: 30px;
        line-height: 30px;
        letter-spacing: 1px;
        margin-bottom: 30px;

        @media (max-width: 920px) {
            font-size: 24px;
        }
    `}
`;

export const listItens = styled.ul`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: ${theme.colors.white};
        font-family: ${theme.font.arial};
        font-size: 18px;
        letter-spacing: 0.5px;
        min-width: 222px;

        @media (max-width: 920px) {
            font-size: 16px;
        }

        & > a {
            transition: 0.5s;
        }

        & > a li {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        & > li {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        & > a:hover  {
            transform: scale(1.1);
        }
    `}
`;