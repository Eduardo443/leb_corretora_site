import React from 'react';

import { Container, InformText, Buttons, Ilustration } from './style.jsx'

import PrimaryButton from '../PrimaryButton'
import ilustration from '../../assets/imgs/Apresentation.svg'

export default () => {
    return (
    <Container>
        <InformText>
                <h1>Solicite uma Cotação de seguro</h1>
                <p>Ficaremos muito contentes com o seu pedido,  ajudando-o a encontra o seguro perfeito para as suas necessidades</p>
                <Buttons>
                    <PrimaryButton/>
                    <a href="../../Pages/products.jsx">Produtos</a>
                </Buttons>
        </InformText>
        <Ilustration>
            <img src={ilustration} alt="Apresentação"/>
        </Ilustration>
    </Container>
    )
}