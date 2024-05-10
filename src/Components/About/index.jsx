import * as Styled from './style.js';

import imageAbout from '../../assets/images/photo-sobre.jpg'
import { Information } from '../Information/index.jsx';

export function About() {
    return (
        <Styled.Container id='sobre'>
            <Styled.TitleAbout>Sobre</Styled.TitleAbout>
            <Styled.ContentSobre>
                <Styled.AboutUs>
                    <Styled.TitleContent>Quem somos?</Styled.TitleContent>
                    <Styled.ParagraphAbout>O projeto surge da união de pessoas empenhadas em melhorar o mundo e promover felicidade através do investimento de tempo e amor no próximo, focando em ações sociais para crianças vulneráveis. Ele também busca criar vínculos entre voluntários e crianças necessitadas.</Styled.ParagraphAbout>
                    <Styled.ParagraphAbout>Já considerou o impacto de alegrar o dia de uma criança? O que para nós é rotineiro pode ser inalcançável para elas, por falta de oportunidades. Um gesto simples pode proporcionar o melhor dia de suas vidas, gerando não apenas felicidade, mas também sonhos e esperanças de um futuro melhor. Essas pequenas ações têm o poder de transformar suas vidas desde a infância até a idade adulta.</Styled.ParagraphAbout>
                </Styled.AboutUs>
                <img src={imageAbout} alt="Foto em um evento de várias pessoas se abraçando" />
            </Styled.ContentSobre>
            <Information />
        </Styled.Container>
    );
}
