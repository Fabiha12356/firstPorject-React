import { useState } from 'react'
import "./Components/Navbaar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React from 'react'
import Navbaar from './Components/Navbaar.jsx';
import Carousal from './Components/carousal.jsx';
import Cards from './Components/Cards.jsx'
import Hero from './Components/Hero.jsx'


export const App = () => {
  return (
    <>
  <Navbaar/>
  <Carousal />
  <Cards />
  <Hero />
    </>
  )
}

export default App
