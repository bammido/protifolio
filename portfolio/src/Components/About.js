import styled from "styled-components"
import foto_cv from '../images/foto cv.jpeg'

const MainDiv = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
width: 80%;
min-height: 100vh;
align-self: center;

text-align: center;

div  {
position: fixed;
right: 0;
bottom: 0;
}
h1{
    
    font-size: 3em;
    z-index: 1;
}

p{
    z-index: 1;
    font-size: 1.5em;
}

div{
    margin: 20px 0;

}
`

const ImageDiv = styled.div`
border-radius: 50%;

width: 300px;
height: 300px;

object-fit: contain;
overflow: hidden;

`

const About = ({theme}) =>{

    return <MainDiv>
    <h1>{`<coder> Bryan Fernandes </coder>`}</h1>
    
    {theme?
        <div class="badge-base LI-profile-badge"
        data-locale="pt_BR" data-size="medium" 
        data-theme="dark" data-type="VERTICAL" 
        data-vanity="bryan-fernandes-de-oliveira-8085671a8" 
        data-version="v1">
        <a class="badge-base__link LI-simple-link" 
        href="https://br.linkedin.com/in/bryan-fernandes-de-oliveira-8085671a8?trk=profile-badge">
          Bryan Fernandes de Oliveira</a></div>   
             :
             <div class="badge-base LI-profile-badge"
             data-locale="pt_BR" 
             data-size="medium" 
             data-theme="light"
            data-type="VERTICAL" 
            data-vanity="bryan-fernandes-de-oliveira-8085671a8" 
            data-version="v1"><a class="badge-base__link LI-simple-link" 
            href="https://br.linkedin.com/in/bryan-fernandes-de-oliveira-8085671a8?trk=profile-badge">
            Bryan Fernandes de Oliveira</a>
            </div>      
      }

    {/* <ImageDiv>
        <img src={foto_cv} />
    </ImageDiv> */}

    <p>
        Desenvolvedor Full Stack em desenvolvimento, apaixonado em tornar problemas complexos em problemas simples.
        Cada dia me desenvolvendo mais e mais. Quando não estou codando, possivelmente me encontrará jogando.
    </p>
    </MainDiv>
}

export default About