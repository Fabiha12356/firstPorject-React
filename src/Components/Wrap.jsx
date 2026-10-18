import React from 'react'



import p1 from "../assets/pic1.webp"
import p2 from "../assets/pic2.webp"
import p3 from "../assets/pic3.webp"
export const Wrap = ({tittle,web,loc,ph}) => {
  return (
   <div class="card-group">
  <div class="card">
    <img src={p1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{tittle}</h5>
      <h3 class="card-text">{web}</h3><p class="card-text">
            <small class="text-body-secondary">{loc}</small></p>
      <p class="card-text"><small class="text-body-secondary">{ph}</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p2} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">{tittle}</h5>
      <h3 class="card-text">{web}</h3><p class="card-text">
            <small class="text-body-secondary">{loc}</small></p>
      <p class="card-text"><small class="text-body-secondary">{ph}</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p3} class="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">{tittle}</h5>
      <h3 class="card-text">{web}</h3><p class="card-text">
            <small class="text-body-secondary">{loc}</small></p>
      <p class="card-text"><small class="text-body-secondary">{ph}</small></p>
    </div>
  </div>
</div>
  )
}
 export default Wrap