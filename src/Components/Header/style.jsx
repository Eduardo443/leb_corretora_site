import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #1D69A3;
    background: linear-gradient(90deg, #24327B 0%, rgba(52, 78, 213, 0) 100%), #1D69A3;

    width: 100%;
    height: 15vh;

    color: white;
    text-decoration: none;

    @media(min-width: 1200px){
        height: 8vh;
     }

`;

export const LogoInfo = styled.div`
    display: flex;
    align-items: center;

    font-size: 10px;
    font-weight: 100;

    img{
        height: 12vh;
        margin-left: 3rem;
        margin-right: 2rem;
    }

    @media(min-width: 1200px){
         img{ height: 6vh; }
     }
`;

export const PageButtons = styled.div`
    font-size: 1.1rem;

    display: flex;
    align-items: center;

    a{
        color: white;
        text-decoration: none;

        margin: 1.8vw;
    }
`;