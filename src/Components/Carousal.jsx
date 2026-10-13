import React from 'react'
import "./Carousal.css"
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";

export const Carousal = () => {
  return (
<div className="carousel">

      <input type="radio" name="slide" id="slide1" defaultChecked />
      <input type="radio" name="slide" id="slide2" />
      <input type="radio" name="slide" id="slide3" />

      <div className="carousel-track">

        <div className="slide">
          <img src={p1} alt="Beautiful landscape" />

          <label htmlFor="slide3" className="arrow prev">❮</label>
          <label htmlFor="slide2" className="arrow next">❯</label>
        </div>

        <div className="slide">
          <img src={p2} alt="Mountain lake" />

          <label htmlFor="slide1" className="arrow prev">❮</label>
          <label htmlFor="slide3" className="arrow next">❯</label>
        </div>

        <div className="slide">
          <img src={p3} alt="Beautiful mountains" />

          <label htmlFor="slide2" className="arrow prev">❮</label>
          <label htmlFor="slide1" className="arrow next">❯</label>
        </div>

      </div>

      <div className="dots">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>

    </div>
    
  )
}

export default Carousal