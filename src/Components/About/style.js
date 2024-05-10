import styled, { css } from 'styled-components';

export const Container = styled.section`
    ${({ theme }) => css`
        margin: 0 auto;
        padding-top: 200px;
        padding-bottom: 120px;
        max-width: ${theme.containerWidth.big};
        display: flex;
        justify-content: center;
        flex-direction: column;
    `}

    @media (max-width: 1230px) {
        padding: 200px 30px;
        padding-bottom: 120px;
    }

    @media (max-width: 817px) {
        padding: 240px 30px;
        padding-bottom: 120px;
    }
`;

export const TitleAbout = styled.h2`
    ${({ theme }) => css`
        font-size: 72px;
        color: ${theme.colors.lightRed};
        font-family: ${theme.font.typewriterSerial};
        text-align: center;
        position: relative;
        height: auto;
        display: inline-block;
        margin: 0 auto;

        &:before {
            content: '';
            height: 4px;
            width: calc(100% + 44px);
            background-color: ${theme.colors.lightRed};
            position: absolute;
            bottom: -10px;
            left: -22px;
        }

        @media (max-width: 680px) {
            font-size: 60px;
        }

        @media (max-width: 321px) {
            font-size: 50px;
        }
    `}
`;

export const ContentSobre = styled.div`
    ${() => css`
        margin-top: 110px;
        display: flex;
        gap: 60px;
    `}

    @media (max-width: 920px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
        width: 592px;
        max-height: 760px; 
        max-width: 100%;
        object-fit: cover;
        
        @media (max-width: 1230px) {
            width: 492px;
            max-height: 660px; 
        }

        @media (max-width: 1080px) {
            width: 392px;
            max-height: 650px;
        }

        @media (max-width: 920px) {
            width: 592px;
            max-height: 760px; 
            width: 100%;
        }
    }
`;

export const TitleContent = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.secondLightRed};
        font-size: 36px;
        font-family: ${theme.font.typewriterSerial};
        margin-bottom: 10px;

        @media (max-width: 680px) {
            font-size: 30px;
        }

        
    `}
`;


export const AboutUs = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        gap: 34px;
    `}
`;

export const ParagraphAbout = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.lightBlack};
        font-family: ${theme.font.arial};
        font-size: 22px;
        line-height: 38px;
        letter-spacing: 2px;
    `}

    @media (max-width: 1230px) {
        font-size: 18px;
        line-height: 30px;
    }

    @media (max-width: 1080px) {
        font-size: 16px;
        line-height: 28px;
    }

    @media (max-width: 920px) {
        font-size: 18px;
        line-height: 30px;
    }
`;