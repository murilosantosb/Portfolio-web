import { SiPandas, SiApachespark, SiDatabricks, SiLangchain, SiAmazonwebservices } from 'react-icons/si'
import { SkillsContainer, Skills, DataSkillsBlock } from './UI/MySkils.style'

const MySkills = () => {
  return (
    <SkillsContainer id='about'>
        <span>
            <h1>Tecnologias que Domino:</h1>
            <p>Ferramentas e Linguagens que Uso no Meu Dia a Dia</p>
        </span>
        <section>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" alt="TypeScript" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="React" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" alt="NextJs" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="Spring Boot" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000" alt="Redux" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Git" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="NodeJs" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff" alt="ExpressJS" />
            </Skills>
            <Skills>
                <img src="https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000" alt="NestJS" />
            </Skills>
        </section>

        <DataSkillsBlock>
            <h2>Dados, Nuvem e IA</h2>
            <section>
                <Skills>
                    <SiPandas style={{ fill: '#e2e2e2' }} title="Pandas" />
                </Skills>
                <Skills>
                    <SiApachespark style={{ fill: '#E25A1C' }} title="PySpark" />
                </Skills>
                <Skills>
                    <SiDatabricks style={{ fill: '#FF3621' }} title="Databricks" />
                </Skills>
                <Skills>
                    <SiLangchain style={{ fill: '#e2e2e2' }} title="LangChain" />
                </Skills>
                <Skills>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
                </Skills>
                <Skills>
                    <SiAmazonwebservices style={{ fill: '#FF9900' }} title="AWS" />
                </Skills>
                <Skills>
                    <img src="https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000" alt="SQL" />
                </Skills>
                <Skills>
                    <img src="https://img.icons8.com/?size=100&id=cREyrHivHRHF&format=png&color=000000" alt="MongoDB" />
                </Skills>
                <Skills>
                    <img src="https://img.icons8.com/?size=100&id=97384&format=png&color=000000" alt="Machine Learning" />
                </Skills>
            </section>
        </DataSkillsBlock>

    </SkillsContainer>
  )
}

export default MySkills