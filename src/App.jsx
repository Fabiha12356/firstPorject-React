import { useState } from 'react'
import "./Components/Navbaar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React from 'react'
import Navbaar from './Components/Navbaar.jsx';
import Carousal from './Components/carousal.jsx';
import Cards from './Components/Cards.jsx'
import Hero from './Components/Hero.jsx'
import WrapCrads from './Components/Wrap.jsx'


export const App = () => {
  return (
    <>
  <Navbaar/>
  <Carousal />
  <Cards />
  <Hero  condition = {true}  />
  <Hero  condition = {false} />
  <WrapCrads  tittle={"sargodha"} web={"Salt'n Pepper Express"}  loc={" Opposite Sargodha Arts Council Babar Road"} ph={"Ph: 042-111-100-678"} />
  <WrapCrads  tittle={"Jhelum"} web={"Salt'n Pepper Express"}  loc={"Opposite Dancing Fountain Gallery 2 Citi Housing Jhelum,"} ph={"Ph: 042-111-100-678"} />
  <WrapCrads  tittle={"Faisal Town"} web={"Salt'n Pepper Express"}  loc={"34-C Abul Hassan Isfahani Rd, Faisal Town,Lahore"} ph={"Ph: 042-111-100-678"} />
 
    </>
  )
}

export default App
