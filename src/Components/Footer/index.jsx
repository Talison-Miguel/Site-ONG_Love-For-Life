import * as Styled from './style.js';

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import logo3 from '../../assets/images/logo3.png'

export function Footer() {
    return (
        <Styled.Container id='footer'>
            <Styled.ContentItens>
                <img src={logo3} alt='image'/>
                <div>
                    <Styled.TitleContatos>Endereço</Styled.TitleContatos>
                    <Styled.listItens>
                        <li>Rua Pedro Morganti, 147</li>
                        <li>Vila Mariana, São Paulo - SP</li>
                        <li>CEP 04020070</li>
                    </Styled.listItens>
                </div>
                <div>
                    <Styled.TitleContatos>Contatos</Styled.TitleContatos>
                    <Styled.listItens>
                        <a target='_blank' href="https://www.instagram.com/loveforlifeong/"><li><FaInstagram size={24}/> Instagram</li></a>
                        <a target='_blank' href="https://chat.whatsapp.com/FfqWLjzzq61GAq7BNmMc5u"><li><FaWhatsapp size={24}/> Whatsapp</li></a>
                        <li><MdOutlineMailOutline size={24}/>ongloveforlife@gmail.com</li>
                    </Styled.listItens>
                </div>
            </Styled.ContentItens>
            <Styled.PFooter>
                ©2024 Love For Life Todos os direitos reservados.
            </Styled.PFooter>
        </Styled.Container>
    );
}

