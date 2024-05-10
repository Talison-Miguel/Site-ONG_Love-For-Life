import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        height: 90px;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: ${theme.colors.white};
        z-index: 999;
        max-width: 100vw;

    `}
`;


export const Nav = styled.nav`
    ${({ theme }) => css`
        width: ${theme.containerWidth.big};
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;  
        z-index: 999;
        
        @media (max-width: 1230px) {
            padding: 0 30px;
        }
    `}
`;

export const ListItemMenu = styled.ul.attrs(props => ({ isactive: props.isactive ? 'true' : undefined }))`
    ${({ theme }) => css`
        display: flex;
        gap: 40px;
        position: relative;
        transition: 0;

        li {
            color: ${theme.colors.black};
            list-style: none;
            font-family: ${theme.font.arialBlack};
            text-transform: uppercase;
            letter-spacing: 0.75px;
            transition: all 0.6s;
            position: relative;
        }

        li:hover {
            color: ${theme.colors.lightRed}
        }

        li:before {
            content: '';
            width: calc(100% + 4px);
            height: 2px;
            background-color: ${theme.colors.lightRed};
            position: absolute;
            left: -2px;
            bottom: -3px;
            transition: all 0.6s;
            transform-origin: center; 
            transform: scaleX(0);
        }

        li:hover:before {
            transform: scaleX(1);
        }

        @media (max-width: 920px) {
            width: 100%;
            position: absolute;
            top: 90px;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: flex-start;
            visibility: hidden;
            gap: 30px;
            padding: 40px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            z-index: -99;
            transform: translateY(-320%);
            transition: all 0.5s ease-in;

            li {
                opacity: 0;
                transition: all 0s ease-in;
            }

            ${({ isactive }) => isactive && css`
                transition: transform 0.5s ease;
                background-color: ${props => props.theme.colors.white};
                transform: translateY(0);
                visibility: visible;

                li {
                    opacity: 1;
                }
            `}
        }

    `}
`;

export const ContainerHambuguer = styled.div`
    display: none;

    @media (max-width: 920px) {
        display: flex;
    }
`;

export const CheckboxMenu = styled.input`
    position: absolute;
    opacity: 0;
`;

export const NewCheckbox = styled.label`
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 34px;
`;

export const CheckboxSpan = styled.span`
    ${({ theme }) => css`
        position: absolute;
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 30px;
        background: ${theme.colors.lightRed};
        transition: 0.40s ease-in-out;
    `}
`;

export const FirstSpan = styled(CheckboxSpan)`
    top: 0;
`;

export const SecondSpan = styled(CheckboxSpan)`
    top: 9px;
`;

export const ThirdSpan = styled(CheckboxSpan)`
    top: 18px;
`;

export const StyledCheckboxMenu = styled(CheckboxMenu)`
    &:checked + ${NewCheckbox} span:nth-child(1) {
        transform: rotate(-45deg);
        top: 8px;
    }

    &:checked + ${NewCheckbox} span:nth-child(2) {
        opacity: 0;
    }

    &:checked + ${NewCheckbox} span:nth-child(3) {
        transform: rotate(45deg);
        top: 8px;
    }
`;