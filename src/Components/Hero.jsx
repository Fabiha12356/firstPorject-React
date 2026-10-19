import React from 'react'
import "./Hero.css"
 import heropic1 from "../assets/heropic1.webp"
 import heropic2  from "../assets/heropic2.webp"

export const Hero = (props) => {
    return (
 (props.condition)?
    <> <div className="container-fuild col-xxl-8 px-4 py-5">
            <div className='text-center'>
                <h1>Salt'n Pepper</h1>
                <h1>{props.franch} Franchises</h1>
                <h5>Each of our franchises are individually managed. For further details, kindly contact them directly.

</h5>
            </div>
             <div className="row  align-items-center g-5 py-5"> 
                <div className="col-10 col-sm-8 col-lg-6"> 
<img src={props.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
 </div> <div className="col-lg-6">
     <h5 className="display-5 fw-mediam text-body-emphasis lh-1 mb-3">{props.name}</h5> 
     <h6 className="display-5 fw-mediam text-body-emphasis lh-1 mb-3">
Salt'n Pepper Restaurant</h6> 
 <p className="lead">{props.loc}</p> 
 <p className="lead">{props.ph}</p> 
     <div className="d-grid gap-2 d-md-flex justify-content-md-start">
 <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" 
     fdprocessedid="5mjj3">Get Direction</button>
      </div> 
      </div> 
      </div> 
      </div></>:
    <> <div className="container-fuild col-xxl-8 px-4 py-5">
             <div className="row  align-items-center g-5 py-5"> 
  <div className="col-lg-6">
     <h5 className="display-5 fw-mediam text-body-emphasis lh-1 mb-3">{props.name}</h5> 
     <h6 className="display-5 fw-mediam text-body-emphasis lh-1 mb-3">
Salt'n Pepper Restaurant</h6> 
 <p className="lead">{props.loc}</p> 
 <p className="lead">{props.ph}</p> 
     <div className="d-grid gap-2 d-md-flex justify-content-md-start">
 <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" 
     fdprocessedid="5mjj3">Get Direction</button>
      </div> 
      </div> 
                     <div className="col-10 col-sm-8 col-lg-6"> 
<img src={props.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
 </div>
      </div> 
      </div></>


    )
}
export default Hero
