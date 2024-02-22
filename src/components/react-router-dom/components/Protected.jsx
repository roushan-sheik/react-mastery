import React from "react";
import { Navigate } from "react-router-dom";
// const isLoggedIn = false;
const isLoggedIn = true;
const Protected = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace></Navigate>;
  } else {
    return children;
  }
};

export default Protected;
