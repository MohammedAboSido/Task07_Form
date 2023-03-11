import React, { Component } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Separator from "../../components/Separatore/Separator";
import "./style.css";
const defaults = {
  email: "",
  password: "",
  repeatPassword: "",
  check: false,
};
class Register extends Component {
  state = {
    email: "",
    password: "",
    repeatPassword: "",
    check: false,
  };
  handelChange = (e) => {
    const { id, value, checked } = e.target;
    this.setState((prev) => ({ ...prev, [id]: value, check: checked }));
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
