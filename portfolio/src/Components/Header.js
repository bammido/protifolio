import { A, Header, ThemeMode, ImgThemeMode } from "../styles/styles"

import light_mode from '../images/light_mode.svg'
import dark_mode from '../images/dark_mode.svg'

const HeaderComponent = ({ theme ,setTheme }) =>{

return<>
    <Header>
        <ThemeMode onClick={()=>setTheme(!theme)}>
            {theme? 'light theme' : 'dark theme'}<ImgThemeMode src={theme? light_mode : dark_mode} />
        </ThemeMode>

        <A href="">Linkedin</A>
        <A href="">Github</A>
        <A href="">E-mail</A>
        <A href="">Whatsapp</A>
    </Header>
</>
}

export default HeaderComponent