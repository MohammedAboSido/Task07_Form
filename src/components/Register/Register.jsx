import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import backImg from "../../assets/images/arrow_back_icon.png";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Separator from "../../components/Separatore/Separator";
import PasswordStrength from "./../PasswordStrength/PasswordStrength";
import "./style.css";
const defaults = {
  name: "",
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

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    check: false,
    degree: "",
    title: "",
  };

  schema = yup.object().shape({
    name: yup
      .string()
      .min(6)
      .max(16)
      .required()
      .matches(/^[a-z]+$/),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
    check: yup.boolean().oneOf([true]).required(),
  });
  handelChange = (e) => {
    const { id, value, checked } = e.target;
    this.setState((prev) => ({ ...prev, [id]: value, check: checked }));
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };
    if (id === "password") {
      strengthChecks.length = value.length <= 9 ? true : false;
      strengthChecks.hasUpperCase = /[A-Z]+/.test(value);
      strengthChecks.hasLowerCase = /[a-z]+/.test(value);
      strengthChecks.hasDigit = /[0-9]+/.test(value);
      strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(value);

      if (
        !strengthChecks.length &&
        strengthChecks.hasDigit &&
        strengthChecks.hasUpperCase &&
        strengthChecks.hasLowerCase &&
        strengthChecks.hasSpecialChar
      ) {
        this.setState((perv) => ({
          ...perv,
          degree: degrees.degFour[0],
          title: degrees.degFour[1],
        }));
      } else if (
        !strengthChecks.length &&
        strengthChecks.hasDigit &&
        !strengthChecks.hasLowerCase &&
        strengthChecks.hasUpperCase &&
        strengthChecks.hasSpecialChar
      ) {
        this.setState((perv) => ({
          ...perv,
          degree: degrees.degThree[0],
          title: degrees.degThree[1],
        }));
      } else if (
        !strengthChecks.length &&
        strengthChecks.hasDigit &&
        !strengthChecks.hasLowerCase &&
        (strengthChecks.hasUpperCase || strengthChecks.hasSpecialChar)
      ) {
        this.setState((perv) => ({
          ...perv,
          degree: degrees.degTwo[0],
          title: degrees.degTwo[1],
        }));
      } else if (
        strengthChecks.length &&
        strengthChecks.hasDigit &&
        !strengthChecks.hasUpperCase &&
        !strengthChecks.hasLowerCase &&
        !strengthChecks.hasSpecialChar
      ) {
        this.setState((perv) => ({
          ...perv,
          degree: degrees.degOne[0],
          title: degrees.degOne[1],
        }));
      } else if (
        !strengthChecks.length &&
        strengthChecks.hasDigit &&
        !strengthChecks.hasUpperCase &&
        strengthChecks.hasLowerCase &&
        strengthChecks.hasSpecialChar
      ) {
        this.setState((perv) => ({
          ...perv,
          degree: degrees.degTwo[0],
          title: degrees.degTwo[1],
        }));
      } else if (value.length === 0) {
        this.setState((perv) => ({
          ...perv,
          degree: "",
          title: "",
        }));
      }
    }
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          repeatPassword: this.state.repeatPassword,
          check: this.state.check,
        },
        { abortEarly: false }
      )
      .then(() => {
        this.setState((prev) => ({ ...prev, ...defaults }));
      })
      .catch((e) => console.log(e.errors));
  };
  render() {
    return (
      <div className="registerWrapper">
        <div className="registerBack">
          <Link to="/login" className="registerBackLink">
            <img src={backImg} alt="" className="registerBackImg" />
            <span className="registerBackTitle">Back</span>
          </Link>
        </div>
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
              placeholder="Enter Your Name"
              type="text"
              label="Name"
              id="name"
              value={this.state.name}
              isRequired={true}
              handelChange={this.handelChange}
            />
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
          <Link to="/login">
            <Button title="login" type="button" toggle />
          </Link>
        </div>
      </div>
    );
  }
}
export default Register;
