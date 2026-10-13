import React from 'react'
 

import card1 from "../assets/card1.webp"
import card2 from "../assets/card2.webp"
import card3 from "../assets/card3.webp"
import card4 from "../assets/card4.webp"

export const Cards = () => {
  return (
    <div className="container py-5">
<h6>My SKills</h6>
    <h1 style={{
      paddingBottom: "25px",
    }}>My Expertise</h1>


    <div className="row g-4">

  
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card1} className="card-img-top mx-auto mt-3 w-50 " alt=""/>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card2} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
      </div>


      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card3} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
      </div>


      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card h-100 text-center bg-color">
          <img src={card4} className="card-img-top mx-auto mt-3 w-50" alt=""/>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Cards