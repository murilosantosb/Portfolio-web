import styled from "styled-components";

export const ProjectGalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 200px;
    padding: 10px;

    @media (min-width: 991px) {
        width: 60%;
    }
`



export const ProjectConteiner = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        width: 100%;

       

        span > h2 {
            color: var(--color-strong);
            font-size: medium;
        }

        span > a  {
            margin-top: 7px;
            color: #e2e2e2;
            font-size: 2em;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        span > a:hover {
            cursor: pointer;
            color: #8853e4;
            text-decoration: underline;
        }

        article {
            background-color: transparent;
            backdrop-filter: blur(15px);
            border-radius: 15px;
            border: 1px solid white;
            width: 350px;
            padding: 20px 30px;
        }

        div {
            width: 430px;
            background-color: #2b0b3a;
            display: flex;
            justify-content: flex-start;
            border-radius: 15px;
        }

        div > img {
            width: 400px;
            height: 250px;
            border-radius: 0px 15px 0px 15px;
            margin-top: 15px;

        }

        

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100px 100px;
        width: 90%;

        span {
            grid-column: span 2;

        }

        div {
            width: 500px ;

        }

        div > img {
            width: 470px;
        }

        article {
           width: 670px;
           margin-top: 20px;       
        }

        section {
         margin-right: -100px;
        }
    }
`

export const ProjectRight = styled(ProjectConteiner)`
    align-items: flex-start;

    @media (min-width: 1200px) {
        div > img {
            border-radius: 15px 0px 0px 0px;
            margin-left: 35px;

        }
    }
`

export const ProjectLeft = styled(ProjectConteiner)`
    align-items: flex-end;
     span  {
        text-align: end;
     }

    @media(min-width: 1200px) {
       display: flex;
       flex-direction: row-reverse;
       align-items: center;
        
       

        div > img {
            margin-right: 35px ;

        }

       section {
        margin: 0px 0px 60px -90px;
        /* margin-bottom: 60px; */
       }
    }
` 

