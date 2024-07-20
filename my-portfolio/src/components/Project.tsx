import React from 'react'
import styled from 'styled-components'
// Interface
import { ProjectProps } from '../interface/ProjectProps'

const ProjectConteiner = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
        width: 100%;

        span {
            
        }

        span > h2 {
            color: var(--color-strong);
            font-size: medium;
        }

        span > h1 {
            margin-top: 7px;
            color: #e2e2e2;
            font-size: 2em;
        }

        div {
            width: 430px ;
            background-color: #2b0b3a;
            display: flex;
            justify-content: flex-start;
            border-radius: 15px;
        }

        div > img {
            width: 400px;
            border-radius: 0px 15px 0px 15px;
            /* padding-top: 25px; */
            margin-top: 15px;

        }

        article {
            background-color: transparent;
            backdrop-filter: blur(15px);
            border-radius: 15px;
            border: 1px solid white;
            width: 350px;
            padding: 20px 30px;
        }

    @media (min-width: 991px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100px 100px;
        width: 90%;

        span {
            grid-column: span 2;

        }

        div {
            width: 560px ;

        }

        div > img {
            width: 500px;

        }

        article {
           width: 670px;
           margin-top: 20px;       
        }

        section {
         margin-right: -100px;
        }
    }
`



const Project: React.FC<ProjectProps> = ({ title, contents, image,}) => {
  return (
    <ProjectConteiner>
        <section>
            <span>
                <h2>Featured Project</h2>
                <h1>{title}</h1>
            </span>
            <article>
                <p>{contents}</p>
            </article>
        </section>
        <div>
            <img src={image} alt={title} />
        </div>
    </ProjectConteiner>
  )
}

export default Project