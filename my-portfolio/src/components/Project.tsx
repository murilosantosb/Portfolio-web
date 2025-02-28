import React from 'react'
import { IoIosLink } from "react-icons/io";

// Interface
import { ProjectProps } from '../interface/ProjectProps'
// UI
import { ProjectLeft, ProjectRight} from './UI/ProjectGallery.styles'

const Project: React.FC<ProjectProps> = ({ title, contents, image, position, link}) => {
    const Layout = position === "right" ? ProjectRight : ProjectLeft

  return (
    <Layout>
        <section>
            <span>
                <h2>Featured Project</h2>
                <a href={link} target='_blank'>
                    <h1 className={`${title === "React-Food" ? "maintenance" : ""}`}>
                        {title === "React-Food" ? "React-Food - Em manutenção" : `${title}`}
                        <IoIosLink/>
                    </h1>
                </a>
            </span>
            <article>
                <p>{contents}</p>
            </article>
          </section>
          <div>
              <img src={image} alt={title} />             
          </div>
    </Layout>
  )
}

export default Project