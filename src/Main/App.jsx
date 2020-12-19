import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Home from "../Components/Pages/Home.jsx"
// import 'leaflet/dist/leaflet.css'


export default () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}