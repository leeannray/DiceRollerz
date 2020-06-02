import React from "react";
import {Col, Row} from "../components/Grid";
import Creepy from "./eleni-afiontzi-uSvtnSWDGmw-unsplash.jpg"
import Dungeon from "./prisha-eee-TeMuehXVXno-unsplash.jpg"
import {Link} from "react-router-dom"

function Landing(){
return(
<div>

    <Row>
    {/* <div className="col s12 m7"> */}
    <Col size= "s12 m6">
      <div className="card blue-grey darken-1 center-align">
        <div className="card-image">
          <img src={Dungeon} alt="Monochrome Red color-shift of a series of doors in a dungeon" height="450" width="auto"/>
        </div>
        <div className="card-content amber-text">
          <h5>Sign up adventurer! Be ready to join our vast community on epic journeys! </h5>
        </div>
        <div className="card-action">
        <Link to ="/signup" className="waves-effect waves-light btn red accent">Sign Up </Link>
        </div>
      </div>
      </Col>
    {/* </div> */}
  

  
    {/* <div className="col s12 m7"> */}
    <Col size= "s12 m6">
      <div className="card blue-grey darken-1 center-align">
        <div className="card-image">
          <img src= {Creepy} alt="Dark silhouette of a man looking of a dungeon cell over a bright white background" height= "450" width="auto"/>
        </div>
        <div className="card-content amber-text">
          <h5>Welcome Back traveler! Ready to continue your heroes story?</h5>
        </div>
        <div className="card-action">
          <Link to ="/login"className="waves-effect waves-light btn red accent" >Log In</Link>
        </div>
      </div>
      </Col>
    {/* </div> */}
    </Row>

</div>
    
)
}

export default Landing;