import React from 'react'
import logo from "../assets/logo.jpg"
import { Nav } from './UI/NavBar.styled'

const NavBar: React.FC = () => {
  return (
    <Nav>
            <img src={logo} alt="Logo do site" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
    </Nav>
  )
}

export default NavBar