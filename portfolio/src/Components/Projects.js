import { A, ContentDiv } from "../styles/styles"
import styled from "styled-components"
import whatslab from '../images/whatslab.webp'
import labefy from '../images/labefy.png'
import astromatch from '../images/astromatch.png'
import githubsearch from '../images/githubsearch.png'
import labex from '../images/labexjpg.jpg'

const ProjectDiv = styled(ContentDiv)`
margin: 20px 20px 20px 0;
width: 400px;
height: 365px;
display: flex;
flex-direction: column;
align-items: center;

overflow-x: hidden;

box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

animation: fade 1500ms;

@keyframes fade{

    from{
        transform: scale(0);
    }

    to{
        transform: scale(1);
    }

}

h2{
        color: #000;
    }


border-radius: 15px;
/* padding-left: 20px; */

&:hover{
    transform: scale(1.05);

    img{
    transform: scale(1.15);
    }
}
`

const ProjectDivLvl2 = styled.div`
width: 100%;
flex-grow: 1;
display: flex;
flex-direction: column;
overflow-y: hidden;

`

const ProjectDivImage = styled.div`
overflow: hidden;
width: 250px;
height: 250px;
border-radius: 20px;
align-self: center;
object-fit: cover;

img{
    height: 100%;
    width: 100%;
}
` 

const ProjectDivDescription = styled.div`
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


div:nth-of-type(1){
    flex-grow: 1;
    margin-bottom: 20px;
    margin-left: 20px;
}
div:nth-of-type(2){
    margin-bottom: 20px;
}

`

const MainDiv = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1320px;
`

const CentralizatorDiv = styled.div`
display: flex;
justify-content: center;
padding: 0 20px;
width: 100%;
`

const ProjectLinks = styled(A)`
font-size: 12px;
border: 1px solid black;
margin-right: 10px;
padding: 2px 5px;

&:hover{
    color: ${({ theme }) => theme.bg }
}
` 

const Projects = () => {
    const projects = [
        {
            name: 'Whatslab',
            img: whatslab,
            link: 'https://sloppy-map.surge.sh/',
            repo: 'https://github.com/bammido/Whatslab',
            description: 'Envie mensagens instantâneas para qualquer um a qualquer hora.',

        },
        {
            name: 'Labex',
            img: labex,
            link: 'https://helpless-spot.surge.sh/',
            repo: 'https://github.com/bammido/Labex',
            description: 'App de reservas de viagens, porém espaciais!',

        },
        {
            name: 'AstroMatch',
            img: astromatch,
            link: 'https://selfish-sink.surge.sh/',
            repo: 'https://github.com/bammido/AstroMatch',
            description: 'Buscando sua cara metade? a tampa da sua panela? Esse app é sua solução.',

        },
        {
            name: 'Labefy',
            img: labefy,
            link: 'https://nine-pin.surge.sh/',
            repo: 'https://github.com/bammido/Labefy',
            description: 'Precisa organizar suas músicas? Esse app é perfeito para isso.',

        },
        {
            name: 'GithubSearch',
            img: githubsearch,
            link: 'https://lying-meal.surge.sh/',
            repo: 'https://github.com/bammido/GithubSearch',
            description: 'Busque por repositórios no github bem aqui!',

        },
    ]

    const projectsMap = projects.map((project)=>{
        return<ProjectDiv>
            <h2>{project.name}</h2>
            <ProjectDivLvl2>
                <ProjectDivImage><img src={project.img} /></ProjectDivImage>
                <ProjectDivDescription>
                    <div>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <ProjectLinks target="_blank" href={project.link}>acesse o app</ProjectLinks>
                        <ProjectLinks target="_blank" href={project.repo}>link do repo</ProjectLinks>
                    </div>
                </ProjectDivDescription>
            </ProjectDivLvl2>
        </ProjectDiv>
    })
   
   
   return <>
    <h1>Projetos</h1>
    <CentralizatorDiv>

    <MainDiv>
         {projectsMap}
     </MainDiv>
    </CentralizatorDiv>
   </>
}

export default Projects