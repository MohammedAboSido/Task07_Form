import React, { Component } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Separator from "../../components/Separatore/Separator";
import "./style.css";
class Register extends Component {
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
        <form className="registerForm">
          <div className="registerInputs">
            <Input
              placeholder="Enter email address"
              type="email"
              label="Email Address"
              id="email"
              // value=""
              isRequired={true}
              handelChange={this.handelChange}
            />
            <Input
              placeholder="Password"
              type="password"
              label="Create password"
              id="password"
              // value=""
              isRequired={true}
              handelChange={this.handelChange}
            />
            <Input
              placeholder="Repeat password"
              type="password"
              label="Repeat password"
              id="repeatPassword"
              // value=""
              isRequired={true}
              handelChange={this.handelChange}
            />
          </div>
          <div className="registerAgree">
            <input type="checkbox" id="check" required />
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
