import React from 'react'

import { Container, Ilustration, Tittle, Number, Text } from './style'

function CallCenterCard(props){
    return (
        <Container>
            <Ilustration>
                <a href={props.Img}></a>
            </Ilustration>
            <Tittle><h1>{props.Name}</h1></Tittle>
            <Number><h2>{props.PhoneNumber}</h2></Number>
        </Container>
    );
}

export default CallCenterCard