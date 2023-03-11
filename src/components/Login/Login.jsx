import React, { Component } from "react";
import githubImg from "../../assets/images/github.png";
import googleImg from "../../assets/images/google.png";
import linkedinImg from "../../assets/images/linkedin.png";
import twitterImg from "../../assets/images/twitter.png";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Separator from "../Separatore/Separator";
import "./style.css";
const defaults = {
  email: "",
  password: "",
};
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handelChange = (e) => {
    const { id, value } = e.target;
    this.setState((prev) => ({ ...prev, [id]: value }));
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({ ...prev, ...defaults }));
    console.log(this.state);
  };
  render() {
    return (
      <div className="loginWrapper">
        <div className="loginDetails">
          <h2 className="loginTitle">Join the game!</h2>
          <span className="loginDescription">
            Go inside the best gamers social network!
          </span>
        </div>
        <div className="loginSocial">
          <img src={googleImg} alt="" />
          <img src={twitterImg} alt="" />
          <img src={linkedinImg} alt="" />
          <img src={githubImg} alt="" />
        </div>
        <Separator title="Or" />
        <form className="loginForm" onSubmit={this.handelSubmit}>
          <div className="loginInputs">
            <Input
              placeholder="Enter email address"
              type="email"
              label="Your email"
              id="email"
              value={this.state.email}
              isRequired={false}
              handelChange={this.handelChange}
            />
            <Input
              placeholder="Password"
              type="password"
              label="Enter your password"
              id="password"
              value={this.state.password}
              isRequired={false}
              handelChange={this.handelChange}
            />
          </div>
          <div className="submitBtn">
            <Button title="Login" type="submit" />
          </div>
        </form>
        <div className="loginAgree">
          <label htmlFor="check" className="checkLabel">
            Don't have an account? <a href="/#">Register</a>
          </label>
        </div>
      </div>
    );
  }
}
export default Login;
