import React from "react"
import styled from "styled-components"

// Components
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import MySkills from "./components/MySkills"
import ProjectGallery from "./components/ProjectGallery"
import Footer from "./components/Footer"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 20px 30px;

  @media (min-width: 1300px) {
      width: 70%;
      margin: 0 auto;
  }
`

function App() {
  
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <MySkills />
        <ProjectGallery />
        <Footer />
      </Container>
    </>
  )
}

export default App
