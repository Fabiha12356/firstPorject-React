import React from 'react'
import "./Card.css"
 

import card1 from "../assets/card1.webp"
import card2 from "../assets/card2.webp"
import card3 from "../assets/card3.webp"
import card4 from "../assets/card4.webp"

export const Cards = () => {
  return (
    <div className="container-fulid py-5">
            <h1>Welcome to Salt n Peper</h1>
            <h1>Resturant! Our Brand</h1>
            <h5>Please click our brands below for further information, reservations or to order online!</h5>
  


    <div className="row g-4 py-5 box ms-1">

  
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card1} className="card-img-top mx-auto mt-3 w-50 " alt=""/>
        </div>
           <div className='py-3'>
        <button>Order Now</button>
      </div>
      </div>
      
    

      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card2} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
           <div className='py-3'>
        <button>Order Now</button>
      </div>
      </div>
     


      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card3} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
           <div className='py-3'>
        <button>Order Now</button>
      </div>
      </div>


      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card4} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
           <div className='py-3'>
        <button>Order Now</button>
      </div>
      </div>

    </div>
  </div>
  )
}

export default Cards