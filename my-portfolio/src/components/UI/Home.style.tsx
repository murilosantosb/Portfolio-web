import styled from "styled-components";


export const HomeContainer = styled.section`
    position: relative;
    
    width: 80%;

    > section {
        margin-top: 18%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 40px;
    }

    section > img {
        width: 200px;
        padding: 20px;
        background-image: linear-gradient(to right, #11071f,#6d38a1, #7e6d94);
        border-radius: 50%;
    }

    p.p {
        position: absolute;
        top: 0%;
        left: 52%;
        
    }

    p.p-secondary {
        text-decoration: underline ;

    }

    p.p-tertiary {
        font-size: small;
        margin-top: 15px;
    }

    h1 {
        font-size: 2.3em;
        margin-top: 10px;
    }

    strong {
        color: var(--color-strong );
    }

    div.my-biography{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10%;
    }

    div > p {
        word-spacing: 0px ;
    }

    div.my-biography > span > p{
        text-decoration: underline 3px #7127ba;
    }

    @media(min-width: 700px) {
        > section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr; 
        width: 600px;
        }
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