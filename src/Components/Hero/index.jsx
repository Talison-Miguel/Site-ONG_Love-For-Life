import * as Styled from './styles';

import { IoArrowDownOutline } from "react-icons/io5";
import logo from '../../assets/images/small-logo.jpg'
import { useEffect, useState } from 'react';

export function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffsetY(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Styled.DivHero style={{backgroundPositionY: `${offsetY * 0.2}px`}}>
            <Styled.DivTitle>
                <Styled.H1Hero>
                    LOVE FOR LIFE 
                    <Styled.SpanH1Hero>Nós Acreditamos No Amor</Styled.SpanH1Hero> 
                </Styled.H1Hero>
                <Styled.DivArrowNext>
                    <a href="#sobre"><IoArrowDownOutline size={38}/></a>
                </Styled.DivArrowNext>
            </Styled.DivTitle>
            <Styled.DivHelp>
                <Styled.ContainerHelp>
                    <Styled.PHelp>Juntos criamos um  mundo melhor</Styled.PHelp>
                    <a target='_blank' href="https://chat.whatsapp.com/FfqWLjzzq61GAq7BNmMc5u"><Styled.BtnHelp>FaÇa parte <img src={logo} alt='Coração'></img> </Styled.BtnHelp> </a>
                </Styled.ContainerHelp>
            </Styled.DivHelp>
        </Styled.DivHero>
    )
}