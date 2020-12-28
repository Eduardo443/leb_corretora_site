import Styled from 'styled-components'

export const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 23rem;
    width: 100%;

    background-color: #F0F4FD;

    p{ color: #898787; }

    @media(min-width: 1200px){
        height: 25rem;
    }
`;

export const Information = Styled.div` 
    margin: 2.8rem;
`;

export const Tittle = Styled.div`
    color: #898787;

    font-size: 2rem;
    margin-bottom: 1rem;

    @media(min-width: 1200px){
        font-size: 1.7rem;
    }
`;

export const Paragraph = Styled.div`
    margin-left: 1.7rem
`;

export const Subtittle = Styled.div`
    color: #5485E6;

    font-size: 1rem;
    margin-top: 2rem;

    @media(min-width: 1200px){
        font-size: 1.3rem;
    }
`;

export const Localization = Styled.div`
    justify-content: space-between;
    margin-right: 5rem;
`;


