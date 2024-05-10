import styled, { css, keyframes } from 'styled-components';

import imgHero from '../../assets/images/image-hero.jpg'

export const DivHero = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        margin-top: 90px;
        background-image: url(${imgHero});
        height: calc(100vh - 90px);
        background-size: cover;
        background-position: center;
        background-attachment: local;
        position: relative;
    `}
`;

export const DivTitle = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        @media (max-width: 420px) {
            padding: 0 20px;
        }
    `}
`;

export const H1Hero = styled.h1`
    ${({ theme }) => css`
        font-family: ${theme.font.typewriterSerial};
        font-size: 72px;
        text-align: center;
        letter-spacing: 5px;
        line-height: 80px;

        @media (max-width: 1080px) {
            font-size: 60px;
            line-height: 64px;
        }

        @media (max-width: 660px) {
            font-size: 46px;
            line-height: 50px;
        }

        @media (max-width: 420px) {
            font-size: 36px;
            line-height: 40px;
        }
    `}
`;

export const SpanH1Hero = styled.span`
    ${( ) => css`
        font-size: 48px;
        display: block;

        @media (max-width: 1080px) {
            font-size: 36px;
        }

        @media (max-width: 660px) {
            font-size: 30px;
        }

        @media (max-width: 420px) {
            font-size: 20px;
        }
    `}
`;

const arrowNextAnimation = keyframes`
    0% {
        bottom: 80px;
    }
    50% {
        bottom: 60px; 
    }
    100% {
        bottom: 80px; 
    }
`;

export const DivArrowNext = styled.div`
    ${({ theme }) => css`
        font-family: ${theme.font.arialBlack};
        font-size: 16px;
        letter-spacing: 1px;
        position: absolute;
        right: 60px;
        bottom: 80px;
        display: flex;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        gap: 8px;
        animation: ${arrowNextAnimation} 1.2s infinite ease-in-out;

        a > svg {
            transition: all 0.5s;
        }

        a > svg:hover {
            color: ${theme.colors.lightRed};
            transform: scale(1.1);
        }
    `}
`;

export const DivHelp = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -80px;
        background-color: ${theme.colors.thirdDarkRed};
        width: 100%;
        height: 80px;

        @media (max-width: 820px) {
            height: auto;
            bottom: -126px;
        }

        @media (max-width: 820px) {
            bottom: -90px;
        }

        @media (max-width: 816px) {
            bottom: -130px;
        }

        @media (max-width: 660px) {
            bottom: -124px;
        }

        @media (max-width: 452px) {
            bottom: -142px;
        }
    `}
`;

export const ContainerHelp = styled.div`
    ${({ theme }) => css`
        width: ${theme.containerWidth.big};
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @media (max-width: 1230px) {
            padding: 0 30px;
        }

        @media (max-width: 820px) {
            gap: 18px;
            padding: 30px 20px;
            justify-content: center;
        }

        & > a {
            @media (max-width: 660px) {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
    `}
`;

export const PHelp = styled.p`
    ${({ theme }) => css`
        font-size: 22px;
        font-family: ${theme.font.arialBlack};
        text-transform: uppercase;

        @media (max-width: 820px) {
            text-align: center;
        }

        @media (max-width: 660px) {
            font-size: 18px;
        }
        
        @media (max-width: 460px) {
            font-size: 16px;
        }

        @media (max-width: 400px) {
            font-size: 14px;
        }
    `}
`;

export const BtnHelp = styled.button`
    ${({ theme }) => css`
        font-size: 18px;
        font-family: ${theme.font.arialBlack};
        text-transform: uppercase;
        width: 260px;
        height: 50px;
        background-color: ${theme.colors.white};
        color: ${theme.colors.lightRed};
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border: 2px solid transparent;
        transition: all 1s;

        @media (max-width: 560px) {
            font-size: 14px;
            width: 100%;
        }

        &:hover {
            border: 1px solid rgba(0, 0, 0, 0.4);
            transform: scale(1.04);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        }
    `}
`;