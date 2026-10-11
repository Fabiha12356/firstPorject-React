 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 
 export const Navbaar = () => {
   return (
  <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid px-5">
      <a className="navbar-brand" href="#">
        <img src="" alt="img" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse gap-5 text-center" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-disabled="true">Use Cases</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-disabled="true">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-disabled="true">Blog</a>
          </li>
        </ul>
        <div>
          <button className="btn line" type="submit">Request a quote</button>
        </div>
      </div>
    </div>
  </nav>
  </>
   )
 }
 
 export default Navbaar