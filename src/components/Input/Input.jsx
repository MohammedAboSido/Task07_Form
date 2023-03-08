import React, { Component } from "react";
import "./style.css";
class Input extends Component {
  render() {
    const { placeholder, type, label, id, value, handelChange ,isRequired} = this.props;
    return (
      <div className="inputWrapper">
        <label className="inputLabel" htmlFor={id}>
          {isRequired ? `${label}*` : label}
        </label>
        <input
          required={isRequired}
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={(e) => handelChange(e)}
          value={value}
          className="input"
        />
      </div>
    );
  }
}

export default Input;
