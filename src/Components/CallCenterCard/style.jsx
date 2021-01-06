import styled from 'styled-components'

export const Container = styled.div`
    height: 25rem;
    width: 20rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 10px;

    background-color: white;
`;

export const Ilustration = styled.div`
   img{
       height: 21vh;
       width: 100%;
   }
`;
    
export const Tittle = styled.div`
    display: flex;
    justify-content: center;

    margin: 15px;
    
    color: black;
`;
    
export const Number = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 50px;
    width: 100%;
    border-radius: 0 0 10px 10px;

    background-color: #5581d9;
    color: white;

    cursor: pointer;

    :hover{
        background-color: #316bdf;
    }
`;

export const Paragraph = styled.div`
    display; flex;
`;
