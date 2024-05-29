import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import ForgetPassword from "../Components/Login/ForgetPassword";
import Otp from "../Components/Login/Otp";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Routing to the login page */}
      <Route path="/ForgetPassword" element={<ForgetPassword />} /> {/* Routing to the forget password page */}
      <Route path="/Otp" element={<Otp />} /> {/* Routing to the Otp page */}
      {/* <Route path="/Dashboard" element={<Dashboard />} />  */}
      

    </Routes>
  );
};

export default AppRoutes;
