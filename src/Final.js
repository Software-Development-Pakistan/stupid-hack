import React, { Component } from "react";
import "./Final.css";
import spaghetti from "./shits/shit.png";
import grapes from "./shits/grapes.png";
import mixedfruit from "./shits/mixedfruit.png";
import plain from "./shits/plain.png";
import audio from "./shits/trimmed-bakra.mp3"
const shits = [
  {
    name: 'Spaghetti',
    message: 'You ate some spicy spaghetti last night, dont worry, it will be over soon ;). ',
    image: spaghetti
  },
  {
    name: 'Healthy-Breakfast',
    message: 'You had a nice breakfast with egg banana. Continue eating healthy',
    image: mixedfruit
  },
  {
    name: 'Sour-Grapes',
    message: 'You ate grapes? are you on a diet? dont bother, we are all gonna die one day.',
    image: grapes
  },
  {
    name: 'Holy-Weird-Shit',
    message: 'You ate some weird stuff, our algorithms have no idea what this is, anyways have a nice day! .',
    image: plain
  },
]
class Final extends Component {
  constructor(props){
    super(props);
    const myArray = shits;
    this.state = {shit: myArray[Math.floor(Math.random() * myArray.length)]};

  }
  componentDidMount() {
    const tracking = window.tracking;

    var video = document.getElementById("video");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var tracker = new tracking.ObjectTracker("face");
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);
    tracking.track("#video", tracker, { camera: true });
    var base_image = new Image();
    base_image.src = this.state.shit.image;
    base_image.onload = function() {
      tracker.on("track", function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
          context.drawImage(
            base_image,
            rect.x,
            rect.y,
            rect.width,
            rect.height
          );
        });
      });
    };
  }
  render() {
    return (
      <div className="App">
        <div className="demo-frame">
          <div className="demo-container">

        <audio autoplay>
                <source src={audio} preload='auto'/>
          </audio>
            <video
              id="video"
              width="700"
              height="700"
              preload="true"
              autoPlay={true}
              loop
              muted
            />
            <canvas id="canvas" width="700" height="700" />
            <h1>You lying piece of shit, you ate {this.state.shit.name} in your last meal</h1>
            <p>{this.state.shit.message}</p>
            <div className="message">
            <p >This project is done by founders of <a href="http://www.softdevpk.com">Software Development Pakistan</a> We are trying to bring modern technology to Pakistan by promoting open source.. and other things.</p>
            <p>Promote us by sharing this with your friends </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Final;
