import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="main-div">
      <img src="myPhoto.JPG" className="myImage"></img>
      <div className="intro-div">
        <h3>M. Usama Naeem</h3>
        <h5>Web Developer</h5>
        <p>(usamanaeem43@gmail.com)</p>
      </div>
      <div className="button-div">
        <button className="btn btn-primary">Email Me</button>
        <button id="myUpwork" className="btn btn-primary">
          My Upwork
        </button>
        <button id="myFiverr" className="btn btn-primary">
          My Fiverr
        </button>
      </div>
      <h5>About</h5>
      <p>
        I am an Electrical Engineer turned Programmer. For more than 4 Years, I
        have been developing Software for Small to Medium Level Businesses using
        VBA, AppScript and Javascript. Currently I am Learning React so I can
        create Scalable, High Performance Websites
      </p>
      <h5>Interests</h5>
      <p>Programming, History, Music, Seasons and Jogging</p>
    </div>
  );
};

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
