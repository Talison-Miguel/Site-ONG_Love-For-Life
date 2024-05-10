import * as Styled from './styles';
import logo from '../../assets/images/logo.jpg'
import { useState } from 'react';

export function Menu() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setTimeout(() => {
            setIsActive(!isActive)
        }, 100);
    }

    function handleCloseMenu() {
        setTimeout(() => {
            setIsActive(false);
            document.getElementById("checkbox-menu").checked = false;
        }, 100);
    }

    return (
        <Styled.Container>
            <Styled.Nav>
                <a href="#"><img src={logo} alt="logo Love For Life" /></a>
                <Styled.ListItemMenu isactive={isActive}>
                    <li><a href="#" onClick={handleCloseMenu}>Home</a></li>
                    <li><a href="#sobre" onClick={handleCloseMenu}>Sobre</a></li>
                    <li><a href="#project" onClick={handleCloseMenu}>Projetos</a></li>
                    <li><a href="#help" onClick={handleCloseMenu}>Apoie</a></li>
                    <li><a href="#footer" onClick={handleCloseMenu}>Contatos</a></li>
                </Styled.ListItemMenu>

                <Styled.ContainerHambuguer>
                    <Styled.StyledCheckboxMenu type="checkbox" id="checkbox-menu" />
                    <Styled.NewCheckbox htmlFor="checkbox-menu" id="new-checkbox" onClick={handleClick}>
                        <Styled.FirstSpan></Styled.FirstSpan>
                        <Styled.SecondSpan></Styled.SecondSpan>
                        <Styled.ThirdSpan></Styled.ThirdSpan>
                    </Styled.NewCheckbox>
                </Styled.ContainerHambuguer>

            </Styled.Nav>
        </Styled.Container>
    )
}
