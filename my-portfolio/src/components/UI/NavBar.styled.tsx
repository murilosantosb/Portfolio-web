import styled from "styled-components";


export const Nav = styled.nav`
    html {
        scroll-behavior: smooth;
    }

    background-color: var(--bg-secondary);
    padding: 30px 40px;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out;

    > img {
        width: 50px;
        border-radius: 50%;
        border: 3px solid var(--bg-tertiary);
        padding: 5px;
    }

    > ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
    }

    @media(min-width:700px) {
        display: flex;
        justify-content: space-around;
        overflow-y: hidden;

        transform: scale(1.1);
        >ul {
            gap: 100px;
        }
    }
`
