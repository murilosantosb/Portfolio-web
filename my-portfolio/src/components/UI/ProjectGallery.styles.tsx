import styled from "styled-components";

export const ProjectGalleryContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 100px;

    @media (min-width: 991px) {
        width: 60%;
        gap: 150px;
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
            width: 100%;
            max-width: 700px;
            padding: 20px 30px;
        }

        div {
            width: 400px;
            background-color: #2b0b3a;
            display: flex;
            justify-content: flex-start;
            border-radius: 15px;
        }

        div > img {
            width: 370px;
            height: 250px;
            object-fit: cover;
            border-radius: 0px 15px 0px 15px;
            margin-top: 15px;
        }

        div > img.p1 {
            padding: 20px;
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
            object-fit: cover;
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
    margin-bottom: 100px;

    @media (min-width: 1200px) {
        div > img {
            border-radius: 15px 0px 0px 0px;
            margin-left: 35px;
        }
    }
`

export const StackList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 15px 0 0;
`

export const StackChip = styled.li`
    background-color: rgba(136, 83, 228, 0.15);
    border: 1px solid #7127ba;
    color: #e2e2e2;
    font-size: 0.75em;
    padding: 4px 12px;
    border-radius: 20px;
    white-space: nowrap;
`

export const ProjectBadge = styled.span`
    display: inline-block;
    background-color: #2b0b3a;
    border: 1px solid #8853e4;
    color: #e2e2e2;
    font-size: 0.7em;
    font-weight: bold;
    padding: 3px 10px;
    border-radius: 20px;
    margin-left: 10px;
    vertical-align: middle;
`

export const ProjectLeft = styled(ProjectConteiner)`
    align-items: flex-end;
     span  {
        text-align: end;
     }

     margin-bottom: 100px;

    @media(min-width: 1200px) {
       display: flex;
       flex-direction: row-reverse;
       align-items: center;
       margin-bottom: -100px;
        
        div > img {
            margin-right: 35px ;
        }

       section {
        margin: 0px 0px 60px -90px;
        /* margin-bottom: 60px; */
       }
    }
` 

