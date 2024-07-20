import React from 'react'

// Interface
import { ProjectProps } from '../interface/ProjectProps'
// UI
import { ProjectConteiner } from './UI/ProjectGallery.styles'

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