import React from 'react'

import { Container, Ilustration, Tittle, Paragraph } from './style'

import ilustration from '../../assets/imgs/aboutUs.svg'

export default () =>{
    return (
      <Container>
          <Ilustration>
              <img src={ilustration} alt="Sobre nós"/>
          </Ilustration>
          <Paragraph>
            <Tittle>Sobre a LEB Corretora</Tittle>
            <p>
                A LEB Correto já esta atuando na area de seguros a mais de 20 ano, buscando sempre o melhor para nossos clientes
            </p>
            <p>
                E, assim de tudo, entendemos que nada pode substituir o contato humano, ainda mais na hora em que mais precisamos!
            </p>
          </Paragraph>
      </Container>
    );
}