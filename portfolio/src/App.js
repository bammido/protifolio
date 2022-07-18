import { GlobalStyle, MainDiv, Body } from './styles/styles';
import {lightTheme, darkTheme} from './styles/theme'
import styled, { ThemeProvider } from 'styled-components';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import { useState } from 'react';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {
  const actualTheme = localStorage.getItem('actualTheme')

  const [isDarktheme, setIsDarkTheme] = useState(actualTheme===`true`? true : false)

  

  return (
    <ThemeProvider theme={isDarktheme? darkTheme : lightTheme}>
      <GlobalStyle />
      
      <MainDiv className="App">
        <HeaderComponent theme={isDarktheme} setTheme={setIsDarkTheme}/>
        <About theme={isDarktheme}/>
        <Body>
          <Projects />
        </Body>
        <FooterComponent />  
      </MainDiv>
    </ThemeProvider>
  );
}

export default App;
