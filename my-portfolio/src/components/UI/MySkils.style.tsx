import styled from "styled-components";



export const SkillsContainer = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    span {
        align-self: flex-start;
    }

    span > h1 {
        font-size: 2.3em;
        margin-bottom: 10px;
    }

    

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 25px 40px;
        align-items: center;
        justify-content: center;
        margin: 0 auto; 
    }

    @media (min-width: 700px) {
        align-items: center;

        span {
        align-self: center;
        }
    }
    
`

export const Skills = styled.div`
    background-color: #251c31;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 20px;

    > img {
        width: 80px;
        padding: 8px;
        margin: 0 auto;
    }

    > svg {
        width: 80px;
        height: 80px;
        padding: 8px;
        margin: 0 auto;
        display: block;
    }
`

export const DataSkillsBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-top: 10px;

    h2 {
        font-size: 1.3em;
        color: var(--color-strong);
    }

    @media (min-width: 700px) {
        align-items: center;
    }
`