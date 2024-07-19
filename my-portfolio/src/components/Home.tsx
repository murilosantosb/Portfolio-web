import React from 'react'
import photo from '../assets/profile-pic.png'
import styled from 'styled-components'
import { BsArrowDownLeft } from "react-icons/bs";

const HomeContainer = styled.section`
    position: relative;
    
    width: 80%;

    > section {
        margin-top: 18%;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    section > img {
        width: 150px;
        padding: 20px;
        background-image: linear-gradient(to right, #11071f,#6d38a1, #7e6d94);
        border-radius: 50%;
    }

    p.p {
        position: absolute;
        top: 2%;
        left: 40%;
    }

    p.p-secondary {
        text-decoration: underline  ;

    }

    p.p-tertiary {
        font-size: small;
    }

    h1 {
        font-size: 2.3em;
    }

    strong {
        color: var(--color-strong );
    }

    section.my-biography{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    section.my-biography > span > p{
        text-decoration: underline 3px #7127ba;
    }

    @media(min-width: 991px) {
        width: 900px;

        p.p {
        position: absolute;
        top: 8%;
        left: 20%;
        }
    }
`

const Home = () => {
  return (
    <HomeContainer>
        <p className='p'><BsArrowDownLeft/>Hello! I Am <strong>Murilo Santos</strong></p>
        <section>
            <img src={photo} alt="Foto do criador do site" />
            <span>
                <p className='p-secondary'>Um Programador que</p>
                <h1>Julga um livro <br /> pela sua <strong>capa...</strong></h1>
                <p className='p-tertiary'>Porque se a capa não te impressiona, o que mais pode?</p>
            </span>
        </section>

        <section className='my-biography'>
            <span>
                <h1>Eu sou um Desenvolvedor Front-end.</h1>
                <p>Atualmente procurando um emprego.</p>
            </span>
            <p>
                Apaixonado pelo desenvolvimento web desde os 16 anos, sou brasileiro, nascido em 2006.
                Atualmente, estudo Front-end e tenho experiência com back-end, incluindo arquiteturas MVC e outras.
                Sou uma pessoa que adora desafios, especialmente aqueles que me tiram da zona de conforto,
                pois minhas maiores evoluções e aprendizados vieram de momentos em que precisei enfrentá-los.
                Sou um estudante assíduo, que aprecia tomar café e, nas horas vagas, compartilha seu tempo com
                a família e com Deus. Sou cristão, amo séries e filmes desse gênero e também séries investigativas.
                Outra paixão ardente que tenho é a musculação e o boxe 😊
            </p>
        </section>
    </HomeContainer>
  )
} 

export default Home