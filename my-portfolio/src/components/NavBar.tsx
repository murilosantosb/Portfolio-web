import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.jpg"

const Nav = styled.nav`
    background-color: var(--bg-secondary);
    padding: 30px 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out;

    > img {
        width: 50px;
        border-radius: 50%;
        border: 3px solid var(--bg-tertiary);
        padding: 5px;
    }

    > ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
    }

    @media(min-width:700px) {
        justify-content: space-around;
        transform: scale(1.1);
        >ul {
            gap: 100px;
        }
    }
`

const NavBar: React.FC = () => {
  return (
    <Nav>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contacts</li>
                <li>dsdsd</li>
            </ul>
    </Nav>
  )
}

export default NavBar