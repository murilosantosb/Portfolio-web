import React from 'react'
import styled from 'styled-components'
import Project from './Project'

const ProjectGalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 200px;

    @media (min-width: 991px) {
        width: 60%;
    }
`

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
        />

        <Project 
            title='Example Project'
            contents='A web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.'
            image='../../public/react-gram.png'
            link='https://github.com/murilosantosb'
        />
    </ProjectGalleryContainer>
  )
}

export default ProjectGallery