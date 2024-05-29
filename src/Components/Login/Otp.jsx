import React, { useState } from "react";
import { Input } from "antd";
// import { useNavigate } from "react-router-dom";
import "./Login.css"; 
import asset from "../../assets/images/asset.svg";
import mindgraph from "../../assets/images/mindgraph-logo.png";

const Otp = () => {
  const [otp, setOTP] = useState("");
  const [otpError, setOTPError] = useState("");

  const handleOTPChange = (e) => {
    const inputValue = e.target.value;
    setOTP(inputValue);
  };

  const handleVerifyOTP = () => {
    if (otp === "") {
      setOTPError("Please enter the OTP");
    }
    else{
        // navigate("/Dashboard");
    }
  };

  return (
    <div className="form">
      <form className="innerform">
        <div className="left-section">
          <img src={asset} alt="logo" />
          <div className="left-text">
            <center>
              Empower Your Team, Elevate Your Business: Streamlining Success with
              Efficient Asset Management
            </center>
          </div>
        </div>
        <div className="right-section">
          <img src={mindgraph} alt="mindgraph" />
          <h3>Good to See you again</h3>
    <div className="otp-form">
      <h3>Enter your OTP</h3>
      <div className="text">
        <Input
          placeholder="Enter your OTP"
          value={otp}
          onChange={handleOTPChange}
        />
        <div className="error">{otpError}</div>
      </div>
      <div>
        <button type="submit" onClick={handleVerifyOTP}> VERIFY OTP </button>
      </div>
    </div>
    </div>
    </form>
    </div>
  );
};

export default Otp;
