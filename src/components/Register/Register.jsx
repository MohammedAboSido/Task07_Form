import React, { Component } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Separator from "../../components/Separatore/Separator";
import PasswordStrength from "./../PasswordStrength/PasswordStrength";
import "./style.css";
const defaults = {
  email: "",
  password: "",
  repeatPassword: "",
  check: false,
  degree: "",
  title: "",
};
const degrees = {
  degOne: ["one", "Weak"],
  degTwo: ["two", "Medium"],
  degThree: ["three", "Strong"],
  degFour: ["four", "Very Strong"],
};
const medium1 = /^(?=.*[0-9])(?=.*[A-Z])(?!.*[a-z])[A-Za-z0-9]+$/;
const medium2 = /^(?=.*[0-9])(?=.*\W)(?!.*[a-z])[\w\W]+$/;
const strong = /^(?=.*[A-Z])(?=.*\W)(?!.*[a-z]).*$/;
const vStrong =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]+$/;
class Register extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    check: false,
    degree: "",
    title: "",
  };
  handelChange = (e) => {
    const { id, value, checked } = e.target;
    this.setState((prev) => ({ ...prev, [id]: value, check: checked }));

    this.setState((prev) => {
      if (prev.password.length === 0) {
        return {
          ...prev,
          degree: "",
          title: "",
        };
      }
      if (prev.password.length <= 9) {
        return {
          ...prev,
          degree: degrees.degOne[0],
          title: degrees.degOne[1],
        };
      } else {
        let newState = {};
        if (medium1.test(prev.password) || medium2.test(prev.password)) {
          newState = {
            ...prev,
            degree: degrees.degTwo[0],
            title: degrees.degTwo[1],
          };
        }
        if (strong.test(prev.password)) {
          newState = {
            ...prev,
            degree: degrees.degThree[0],
            title: degrees.degThree[1],
          };
        }
        if (vStrong.test(prev.password)) {
          newState = {
            ...prev,
            degree: degrees.degFour[0],
            title: degrees.degFour[1],
          };
        }
        return newState;
      }
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({ ...prev, ...defaults }));
    console.log(this.state);
  };
  render() {
    return (
      <div className="registerWrapper">
        <div className="registerDetails">
          <h2 className="registerTitle">Register Individual Account!</h2>
          <span className="registerDescription">
            For the purpose of gamers regulation, your details are required.
          </span>
        </div>
        <Separator />
        <form className="registerForm" onSubmit={this.handelSubmit}>
          <div className="registerInputs">
            <Input
              placeholder="Enter email address"
              type="email"
              label="Email Address"
              id="email"
              value={this.state.email}
              isRequired={true}
              handelChange={this.handelChange}
            />
            <Input
              placeholder="Password"
              type="password"
              label="Create password"
              id="password"
              value={this.state.password}
              isRequired={true}
              handelChange={this.handelChange}
            />
            <PasswordStrength
              title={this.state.title}
              degree={this.state.degree}
            />
            <Input
              placeholder="Repeat password"
              type="password"
              label="Repeat password"
              id="repeatPassword"
              value={this.state.repeatPassword}
              isRequired={true}
              handelChange={this.handelChange}
            />
          </div>
          <div className="registerAgree">
            <input
              type="checkbox"
              id="check"
              required
              onChange={this.handelChange}
              defaultChecked={this.state.check}
            />
            <label htmlFor="check" className="checkLabel">
              I agree to terms & conditions
            </label>
          </div>
          <div className="submitBtn">
            <Button title="Register Account" type="submit" />
          </div>
        </form>
        <Separator title="or" />
        <div className="loginBtn">
          <Button title="login" type="button" toggle />
        </div>
      </div>
    );
  }
}
export default Register;
