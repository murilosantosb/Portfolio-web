
import photo from '../assets/myphoto2.jpeg'
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
                <h1>Desenvolvedor Full-Stack | Dados e Machine Learning</h1>
                <p>Atualmente empregado na Libbs Farmacêutica</p>
            </span>
            <p>
                Desenvolvedor Full-Stack em formação, com experiência na construção de aplicações web, atuando tanto no front-end quanto no back-end, com foco em performance, escalabilidade e boas práticas de arquitetura.
                Atualmente, estou ampliando minha atuação para o ecossistema de dados, com foco em Análise de Dados, Machine Learning e Computação em Nuvem, buscando integrar desenvolvimento e inteligência de dados na criação de soluções modernas e orientadas a dados.
                Tenho perfil analítico, gosto de desafios e estou em constante evolução, sempre buscando aprender novas tecnologias e gerar impacto através da tecnologia.
                No âmbito pessoal, sou cristão, valorizo minha fé, minha família e meu crescimento pessoal. Gosto de séries e filmes, especialmente do gênero investigativo, e também sou apaixonado por musculação e boxe 😊
            </p>
        </div>
    </HomeContainer>
  )
} 

export default Home 