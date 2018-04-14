import React, { Component } from "react";
import heart from "./shits/heart.png";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOU ARE WHAT YOU EAT!</h1>
        <img src={heart} />
        <h2>THIS APP WILL TELL YOU IF YOU HAVE BEEN EATING HEALTHY BY USING STATE OF THE ART NEURAL NETWORKS AND FACE RECOGNITION TECHNOLOGIES.</h2>
        <br />
        <br />
        <div className="box">
          <h4>HOW OFTEN DO YOU EAT HEALTHY? Rate (1-10) </h4>
          <input type="text" />
          
          <h4>WHAT WAS THE LAST MEAL YOU HAD? </h4>
          <input type="text" />
          
          <a className="gobutton" href="/final" >GO! </a>
          <video
              id="video"
              width="700"
              height="700"
              preload="true"
              autoPlay={true}
              loop
              muted
              className="hiddenVideo"
            />
          <p>* PLEASE ALLOW CAMERA TO READ YOUR FACE</p>
        </div>
      </div>
    );
  }
}

export default Home;
