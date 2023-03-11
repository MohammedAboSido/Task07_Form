import React, { Component } from "react";
import GamersLogin from "../../components/GamersLogin";
import Login from "./../../components/Login";
import "./style.css";
class LoginPage extends Component {
  render() {
    return (
      <div className="loginPageWrapper">
        <GamersLogin />
        <Login />
      </div>
    );
  }
}

export default LoginPage;
