import React from 'react'

import Project from './Project'
import { ProjectGalleryContainer } from './UI/ProjectGallery.styles'

// images
import customerChurn from '/customer-churn.svg'
import petClassifier from '/pet-classifier.svg'
import financeAi from "/finance-ai.png"

const ProjectGallery: React.FC = () => {
  return (
    <ProjectGalleryContainer id='projects'>

        <Project
            title='Customer Churn Analytics Pipeline'
            contents='Pipeline de dados ponta a ponta sobre o dataset Telco Customer
            Churn, percorrendo ingestão, validação de schema, feature engineering,
            carga em um data warehouse SQLite e geração de KPIs, gráficos e modelo
            preditivo. Cada etapa é um módulo isolado e testável, orquestrado por um
            único entrypoint CLI e parametrizado por YAML. Entre os modelos avaliados,
            a regressão logística teve o melhor desempenho — ROC-AUC de 0.84 e F1 de
            0.61 — superando a random forest em todas as métricas.'
            image={customerChurn}
            repoUrl='https://github.com/murilosantosb/customer-churn-analytics-pipeline'
            position='right'
            badge='Dados & ML'
            stack={['Python', 'pandas', 'scikit-learn', 'SQLAlchemy', 'SQLite', 'matplotlib', 'pytest']}
        />

        <Project
            title='PetClassifier'
            contents='Classificador de imagens de gatos e cachorros com uma rede
            neural convolucional construída do zero em PyTorch: quatro blocos
            convolucionais de 32 a 128 canais com max pooling, camada densa de 256
            unidades e dropout de 0.5. O conjunto de treino é dividido em 85% treino
            e 15% validação, e o conjunto de teste entra apenas na avaliação final,
            sem nunca ser visto durante o treinamento. Scripts separados para treino,
            avaliação e predição de imagem única.'
            image={petClassifier}
            repoUrl='https://github.com/murilosantosb/PetClassifier-PyTorch'
            position='left'
            badge='Deep Learning'
            stack={['Python', 'PyTorch', 'torchvision', 'CNN', 'Pillow']}
        />

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
            stack={['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'NextAuth', 'Zustand', 'Chart.js']}
        />

        {/* Próximos projetos entram aqui, alternando position: o próximo deve usar position='left' */}
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery
