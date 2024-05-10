import P from 'prop-types';
import * as Styled from './style.js';

export function ItemInformation({ image, title, children }) {
    return (
        <Styled.Container>
            <Styled.ContainerTitle>
                <img src={image} alt={title} />
                <Styled.TitleItem>{title}</Styled.TitleItem>
            </Styled.ContainerTitle>
            <Styled.PItem>
                {children}
            </Styled.PItem>
        </Styled.Container>
    );
}

ItemInformation.propTypes = {
    image: P.string.isRequired,
    title: P.string.isRequired,
    children: P.node.isRequired,
};