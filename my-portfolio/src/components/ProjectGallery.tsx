import React from 'react'

import Project from './Project'
import { ProjectGalleryContainer } from './UI/ProjectGallery.styles'

const ProjectGallery: React.FC = () => {
  return (
    <ProjectGalleryContainer id='projects'>
        <Project 
            title='React-Food'
            contents='ReactFood é um clone do iFood. Utilizando a arquitetura MVC,
            o projeto organiza a aplicação com uma separação back-end e front-end.
            O back-end é construído com Node.js, Express e MongoDB, com autenticação
            segura via JWT. No front-end, são utilizadas as tecnologias Next.js,
            TypeScript, Redux e Styled-Components para criar uma interface moderna, tipada e estilizada.'
            image='../../public/react-food.png'
            link='https://github.com/murilosantosb'
            position='right'
        />

        <Project 
            title='React-Gram'
            contents='ReactGram é um clone do Instagram. Utilizando a arquitetura MVC,
            o projeto separa claramente a interface do usuário, a lógica de negócios
            e o acesso aos dados. O back-end é construído com Node.js, Express e MongoDB,
            e a autenticação é gerenciada com JWT. No front-end, são usadas as tecnologias
            React e Redux para criar uma interface interativa e um gerenciamento de estado eficiente.'
            image='../../public/react-gram.png'
            link='https://github.com/murilosantosb/ReactGram'
            position='left'
        />
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery