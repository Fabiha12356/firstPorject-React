 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbaar.css";
import logo from "../assets/logoo.webp";
import logo1 from "../assets/logoo.1.webp";

 
 export const Navbaar = () => {
   return (
  <>
   <nav className="navbar navbar-expand-lg nav-bg">
    <div className="container-fluid px-5  nav-bg">
      <a className="navbar-brand" href="#">
        <img src={logo1} alt="img" width={100} /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse gap-5 text-center" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav">
          <li className="nav-item ulcss">
            <a className="nav-link active ulcss" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active ulcss" href="#">About US</a>
          </li>
          <li className="nav-item ulcss">
            <a className="nav-link active ulcss" >Publication</a>
          </li>
        </ul>
        <div>
          <button className="btn line ulcss" type="submit">Get a Fiance</button>
        </div>
        <div>
          <button className="btn line ulcss" type="submit">Online order</button>
        </div>
      </div>
    </div>
  </nav>
  </>
   )
 }
 
 export default Navbaar