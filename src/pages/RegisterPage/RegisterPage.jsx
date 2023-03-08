import React, { Component } from "react";
import Gamers from "../../components/Gamers/Gamers";
import Input from "../../components/Input/Input";
import "./style.css";
class RegisterPage extends Component {
    handelChange = (e)=>{
        console.log(e.target.value);
    }
  render() {
    return (
      <div>
        <Gamers />
        <Input
          placeholder="Enter email address"
          type="email"
          label="Email Address"
          id="email"
          // value=""
          isRequired={true}
          handelChange={this.handelChange}
        />
      </div>
    );
  }
}

export default RegisterPage;
