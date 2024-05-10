import { ItemInformation } from '../ItemInformation/index.jsx';
import * as Styled from './style.js';

import iconBook from '../../assets/images/iconBook.png'
import visionIcon from '../../assets/images/visionIcon.png'
import valueIcon from '../../assets/images/valueIcon.png'
import numberIcon from '../../assets/images/numberIcon.png'

export function Information() {
    return (
        <Styled.Container>
            <ItemInformation image={iconBook} title={'Mição'} >
                Promover a integração social entre voluntários e crianças em situação de vulnerabilidade, criando conexão e amor afim de torna-las pessoas melhores.
            </ItemInformation>
            <ItemInformation image={visionIcon} title={'Visão'} >
                Mudar a vida das pessoas através do trabalho voluntário, gerando uma inquietude capaz de transformar vidas e o mundo ao seu redor.
            </ItemInformation>
            <ItemInformation image={valueIcon} title={'Valores'} >
                Amor, Ética
                <br/>Empatia, Respeito
                <br/>Igualdade, Diversidade, Solidariedade
            </ItemInformation>
            <ItemInformation image={numberIcon} title={'Números'} >
                +700 Voluntários 
                <br/> +6 Comunidade Impactadas
                <br/> +600 Famílias Impactadas mensalmente 
                <br/> +150 Toneladas de alimentos doados
            </ItemInformation>
        </Styled.Container>
    );
}

