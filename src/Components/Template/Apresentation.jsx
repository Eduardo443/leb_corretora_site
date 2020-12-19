import React from 'react';
import "./Apresentation.css"

import PrimaryButton from './PrimaryButton.jsx'

export default () => {
    return (
    <div className="apresentation-container">
        <div className="text-container">
            <div className="text-apresentation">
                <h1>Solicite uma Cotação de seguro</h1>
                <p>Ficaremos muito contentes com o seu pedido,  ajudando-o a encontra o seguro perfeito para as suas necessidades</p>
                <PrimaryButton/>
                <a href="../Pages/products.jsx">Produtos</a>+
            </div>
        </div>
        <img src="../../assets/img/apresentation-img.svg" alt=""/>
    </div>
    )
}