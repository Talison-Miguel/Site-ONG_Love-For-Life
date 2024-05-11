import { Slide } from '../Slide/index.jsx';
import * as Styled from './style.js';

export function SlideProjects() {
    return (
        <Styled.Container id='project'  data-aos="fade-up">
            <Styled.ContentContainer>
                <Styled.TitleSlide>Projetos</Styled.TitleSlide>
            </Styled.ContentContainer>
            <Styled.SlideContainer>
                <Slide />
            </Styled.SlideContainer>
        </Styled.Container>
    );
}
