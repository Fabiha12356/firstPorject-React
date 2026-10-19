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
import Franches  from './Components/Franches.jsx';

const cardData = [
  {
    tittle : "sargodha",
    website : "Salt'n Pepper Express",
    location: "Opposite Sargodha Arts Council Babar Road",
    phoneNo : "Ph: 042-111-100-678",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  { tittle : "Jhelum",
    website : "Salt'n Pepper Express",
    location: "Opposite Dancing Fountain Gallery 2 Citi Housing Jhelum,",
    phoneNo : "Ph: 0307-7675555",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Faisal Town",
    website : "Salt'n Pepper Express",
    location: " 34-C Abul Hassan Isfahani Rd, Faisal Town,Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "DHA",
    website : "Salt'n Pepper Express",
    location: " 93-Y Phase III, DHA,Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Bahria Town",
    website : "Salt'n Pepper Express",
    location: "  Arwa Heights Building 19 Nishtar Block, Sector E, Bahria Town Lahore",
    phoneNo : "Ph: 042-111-100-678",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Gujar Khan",
    website : "Salt'n Pepper Express",
    location: " New Metro City Gujar Khan",
    phoneNo : "Ph: 0321-1114965",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Lahore",
    website : "Salt'n Pepper Express",
    location: " Shop no.5, Arcade Block, Fortress Stadium, Lahore",
    phoneNo : "Ph: 042-366-23-100",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Gujrat",
    website : "Salt'n Pepper Express",
    location: "  Service Mor, Gujrat",
    phoneNo : "Gujrat",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
  {
     tittle : "Sahiwal",
    website : "Salt'n Pepper Express",
    location: "Opposite Main Gate Police Line, Sahiwal",
    phoneNo : "Ph: 040-4515485",
    Images : "https://static.tossdown.com/images/31b37f0c-5936-4232-a55e-8042c2656526.webp"
  },
]

const Branches =[
  {
city : "Blue World City",
name : "Rawalpindi"
  },
  {
city : "Al-Jalil Garden",
name : "Sharqpur"
  },
  {
city : "Al-Jalil Garden",
name : "Sadhoke"
  },
  {
city : "Al-Jalil Garden",
name : "Sheikhupura"
  },
  {
city : "Al-Jalil Garden",
name : "Kharian"
  },
  {
city : "Al-Jalil Garden",
name : "Okara"
  },
  {
city : "Al-Jalil Garden",
name : "Etihad Town, Lahore."
  }
]

export const App = () => {
  return (
    <>
  <Navbaar/>
  <Carousal />
  <Cards />
  <Hero  condition = {true} name={"Faisalabad"} loc={"4-Kohinoor City, Faisalabad"}
   ph={" Ph: 041-8711404"} img={"https://images-beta.tossdown.com/site/11771dbf-36a1-4684-a55e-18af61e0f77c.webp"}  franch={"Resturant"} />
  <Hero  condition = {false} name={"Bahawalpur"} loc={" D.C Chowk, opposite Commissioner House, Bahawalpur"} ph={" Ph: 062-2740271-2"} img={"https://images-beta.tossdown.com/site/b2f78afe-11e4-4af5-8aef-cff9c2908614.webp"} />

<div style={{ display: "flex", flexWrap: "wrap", gap: "20px",  width: "100%",    margin: "0 auto",  overFlow : "hidden" ,
  justifyContent : "center" , alignItems : "center",
}}>
  {
  cardData.map(({tittle,website,location,phoneNo,Images}) =>{
  return <WrapCrads tittle={tittle} web={website} loc={location} ph={phoneNo} img ={Images} />
  })
}
</div>
 <Hero  condition = {true} name={"GUJRANWALA"}
  loc={"Adjacent to Rida Marquees /DHA Main Gate, GT Road Gujranwala Cantt"} ph={"Ph: 055-3884500 l ,055-3880400"}
   img={"https://images-beta.tossdown.com/site/0df39a08-2dca-4998-adda-4ca66b1132cb.webp" }
    franch={"Village"}  />
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px",  width: "100%",    margin: "0 auto",  overFlow : "hidden" ,
  justifyContent : "center" , alignItems : "center",
}}>
  {
  Branches.map(({city,name}) =>{
  return <Franches tittle={name}  city={city} />
  })
}
</div>
    </>
  
  )
}

export default App
