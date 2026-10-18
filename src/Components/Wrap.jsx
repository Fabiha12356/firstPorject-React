import React from 'react'



import p1 from "../assets/pic1.webp"
import p2 from "../assets/pic2.webp"
import p3 from "../assets/pic3.webp"
export const Wrap = () => {
  return (
   <div class="card-group">
  <div class="card">
    <img src={p1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h3 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h3><p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small></p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p2} class="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h3 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h3><p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small></p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p3} class="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h3 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h3><p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small></p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  )
}
 export default Wrap