import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/globalstyles'
import { About } from './Components/About'
import { SlideProjects } from './Components/SlideProjects'
import { Footer } from './Components/Footer'
import { Help } from './Components/Help'
import { useEffect } from 'react'

import initAOS from './aosInit';

function App() {
    useEffect(() => {
        initAOS();
    }, []);

    return (
        <ThemeProvider theme={theme} >
            <GlobalStyles />
            <Header />
            <main>
                <About />
                <SlideProjects />
                <Help />
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App
