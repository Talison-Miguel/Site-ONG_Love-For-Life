import * as Styled from './style.js';

import logo2 from '../../assets/images/logo2.jpg'

export function ItemSlider(item) {

    return (
        <Styled.Slide >
            <Styled.ContainerPhoto>
                <Styled.Photo src={ item.photo } alt='image'></Styled.Photo>
                <Styled.SmallPhoto src={ item.smallPhoto } alt='image'></Styled.SmallPhoto>
            </Styled.ContainerPhoto>
            <Styled.Information>
                <div>
                    <Styled.TitleInformation>
                        { item.title }
                    </Styled.TitleInformation>
                    <Styled.TextInformation>
                        { item.firstP }
                    </Styled.TextInformation>
                    <Styled.TextInformation>
                        { item.secondP }
                    </Styled.TextInformation>
                    <Styled.SpanInformation>
                        { item.city }
                    </Styled.SpanInformation>
                </div>
                <img src={logo2} alt='image'></img>
            </Styled.Information>
        </Styled.Slide>
    );
}
