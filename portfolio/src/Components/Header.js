import { Header, ThemeMode, ImgThemeMode } from "../styles/styles"

import light_mode from '../images/light_mode.svg'
import dark_mode from '../images/dark_mode.svg'
import Links from "./Links"

const HeaderComponent = ({ theme ,setTheme }) =>{

    const handleOnClickThemeMode = () =>{
        setTheme(!theme)
        localStorage.setItem('actualTheme', `${!theme}`)
    }

return<>
    <Header>
        <ThemeMode onClick={handleOnClickThemeMode}>
            {theme? 'light theme' : 'dark theme'}<ImgThemeMode src={theme? light_mode : dark_mode} />
        </ThemeMode>

        <Links />
    </Header>
</>
}

export default HeaderComponent