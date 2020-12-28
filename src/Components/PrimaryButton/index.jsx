import React from 'react'

import arrow from "../../assets/imgs/arrow.svg"
import { Container } from './style.jsx'  

export default () => {
   return (
    <Container>
        <a href="../../pages/Cotation.jsx"> Cotação <img src={arrow} alt="arrow"/></a>
    </Container>
    );
}