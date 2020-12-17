import React from 'react';
import "./Header.css"

import logo from "../../assets/imgs/Logo_leb.png"
import Primary_button from "./Primary_button.jsx"

export default () => {
    return (
        <header className="header">

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>

        <div className="logo">
            <img src={logo} alt="logo"/>
            <h1>LEB Corretora</h1>
        </div>

        <div className="page-buttons">
            <a href="/">Home</a>
            <a href="../Pages/products.jsx">Produtos</a>
            <Primary_button/>
        </div>
    </header>
    )
}