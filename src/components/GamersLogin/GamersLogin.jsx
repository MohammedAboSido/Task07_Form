import React, { Component } from "react";
import blueLogo from "../../assets/images/blue-logo.png";
import grayComa from "../../assets/images/grey-coma-icon.png";
import loginImg from "../../assets/images/register-image.png";
import "./style.css";
class GamersLogin extends Component {
  render() {
    return (
      <div className="gamersLoginWrapper">
        <div className="gamersLoginContainer">
          <img
            src={blueLogo}
            alt="blueLogo"
            className="gamersLoginContainerImg"
          />
          <div className="gamersLoginDescWrapper">
            <img src={grayComa} alt="blueComa" className="gamersLoginDescImg" />
            <p className="gamersLoginDesc">
              I always observe the people who pass by when I ride an escalator.
              I'll never see most of them again, so I imagine a lot of things
              about their lives... about the day ahead of them.
            </p>
          </div>
          <div className="gamersLoginPerson">
            <span className="gamersLoginPersonName">Hideo Kojima</span>
            <img className="gamersLoginPersonImg" src={loginImg} alt="shape1" />
          </div>
        </div>
      </div>
    );
  }
}

export default GamersLogin;
