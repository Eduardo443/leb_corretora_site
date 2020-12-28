import React from 'react'

import { Container, Ilustration, Tittle, Number } from './style'

export default props => {
    return (
        <Container>
            <Ilustration>
                <a href={props.img}></a>
            </Ilustration>
            <Tittle>{props.name}</Tittle>
            <Number>{props.phoneNumber}</Number>
        </Container>
    );
}