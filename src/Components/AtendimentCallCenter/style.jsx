import styled from 'styled-components'

export const Container = styled.div`
    height: 85vh;
    width: 100%;

    background-color: #E9EDF3 ;

    padding: 5rem;
`;

export const Tittle = styled.div`
    display: flex;
    justify-content: center;
 
    color: #898787;
    font-weight: 500;
    h1{
        margin: 1.5rem;
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    row-gap: 1.8rem;
    column-gap: 1.8rem;
`;
