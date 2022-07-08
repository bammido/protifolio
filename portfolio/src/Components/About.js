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


h1{
    
    font-size: 3em;
}

p{
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

const About = () =>{

    return <MainDiv>
    <h1>{`<coder> Bryan Fernandes </coder>`}</h1>

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