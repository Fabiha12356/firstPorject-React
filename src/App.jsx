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
  {
     tittle : "DHA",
    website : "Salt'n Pepper Express",
    location: " 93-Y Phase III, DHA,Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : ""
  },
  {
     tittle : "Bahria Town",
    website : "Salt'n Pepper Express",
    location: "  Arwa Heights Building 19 Nishtar Block, Sector E, Bahria Town Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : ""
  },
  {
     tittle : "Gujar Khan",
    website : "Salt'n Pepper Express",
    location: " New Metro City Gujar Khan",
    phoneNo : "Ph: 0321-1114965",
    Images : ""
  },
  {
     tittle : "Lahore",
    website : "Salt'n Pepper Express",
    location: " Shop no.5, Arcade Block, Fortress Stadium, Lahore",
    phoneNo : "Ph: 042-366-23-100",
    Images : ""
  },
  {
     tittle : "Gujrat",
    website : "Salt'n Pepper Express",
    location: "  Service Mor, Gujrat",
    phoneNo : "Gujrat",
    Images : ""
  },
  {
     tittle : "Sahiwal",
    website : "Salt'n Pepper Express",
    location: "Opposite Main Gate Police Line, Sahiwal",
    phoneNo : "Ph: 040-4515485",
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

<div style={{ display: "flex", flexWrap: "wrap", gap: "20px",  width: "100%",    margin: "0 auto",  overFlow : "hidden" ,
  justifyContent : "center" , alignItems : "center",
}}>
  {
  cardData.map(({tittle,website,location,phoneNo}) =>{
  return <WrapCrads tittle={tittle} web={website} loc={location} ph={phoneNo} />
  })
}
</div>

    </>
  
  )
}

export default App
