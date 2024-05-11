import * as Styled from './style.js';

import smallHeart from '../../assets/images/smallHeart.png'

import qrcode from '../../assets/images/qrcode.jpg' 
import arrow from '../../assets/images/arrow.png' 

export function Help() {
    return (
        <Styled.Container id='help'  data-aos="zoom-in">
            <Styled.TitleHelp>Venha fazer a diferença!</Styled.TitleHelp>
            <Styled.SubTitleHelp>Você pode ajudar de várias formas</Styled.SubTitleHelp>
            <Styled.ContentContainer>
                <Styled.Table>
                    <tbody>
                        <tr>
                            <Styled.LinhaTd>Participe das ações presencialmente</Styled.LinhaTd>
                            <Styled.LinhaTd>Patrocine uma ação</Styled.LinhaTd>
                        </tr>
                        <tr>
                            <Styled.LinhaTd>Torne-se um doador <br/> recorrente</Styled.LinhaTd>
                            <Styled.LinhaTd>Faça um Pix de <br/> qualquer valor</Styled.LinhaTd>
                        </tr>
                        <tr>
                            <Styled.LinhaTd>Apadrinhe uma criança</Styled.LinhaTd>
                            <Styled.LinhaTd>Doe alimentos, roupas, calçados, etc.</Styled.LinhaTd>
                        </tr>
                    </tbody>
                </Styled.Table>
                <Styled.Arrow src={arrow} alt="arrow" />
                <Styled.QrCode src={qrcode} alt="qrcode" />
            </Styled.ContentContainer>
            <Styled.ParagraphHelp>Um simples gesto pode mudar não apenas um dia de uma criança, mas toda uma vida <img src={smallHeart} alt="Coração pequeno" /></Styled.ParagraphHelp>
        </Styled.Container>
    );
}

