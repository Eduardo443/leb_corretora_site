import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '../Styles/GlobalStyled.js';
import Home from "../Pages/Home.jsx"
// import 'leaflet/dist/leaflet.css'


export default () => {
  return (
    <BrowserRouter>
      <Home />

      <GlobalStyles/>
    </BrowserRouter>
  )
}