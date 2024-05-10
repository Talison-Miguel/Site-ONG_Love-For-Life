import styled, { css } from 'styled-components';

export const Container = styled.section`
    ${() => css`
        max-width: 1180px;
        margin: 0 auto;
        padding: 120px 0;


        @media (max-width: 1220px) {
            padding: 120px 20px;
            max-width: 100%;
        }
    `}
`;


export const TitleHelp = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.lightRed};
        font-size: 60px;
        font-family: ${theme.font.typewriterSerial};
        text-align: center;
        letter-spacing: 3px;

        @media (max-width: 920px) {
            font-size: 50px;
        }

        @media (max-width: 680px) {
            font-size: 40px;
        }
    `}
`;

export const SubTitleHelp = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.darkGray};
        font-size: 30px;
        font-family: ${theme.font.typewriterSerial};
        text-align: center;
        letter-spacing: 3px;
        margin-top: 7px;

        @media (max-width: 920px) {
            font-size: 20px;
        }

        @media (max-width: 680px) {
            font-size: 18px;
        }
    `}
`;

export const ContentContainer = styled.div`
    ${() => css`
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        margin-top: 44px;
        

        @media (max-width: 920px) {
            flex-direction: column;
            gap: 40px
        }

        @media (max-width: 480px) {
            gap: 0;
        }
    `}
`;

export const QrCode = styled.img`
    ${() => css`
        margin-right: 60px;

        @media (max-width: 660px) {
            transform: scale(0.8);
        }
    `}
`;

export const Table = styled.table`
    ${({ theme }) => css`
        margin-top: 60px;
        display: block;
        padding: 32px;
        border: 4px solid ${theme.colors.lightRed};
        max-width: 60%;

        tbody tr:nth-child(2) td {
            background-color: ${theme.colors.white};
            color: ${theme.colors.lightRed}
        }

        @media (max-width: 920px) {
            max-width: 80%;
        }

        @media (max-width: 660px) {
            max-width: 100%;
        }

        @media (max-width: 660px) {
            padding: 18px;
        }

        
        @media (max-width: 680px) {
            td {
                border: 1px solid ${theme.colors.secondDarkRed};
            }

            tr:nth-child(1) td:nth-child(2) {
                background-color: ${theme.colors.white};
                color: ${theme.colors.lightRed}
            }

            tr:nth-child(2) td:nth-child(1) {
                background-color: ${theme.colors.secondDarkRed};
                color: ${theme.colors.white}
            }

            tr:nth-child(3) td:nth-child(2) {
                background-color: ${theme.colors.white};
                color: ${theme.colors.lightRed}
            }
        }
    `}
`;

export const LinhaTd = styled.td`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondDarkRed};
        font-family: ${theme.font.arial};
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        vertical-align: middle;
        line-height: 18px;
        letter-spacing: 1px;
        padding: 18px 40px;

        @media (max-width: 1020px) {
            padding: 18px 20px;
        }

        @media (max-width: 680px) {
            display: block;
            padding: 22px 40px;
            font-size: 14px;
        }
    `}
`;

export const Arrow = styled.img`
    ${() => css`
        width: 108px;
        height: 70px;
        margin-top: 60px;
        transform: scale(0.9);

        @media (max-width: 1180px) {
            visibility: hidden;
        }

        @media (max-width: 920px) {
            display: none;
        }
    `}
`;

export const ParagraphHelp = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.lightBlack};
        font-size: 18px;
        font-family: ${theme.font.arial};
        font-weight: bold;
        letter-spacing: 1.5px;
        margin-top: 60px;
        text-align: center;
        line-height: 24px;

        @media (max-width: 920px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            margin: 0 auto;
            max-width: 80%;
        }
    `}
`;
