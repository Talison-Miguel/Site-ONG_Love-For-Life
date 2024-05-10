import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 1230px) {
            justify-content: center;
        }

        & > div:nth-child(2) {
            border-left: 2px solid ${theme.colors.opacityRed};
            border-right: 2px solid ${theme.colors.opacityRed}; 
        }

        & > div:nth-child(3) {
            border-right: 2px solid ${theme.colors.opacityRed}; 
        }

        @media (max-width: 1230px) {
            & > div:nth-child(2) {
                border-left: 2px solid ${theme.colors.opacityRed};
            }

            & > div:nth-child(3) {
                border-right: none; 
            }
        }

        @media (max-width: 982px) {
            & > div:nth-child(2) {
                border-right: none;
            }

            & > div:nth-child(3) {
                border-right: 2px solid ${theme.colors.opacityRed}; 
            }
        }

        @media (max-width: 686px) {
            & > div:nth-child(1) {
                border-bottom: 2px solid ${theme.colors.opacityRed};
            }

            & > div:nth-child(2) {
                border-left: none;
                border-bottom: 2px solid ${theme.colors.opacityRed};
            }

            & > div:nth-child(3) {
                border-right: none; 
                border-bottom: 2px solid ${theme.colors.opacityRed};
            }
        }
    `}
`;
