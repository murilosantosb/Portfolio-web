
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
                <h1>Full-Stack | Dados, Machine Learning e IA</h1>
                <p>Atualmente empregado na Libbs Farmacêutica</p>
            </span>
            <p>
                Atuo em duas frentes que se complementam: a construção de aplicações web full-stack, no front-end e no back-end, com foco em arquitetura e boas práticas, e a atuação em dados, da ingestão e análise até pipelines e modelos de Machine Learning. Também venho ampliando meus conhecimentos em Computação em Nuvem, com Azure e AWS. Tenho perfil analítico, gosto de desafios e estou em constante evolução, sempre buscando aprender novas tecnologias e gerar impacto através da tecnologia.
            </p>
            <p>
                No âmbito pessoal, sou cristão, valorizo minha fé, minha família e meu crescimento pessoal. Gosto de séries e filmes, especialmente do gênero investigativo, e também sou apaixonado por musculação e boxe 😊
            </p>
        </div>
    </HomeContainer>
  )
} 

export default Home 