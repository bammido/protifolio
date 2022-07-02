import { GlobalStyle, MainDiv, Body } from './styles/styles';
import {lightTheme, darkTheme} from './styles/theme'
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import { useState } from 'react';
import Projects from './Components/Projects';


function App() {
  const [isDarktheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarktheme? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainDiv className="App">
        <HeaderComponent theme={isDarktheme} setTheme={setIsDarkTheme}/>
        <Body>
          <Projects />
        </Body>
        <FooterComponent />  
      </MainDiv>
    </ThemeProvider>
  );
}

export default App;
