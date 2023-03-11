import React, { Component } from "react";
import "./style.css";
class PasswordStrength extends Component {
  render() {
    const { degree, title } = this.props;
    return (
      <>
        <div className="passwordStrengthWrapper">
          <div
            className={
              degree ? `passwordStrengthLine ${degree}` : "passwordStrengthLine"
            }
          ></div>
          <span
            className={
              degree
                ? `passwordStrengthTitle ${degree}`
                : "passwordStrengthTitle"
            }
          >
            {title}
          </span>
        </div>
      </>
    );
  }
}

export default PasswordStrength;
