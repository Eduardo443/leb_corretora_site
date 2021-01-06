import React from 'react'

import { Container, Ilustration, Tittle, Number, Paragraph } from './style'

function CallCenterCard(props){
    return (
        <Container>
            <Ilustration>
                <img href={props.Img}></img>
            </Ilustration>
            <Paragraph>
                <Tittle><h1>{props.Name}</h1></Tittle>
                <Number><h2>{props.PhoneNumber}</h2></Number>
            </Paragraph>
        </Container>
    );
}

export default CallCenterCard