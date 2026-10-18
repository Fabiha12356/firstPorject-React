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


const cardData = [
  {
    tittle : "sargodha",
    website : "Salt'n Pepper Express",
    location: "Opposite Sargodha Arts Council Babar Road",
    phoneNo : "Ph: 042-111-100-678",
    Images : ""
  },
  { tittle : "Jhelum",
    website : "Salt'n Pepper Express",
    location: "Opposite Dancing Fountain Gallery 2 Citi Housing Jhelum,",
    phoneNo : "Ph: 0307-7675555",
    Images : ""},
  {
     tittle : "Faisal Town",
    website : "Salt'n Pepper Express",
    location: " 34-C Abul Hassan Isfahani Rd, Faisal Town,Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : ""
  },
]

export const App = () => {
  return (
    <>
  <Navbaar/>
  <Carousal />
  <Cards />
  <Hero  condition = {true}  />
  <Hero  condition = {false} />
{
  cardData.map(({tittle,website,location,phoneNo}) =>{
 return <WrapCrads tittle={tittle} web={website} loc={location} ph={phoneNo} />
  })
}
 
    </>
  )
}

export default App
