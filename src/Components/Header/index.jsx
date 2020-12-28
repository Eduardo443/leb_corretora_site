import React from 'react';

import { Container, LogoInfo, PageButtons } from './style.jsx'

import logo from "../../assets/imgs/leb_icon.png"
import PrimaryButton from "../PrimaryButton"

export default () => {
    return (
        <Container>
            <LogoInfo>
                <img src={logo} alt="logo"/>
                <h1>LEB Corretora</h1>
            </LogoInfo>
            <PageButtons>
                <a href="/">Home</a>
                <a href="../Pages/products.jsx">Produtos</a>
                <PrimaryButton/>
            </PageButtons>
        </Container>
    )
}