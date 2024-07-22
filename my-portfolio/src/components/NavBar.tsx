import React from 'react'
import logo from "../assets/logo.jpg"
import { Nav } from './UI/NavBar.styled'
import { Link } from "react-scroll"

const NavBar: React.FC = () => {
  return (
    <Nav>
            <img src={logo} alt="Logo do site" />
            <ul>
                <li>
                  <Link to='home' smooth={true} duration={1800} offset={-120}>
                      Home
                  </Link>
                </li>
                <li>
                  <Link to='about' smooth={true} duration={1800} offset={-120}>
                      About
                  </Link>
                </li>
                <li>
                  <Link to='projects' smooth={true} duration={1800} offset={-120}>
                      Projects
                  </Link>
                </li>
                <li>
                  <Link to='contact' smooth={true} duration={1800} offset={-120}>
                      Contact
                  </Link>
                </li>
            </ul>
    </Nav>
  )
}

export default NavBar