import React from 'react'

import Project from './Project'
import { ProjectGalleryContainer } from './UI/ProjectGallery.styles'

const ProjectGallery: React.FC = () => {
  return (
    <ProjectGalleryContainer>
        <Project 
            title='Example Project'
            contents='A web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.'
            image='../../public/react-food.png'
            link='https://github.com/murilosantosb'
            position='right'
        />

        <Project 
            title='Example Project'
            contents='A web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.'
            image='../../public/react-gram.png'
            link='https://github.com/murilosantosb'
            position='left'
        />
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery