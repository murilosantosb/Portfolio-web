import React from 'react'

import Project from './Project'
import { ProjectGalleryContainer } from './UI/ProjectGallery.styles'

// images
import reactFood from '/react-food.png'
import reactGram from "/react-gram.png"
import financeAi from "/finance-ai.png"

const ProjectGallery: React.FC = () => {
  return (
    <ProjectGalleryContainer id='projects'>

        <Project 
            title='Finance.ai'
            contents='Finance AI é uma aplicação web para gerenciamento financeiro pessoal,
            baseada na arquitetura MVC. O back-end utiliza Node.js, Express e MongoDB,
            com autenticação via NextAuth e login com Google. No front-end,
            são empregadas tecnologias modernas como Next.js 15, React 19 e TypeScript,
            com Zustand para gerenciamento de estado e React-Bootstrap e Sass para estilização.
            A plataforma inclui gráficos interativos com Chart.js, proporcionando uma visualização
            clara dos dados financeiros. O deploy é realizado na Render e Vercel, garantindo acessibilidade e estabilidade.'
            image={financeAi}
            link='https://github.com/murilosantosb/Finance.ai'
            position='right'
        />
        <Project 
            title='React-Food'
            contents='ReactFood é um clone do iFood. Utilizando a arquitetura MVC,
            o projeto organiza a aplicação com uma separação back-end e front-end.
            O back-end é construído com Node.js, Express e MongoDB, com autenticação
            segura via JWT. No front-end, são utilizadas as tecnologias Next.js,
            TypeScript, Redux e Styled-Components para criar uma interface moderna, tipada e estilizada.'
            image={reactFood}
            // link='https://github.com/murilosantosb'
            position='left'
        />

        <Project 
            title='React-Gram'
            contents='ReactGram é um clone do Instagram. Utilizando a arquitetura MVC,
            o projeto separa claramente a interface do usuário, a lógica de negócios
            e o acesso aos dados. O back-end é construído com Node.js, Express e MongoDB,
            e a autenticação é gerenciada com JWT. No front-end, são usadas as tecnologias
            React e Redux para criar uma interface interativa e um gerenciamento de estado eficiente.'
            image={reactGram}
            link='https://github.com/murilosantosb/ReactGram'
            position='right'
        />
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery