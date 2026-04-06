import React from 'react'
import styled from 'styled-components'

// Icons
import { SlEnvolope } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
  gap: 35px;
  width: 80%;

  h1 {
   font-size: 28px;
   font-weight: 400;
  }

  span {
   display: flex;
   gap: 20px;
  }

  
`

const Footer: React.FC = () => {
  return (
    <FooterContainer id='contact'>
      <h1>Contato</h1>

      <p>
         Atualmente, atuo como profissional de Suporte TI na Libbs Farmacêutica,
         oferecendo suporte a usuários e garantindo o bom funcionamento de sistemas
         e equipamentos. Busco sempre aprimorar meus conhecimentos e contribuir
         com soluções eficientes. Vamos nos conectar.
      </p>
      <p>murilo.barbosa2016@outlook.com</p>

      <span>
         <a href="mailto:murilo.barbosa2016@outlook.com" target='_blank' rel="noopener">
            <SlEnvolope size={30}/>
         </a>
         <a href="https://www.linkedin.com/in/murilo-santos-7a9211293/" target='_blank' rel="noopener">
            <FaLinkedin size={30}/>
         </a>
         <a href="https://github.com/murilosantosb" target='_blank' rel="noopener">
            <FaGithub size={30}/>
         </a>
      </span>
    </FooterContainer>
   )
}

export default Footer








