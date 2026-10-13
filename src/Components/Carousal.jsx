import React from 'react'
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";

export const Carousal = () => {
  return (
      <div className="carousel">

    <input type="radio" name="slide" id="slide1" checked />
    <input type="radio" name="slide" id="slide2" />
    <input type="radio" name="slide" id="slide3" />

    <div className="carousel-track">

      <div className="slide">
        <img src={p1} alt="Beautiful landscape"/>

        <div className="caption">
          <h2>Explore Nature</h2>
          <p>Discover beautiful places around the world.</p>
        </div>

        <label for="slide3" className="arrow prev">&#10094;</label>
        <label for="slide2" className="arrow next">&#10095;</label>
      </div>

      <div className="slide">
        <img src={p2} alt="Mountain lake"/>

        <div className="caption">
          <h2>Beautiful Mountains</h2>
          <p>Enjoy the beauty of peaceful destinations.</p>
        </div>

        <label for="slide1" className="arrow prev">&#10094;</label>
        <label for="slide3" className="arrow next">&#10095;</label>
      </div>

      <div className="slide">
        <img src={p3} alt="Lake and mountains"/>

        <div className="caption">
          <h2>Find Your Adventure</h2>
          <p>Make every journey unforgettable.</p>
        </div>

        <label for="slide2" className="arrow prev">&#10094;</label>
        <label for="slide1" className="arrow next">&#10095;</label>
      </div>

    </div>

    <div className="dots">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
    </div>

  </div>
    
  )
}

export default Carousal