import React from "react"
import styled from "styled-components"

// Components
import NavBar from "./components/NavBar"
import Home from "./components/Home"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 30px;
`

function App() {
  
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
