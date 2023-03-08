import React, { Component } from "react";
import blueComa from "../../assets/images/blue-coma-icon.png";
import shape1 from "../../assets/images/shape1.png";
import whiteLogo from "../../assets/images/white_logo.png";
import "./style.css";
class Gamers extends Component {
  render() {
    return (
      <div className="gamersWrapper">
        <div className="gamersContainer">
          <img src={whiteLogo} alt="whiteLogo" className="gamersContainerImg" />
          <div className="gamersDescWrapper">
            <img src={blueComa} alt="blueComa" className="gamersDescImg" />
            <p className="gamersDesc">
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
          </div>
          <div className="gamersPerson">
            <span className="gamersPersonName">Hideo Kojima</span>
            <img className="gamersPersonImg" src={shape1} alt="shape1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gamers;
