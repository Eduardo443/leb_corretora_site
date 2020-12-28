import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Apresentation from "../Components/Apresentation"
import AboutUs from "../Components/AboutUs"
import AtendimentCallCenter from "../Components/AtendimentCallCenter"

export default () => {
    return (
    <>
        <Header />
        <Apresentation/>
        <AboutUs/>
        <AtendimentCallCenter/>
        <Footer />
    </>
    )
}
