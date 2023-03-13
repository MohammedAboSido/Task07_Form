import React from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
function Routes() {
  const router = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    {
      path: "*",
      element: <h1 style={{ color: "red" }}>Page Not Found 404 </h1>,
    },
  ]);
  return <>{router}</>;
}

export default Routes;
