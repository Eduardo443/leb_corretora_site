import React from 'react'

import { Container, Information, Tittle, Paragraph, Subtittle, Localization } from './style'
import Map from '../Map'

export default () => {
   return( 
   <Container>
        <Information>
            <Tittle>
            <h1>Informações</h1>
            </Tittle>
            <Paragraph>
                <Subtittle>Telefone</Subtittle>
                <p>(47) 3338-3138</p>
                <p>(47) 9 9985-2364</p>
            </Paragraph>
            <Paragraph>
                <Subtittle>Endereço</Subtittle>
                <p>Rua: Doutor Pedro Zimmermann, 3013 sala 03</p>
                <p>Itoupava Central</p>
                <p>Blumenau - SC</p>
            </Paragraph>
        </Information>

        <Localization>
            <Tittle>
                Localização
            </Tittle>
            <Map/>
        </Localization>
        {/* <p>Desenvolvido por Eduardo Hensel Batista</p> */}
    </Container>
    )
}