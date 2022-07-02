import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    font-size: 16px;
    transition: 200ms;
    font-family: 'Outfit', sans-serif;
}

body{
    width: 100%;
    min-height: 100vh;
    background-color: ${({theme}) => theme.bg};
    color:  ${({theme}) => theme.text};

}

h1{
    font-size: 24px;
}

h2{
    font-size: 20px;
}

`

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

min-height: 100vh;
width: 100%;
overflow-x: hidden;
`

export const CentralizatorDiv = styled.div`
width: 100%;
padding: 0 50px;
`

export const Header = styled.div`
width: 100%;
padding: 1em 0;
background-color: ${({ theme }) => theme.div};

display: flex;
justify-content: space-evenly;
`

export const Footer = styled(Header)`

`

export const Body = styled.div`
flex-grow: 1;
padding: 20px 0;

display: flex;
flex-direction: column;
align-items: center;
`

export const A = styled.a`
text-decoration: none;
cursor: pointer;
color: ${({ theme }) => theme.text};

&:hover{
    opacity: 0.7;
}
`

export const ThemeMode = styled.div`
width: 70px;
height: 30px;
object-fit: cover;
background-color: transparent;
display: flex;
cursor: pointer;

&:hover{
    opacity: 0.7;
}
`

export const ImgThemeMode = styled.img`
width: 100%;
height: 100%;
`

export const ContentDiv = styled.div`
background-color: ${({ theme }) => theme.div};

`