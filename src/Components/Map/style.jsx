import styled from 'styled-components'

export const Container = styled.div`
    
    .leaflet-container{
        width: 40vw;
        height: 30vh;
    }

    @media(min-width: 1200px){
        .leaflet-container{   
            width: 40vw;
            height: 20vh;
        }
    }
`;

export const RoutMaps = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;

    a{
        text-decoration: none;
        font-weight:bold;
        color: #898787;
    }

    a:hover{
        transition: .2s;
        color: black;
    }

    background-color: #d7e1fa;;
    
    padding: 15px;
    border-radius: 0px 0px 10px 10px;
`;
