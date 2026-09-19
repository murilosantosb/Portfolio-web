import React from 'react'
import { IoIosLink } from "react-icons/io";

// Interface
import { ProjectProps } from '../interface/ProjectProps'
// UI
import { ProjectLeft, ProjectRight, StackList, StackChip, ProjectBadge } from './UI/ProjectGallery.styles'

const Project: React.FC<ProjectProps> = ({ title, contents, image, position, stack, repoUrl, badge }) => {
    const Layout = position === "right" ? ProjectRight : ProjectLeft

  return (
    <Layout>
        <section>
            <span>
                <h2>
                    Featured Project
                    {badge && <ProjectBadge>{badge}</ProjectBadge>}
                </h2>
                <a href={repoUrl} target='_blank'>
                    <h1>
                        {title}
                        <IoIosLink/>
                    </h1>
                </a>
            </span>
            <article>
                <p>{contents}</p>
                <StackList>
                    {stack.map((tech) => (
                        <StackChip key={tech}>{tech}</StackChip>
                    ))}
                </StackList>
            </article>
          </section>
          <div>
              <img src={image} alt={title} />
          </div>
    </Layout>
  )
}

export default Project