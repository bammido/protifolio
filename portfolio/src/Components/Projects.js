import { A, ContentDiv } from "../styles/styles"
import styled from "styled-components"

const ProjectDiv = styled(ContentDiv)`
margin: 20px 20px 20px 0;
width: 400px;
height: 365px;
display: flex;
flex-direction: column;
align-items: center;

border-radius: 15px;
padding: 0 20px;
`

const ProjectDivLvl2 = styled.div`
width: 100%;
flex-grow: 1;
display: flex;
justify-content: space-between;
align-items: center;
overflow-y: hidden;
`

const ProjectDivDescription = styled.div`
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;


div:nth-of-type(1){
    flex-grow: 1;
    margin-bottom: 20px;
}
div:nth-of-type(2){
    margin-bottom: 20px;
}

`

const MainDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const ProjectLinks = styled(A)`
font-size: 12px;
border: 1px solid black;
margin-right: 10px;
padding: 2px 5px;
` 

const Projects = () => {
    const projects = [
        {
            name: 'Whatslab',
            img: '',
            link: '',
            repo: '',
            description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availab',

        },
        {
            name: 'Labex',
            img: '',
            link: '',
            repo: '',
            description: '',

        },
        {
            name: 'AstroMatch',
            img: '',
            link: '',
            repo: '',
            description: '',

        },
        {
            name: 'Git Search',
            img: '',
            link: '',
            repo: '',
            description: '',

        },
    ]

    const projectsMap = projects.map((project)=>{
        return<ProjectDiv>
            <h2>{project.name}</h2>
            <ProjectDivLvl2>
                <ProjectDivDescription>
                    <div>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <ProjectLinks>acesse o app</ProjectLinks>
                        <ProjectLinks>link do repo</ProjectLinks>
                    </div>
                </ProjectDivDescription>
                <div><img src="https://picsum.photos/200/300" /></div>
            </ProjectDivLvl2>
        </ProjectDiv>
    })
   
   
   return <>
    <h1>Projetos</h1>
    <MainDiv>
         {projectsMap}
     </MainDiv>
   </>
}

export default Projects