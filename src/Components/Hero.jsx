import React from 'react'
import "./Hero.css"
 import heropic1 from "../assets/heropic1.webp"
 import heropic2  from "../assets/heropic2.webp"

export const Hero = () => {
    return (
        <div className="container-fuild col-xxl-8 px-4 py-5">
            <div className='text-center'>
                <h1>Salt'n Pepper</h1>
                <h1>Restaurant Franchises</h1>
                <h5>Each of our franchises are individually managed. For further details, kindly contact them directly.

</h5>
            </div>
             <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> 
                <div className="col-10 col-sm-8 col-lg-6"> 
<img src={heropic1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
 </div> <div className="col-lg-6">
     <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Salt'n Pepper</h1> 
 <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source
     toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> 
     <div className="d-grid gap-2 d-md-flex justify-content-md-start"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" 
     fdprocessedid="5mjj3">Primary</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="okj03">Default
     </button>
      </div> </div> </div> </div>
    )
}
export default Hero
