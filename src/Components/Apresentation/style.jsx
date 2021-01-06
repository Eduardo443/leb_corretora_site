import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 95vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 15vw;
    @media(max-width: 1300px){
        padding: 0;
    }

    // @media(max-width: 900px){
    //     flex-direction: column;
    // }
    
    background-color: #1D69A3;
    background: linear-gradient(90deg, #24327B 0%, rgba(52, 78, 213, 0) 100%), #1D69A3;
`;

export const InformText = styled.div`

    width: 35rem;
    margin: 4rem;

    h1 {
        height: 8rem;
        color: white;
    }
    p{
        color: #CBC3FD;
    }
    
`;

export const Buttons = styled.div`
    margin-top: 8rem;

    display: flex;
    align-items: center;

    > a{
        text-decoration: none;
        color: #CBC3FD;
        margin: 2rem;
    }

    // @media(max-width: 1240px){
    //     display: flex;
    //     flex-direction: column;

    //     margin-top: 5rem;
    // }
`;

export const Ilustration = styled.div`
 
`;



// .apresentation-container{
//     width: 100%;
//     height: 100vh;
// }

// @media(min-width: 1200px){
//     .apresentation-container{
//     }
// }