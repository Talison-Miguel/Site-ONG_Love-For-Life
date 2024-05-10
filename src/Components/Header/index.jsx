import { Hero } from '../Hero';
import { Menu } from '../Menu';
import * as Styled from './styles';

export function Header() {
    return (
        <Styled.Header >
            <Menu />
            <Hero />
        </Styled.Header>
    )
}