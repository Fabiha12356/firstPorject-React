import React from 'react'



import p1 from "../assets/pic1.webp"
import p2 from "../assets/pic2.webp"
import p3 from "../assets/pic3.webp"

import "./Wrap.css"
export const Wrap = ({tittle,web,loc,ph,img}) => {
  return (
    <div className="card"  style={{
     width: "500px",
  border: "1px solid black",
}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{web}</p>
            <p className="card-text">{loc}</p>
            <p className="card-text">{ph}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>

  )
}
 export default Wrap