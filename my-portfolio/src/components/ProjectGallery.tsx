import React from 'react'

import Project from './Project'
import { ProjectGalleryContainer } from './UI/ProjectGallery.styles'

// images
// import customerChurn from '/customer-churn.svg'
import customerChurn from '/img1.png'
// import petClassifier from '/pet-classifier.png'
import petClassifier from '/p3.png'
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
            repoUrl='https://github.com/murilosantosb/Finance.ai'
            position='right'
            badge='Full-Stack & IA'
            stack={['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'NextAuth', 'Zustand', 'Chart.js']}
        />

        <Project
            title='Customer Churn Analytics Pipeline'
            contents='Customer Churn Analytics Pipeline é um projeto de dados que responde a uma pergunta cara para qualquer empresa
            quais clientes estão prestes a cancelar o serviço. Partindo da base bruta de uma operadora de telecomunicações,
            o projeto percorre todo o caminho do dado — leitura, checagem de qualidade, preparação e armazenamento em um banco analítico próprio —
            e entrega no final indicadores de cancelamento, gráficos e um modelo capaz de prever quem tende a sair.
            A análise revelou padrões claros: clientes com contrato mensal cancelam quinze vezes mais que os de contrato de dois anos,
            e quase metade dos cancelamentos acontece ainda no primeiro ano de relacionamento. Desenvolvido em Python com pandas
            e scikit-learn, utiliza SQLAlchemy para carregar os dados tratados em um data warehouse SQLite e gera todos os relatórios automaticamente.
            Cada etapa é um módulo independente, coberto por testes, e o fluxo inteiro roda com um único comando.'
            image={customerChurn}
            repoUrl='https://github.com/murilosantosb/customer-churn-analytics-pipeline'
            position='left'
            badge='Dados & ML'
            stack={['Python', 'pandas', 'scikit-learn', 'SQLAlchemy', 'SQLite', 'matplotlib', 'pytest']}
        />

        <Project
            title='PetClassifier'
            contents='PetClassifier é um projeto de visão computacional que aprende a distinguir fotos de gatos e cachorros.
            A rede neural foi construída do zero, sem aproveitar modelos prontos: ela lê a imagem em camadas sucessivas,
            partindo de bordas e texturas até chegar às formas que separam um animal do outro.
            Desenvolvido em Python com PyTorch e torchvision, o projeto é dividido em três comandos independentes —
            treinar, avaliar e prever — permitindo executar cada etapa isoladamente. Durante o treinamento,
            parte das imagens é reservada para validação, e o conjunto de teste permanece intocado até a avaliação final,
            garantindo que o desempenho medido venha de fotos que o modelo nunca viu.'
            image={petClassifier}
            repoUrl='https://github.com/murilosantosb/PetClassifier-PyTorch'
            position='right'
            badge='Deep Learning'
            stack={['Python', 'PyTorch', 'torchvision', 'CNN', 'Pillow']}
        />

    
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery
