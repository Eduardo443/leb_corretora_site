import React from 'react';
import "./style.css"

import PrimaryButton from '../PrimaryButton'
import ilustration from '../../assets/imgs/Apresentation.svg'

export default () => {
    return (
    <div className="apresentation-container">
        <div className="text-container">
            <div className="text-apresentation">
                <h1>Solicite uma Cotação de seguro</h1>
                <p>Ficaremos muito contentes com o seu pedido,  ajudando-o a encontra o seguro perfeito para as suas necessidades</p>
                <PrimaryButton/>
                <a href="../../Pages/products.jsx">Produtos</a>+
            </div>
        </div>
        <img src={ilustration} alt="Apresentação"/>
    </div>
    )
}