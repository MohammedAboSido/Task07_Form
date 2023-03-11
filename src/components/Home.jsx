import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
// import RegisterPage from "../pages/RegisterPage/RegisterPage";
class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <RegisterPage /> */}
        <LoginPage />
      </div>
    );
  }
}
export default Home;
