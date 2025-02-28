
import photo from '../assets/profile-pic.png'
import { BsArrowDownLeft } from "react-icons/bs";
import { HomeContainer } from './UI/Home.style';

const Home = () => {
  return (
    <HomeContainer id='home'>
        <p className='p'><BsArrowDownLeft/>Hello! I Am <strong>Murilo Santos</strong></p>
        <section>
            <img src={photo} alt="Foto do criador do site" />
            <span>
                <p className='p-secondary'>Um Programador que</p>
                <h1>Julga um livro <br /> pela sua <strong>capa...</strong></h1>
                <p className='p-tertiary'>Porque se a capa não te impressiona, o que mais pode?</p>
            </span>
        </section>

        <div className='my-biography'>
            <span>
                <h1>Eu sou um Desenvolvedor Full-Stack.</h1>
                <p>Atualmente procurando um emprego.</p>
            </span>
            <p>
                Apaixonado pelo desenvolvimento web desde os 16 anos, sou brasileiro, nascido em 2006.
                Atualmente, estudo Full-Stack e tenho experiência com back-end, incluindo arquiteturas MVC e outras.
                Sou uma pessoa que adora desafios, especialmente aqueles que me tiram da zona de conforto,
                pois minhas maiores evoluções e aprendizados vieram de momentos em que precisei enfrentá-los.
                Sou um estudante assíduo, que aprecia tomar café e, nas horas vagas, compartilha seu tempo com
                a família e com Deus. Sou cristão, amo séries e filmes desse gênero e também séries investigativas.
                Outra paixão ardente que tenho é a musculação e o boxe 😊
            </p>
        </div>
    </HomeContainer>
  )
} 

export default Home 