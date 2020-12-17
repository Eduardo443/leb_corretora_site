import React from 'react'

import arrow from "../../assets/imgs/arrow.svg"
import './Primary_button.css'

export default () => {
   return (
    <a className="primary-button"href="../pages/Cotation.jsx">Cotação <img src={arrow} alt="arrow"/></a>
    );
}