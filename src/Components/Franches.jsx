import React from 'react'
import "./Franches.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Franches = ({city,name}) => {
  return (
   
    <div className="franches-container py-5 my-3">
    <div class="card-body">
    <h3 class="card-title">OPENING SOON</h3>
    <h4 class="card-title">Salt'n Pepper Express</h4>
    <h6 class="card-text">{city}</h6>
    <h6 class="card-text">{name}</h6>
  </div>
  </div>

  )
}
export default Franches