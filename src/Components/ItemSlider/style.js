import styled, { css } from 'styled-components';

export const TitleSlide = styled.h2`
    ${({ theme }) => css`
        font-family: ${theme.font.typewriterSerial};
        color: ${theme.colors.white};
        font-size: 72px;
        text-align: center;
        position: relative;
        display: inline-block;
        margin: 0 auto;
        margin-top: 200px;

        &:before {
            content: '';
            height: 4px;
            width: calc(100% + 120px);
            background-color: ${theme.colors.white};
            position: absolute;
            bottom: -25px;
            left: -60px;
        }
    `}
`;

export const Slide = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;;
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        max-height: 98vh;

        @media (max-width: 640px) {
            /* min-height: 100vh; */
        }

        @media (max-height: 580px) {
            min-height: 100vh;
        }
    `}
`;

export const Information = styled.div`
    ${() => css`
        margin: 0 auto;
        max-width: 970px;
        display: flex;
        align-items: center;
        gap: 40px;

        @media (max-width: 1180px) {
            max-width: 90%; 
        }

        @media (max-width: 740px) {
            flex-direction: column;  
            gap: 20px;
        }

        @media (max-width: 640px) {
            gap: 10px;
        }

        

        & > img {
            height: auto;
            margin-top: 0;
            object-fit: cover;

            @media (max-width: 740px) {
                width: 124px;
            }

            @media (max-width: 480px) {
                display: none;
            }
        }
    `}
`;

export const TitleInformation = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        font-size: 30px;
        font-family: ${theme.font.typewriterSerial};
        margin-top: 40px;
        max-width: 100%;

        @media (max-width: 920px) {
            font-size: 28px;
        }

        @media (max-width: 640px) {
            font-size: 20px;
            margin-top: 20px;
        }

        @media (max-width: 321px) {
            margin-top: 8px;
            font-size: 17px;
        }
    `}
`;

export const TextInformation = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.lightBlack};
        font-size: 16px;
        font-family: ${theme.font.arial};
        line-height: 18px;
        letter-spacing: 0.3px;
        margin-top: 20px;
        margin-bottom: 20px;

        @media (max-width: 920px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        @media (max-height: 580px) {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    `}
`;

export const SpanInformation = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.secondLightRed};
        font-size: 16px;
        font-family: ${theme.font.arial};
        font-weight: bold;
        font-style: italic;
        margin-bottom: 60px;
        display: block;

        @media (max-width: 920px) {
            font-size: 14px;
        }

        @media (max-width: 740px) {
            margin-bottom: 0px;
        }

        @media (max-width: 480px) {
            margin-bottom: 40px;
        }
    `}
`;

export const ContainerPhoto = styled.div`
    ${({ theme }) => css`
        margin: 0 auto;
        margin-top: 40px;
        position: relative;

        @media (max-width: 1180px) {
            max-width: 90%; 
        }

        @media (max-width: 780px) {
            margin-top: 20px;
        }

        &:before {
            content: '';
            width: 50px;
            height: 50px;
            background-color: ${theme.colors.white};
            bottom: 0;
            right: 0;
            position: absolute;
        }
    `}
`;

export const Photo = styled.img`
    ${({ theme }) => css`
        max-width: 100%;
        height: 526px;
        object-fit: cover;

        &:before {
            content: '';
            width: 50px;
            height: 50px;
            background-color: ${theme}
        }

        @media (max-width: 880px) {
            height: 364px;
        }
        
        @media (max-width: 400px) {
            height: 205px;
        }

        @media (max-width: 360px) {
            height: 154px;
        }

        
    `}
`;

export const SmallPhoto = styled.img`
    ${() => css`
        object-fit: cover;
        width: 240px;
        height: 240px;
        position: absolute;
        bottom: -40px;
        right: -14px;

        @media (max-width: 1180px) {
            width: 200px;
            height: 200px;
        }

        @media (max-width: 920px) {
            width: 180px;
            height: 180px;
        }

        @media (max-width: 740px) {
            width: 140px;
            height: 140px;
            bottom: -16px;
        }

        @media (max-width: 400px) {
            width: 80px;
            height: 80px;
            bottom: -10px;
            right: -8px;
        }
    `}
`;