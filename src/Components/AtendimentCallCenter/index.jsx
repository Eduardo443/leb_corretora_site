import React from 'react'

import CallCenterCard from '../CallCenterCard'
import { Container, Tittle } from './style'

export default () => {
    return (
        <Container>
            <Tittle><h1>Atendimento via 0800</h1></Tittle>
            <CallCenterCard Name='Liberty' Img={} PhoneNumber='0800 701 4120'/>
        </Container>
    );
}