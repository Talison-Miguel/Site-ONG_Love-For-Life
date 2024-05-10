import styled, { css } from 'styled-components';
import texture from '../../assets/images/texture.jpg'

export const Container = styled.section`
    ${() => css`
        max-width: 100%;
        height: auto;
        background-image: url(${texture});
        background-size: cover;
        background-position: center;
        padding-bottom: 120px;
    `}
`;

export const ContentContainer = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.containerWidth.big};
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
`;

export const SlideContainer = styled.div`
    ${({ theme }) => css`
        max-width:  calc(${theme.containerWidth.big} - 150px);
        margin: 0 auto;
        height: 100%;
        display: block;


        @media (max-width: 1180px) {
            max-width: calc(100% - 128px);
        }

        @media (max-width: 640px) {
            max-width: calc(100% - 40px);
        }
    `}
`;

export const TitleSlide = styled.h2`
    ${({ theme }) => css`
        font-family: ${theme.font.typewriterSerial};
        color: ${theme.colors.white};
        font-size: 72px;
        text-align: center;
        position: relative;
        display: inline-block;
        margin: 0 auto;
        margin-top: 120px;

        &:before {
            content: '';
            height: 4px;
            width: calc(100% + 120px);
            background-color: ${theme.colors.white};
            position: absolute;
            bottom: -25px;
            left: -60px;
        }

        @media (max-width: 680px) {
            font-size: 60px;

            &:before {
                width: calc(100% + 60px);
                left: -30px;
            }
        }
        
        @media (max-width: 321px) {
            font-size: 50px;

            &:before {
                width: calc(100% + 40px);
                left: -20px;
            }
        }
    `}
`;



export const SliderContainer = styled.div`
    ${() => css`
        max-width: 100%;
    `}
`;




