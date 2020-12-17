import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Home from "../Components/Pages/Home.jsx"


export default () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}