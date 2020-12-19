import React from 'react'

import "./Footer.css"
import Map from '../Map/Map.jsx'

export default () => {
   return( 
   <footer>
        <div className="information">
            <h1 className="tittle">Informações</h1>
            <div className="paragraph">
                <h1 className="subtittle">Telefone</h1>
                <p>(47) 3338-3138</p>
                <p>(47) 9 9985-2364</p>
            </div>
            <div className="paragraph">
                <h1 className="subtittle">Endereço</h1>
                <p>Rua: Doutor Pedro Zimmermann</p>
                <p>Itoupava Central</p>
                <p>Blumenau - SC</p>
            </div>
        </div>

        <div className="localization">
            <h1 className="tittle">Localização</h1>
            <Map/>
        </div>
        {/* <p>Desenvolvido por Eduardo Hensel Batista</p> */}
    </footer>
    )
}