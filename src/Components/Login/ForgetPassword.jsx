import React, { useState }from "react";
import { Input } from 'antd';
import { Link } from "react-router-dom";
import './Login.css';
import auth from "../../assets/images/auth.svg";
import mindgraph from "../../assets/images/mindgraph-logo.png";

const ForgetPassword = () => {
  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState("");

  const handleEmailChange=(e)=>{
    const inputValue=e.target.value;
    setEmail(inputValue);

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(inputValue) ? "" : "Invalid Email");
  };

    const handleSendRequest = () => {
       // API should be used to send the email
        console.log('Sending password change request to:', email);
    };

    return (
        <div className="form">
            <form className="innerform">
                <div className="left-section">
                    <img src={auth} alt="logo"/>
                </div>
                <div className="right-section">
                <img src={mindgraph} alt="mindgraph" />
          <h3>Good to See you again</h3>
                    <div className="text">
            <div className="layout">
              <label id="text">E-mail ID</label></div>
             <Input value={email}  onChange={handleEmailChange} 
             placeholder="Enter your E-mail ID" prefix={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_11_8)">
    <path d="M26.6667 5.33331H5.33335C3.86669 5.33331 2.68002 6.53331 2.68002 7.99998L2.66669 24C2.66669 25.4666 3.86669 26.6666 5.33335 26.6666H26.6667C28.1334 26.6666 29.3334 25.4666 29.3334 24V7.99998C29.3334 6.53331 28.1334 5.33331 26.6667 5.33331ZM26.6667 10.6666L16 17.3333L5.33335 10.6666V7.99998L16 14.6666L26.6667 7.99998V10.6666Z" fill="#041724"/>
  </g>
  <defs>
    <clipPath id="clip0_11_8">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>}/> 
<div className="error">{emailError}</div>
<div>
      <button type="button" onClick={handleSendRequest}>SEND PASSWORD CHANGE REQUEST</button>  
      {/* onclick is redirected to the login component */}
</div>
<div className="redirect">
    <Link id="fp" to="/Login">Back to Login Page</Link>
</div>
 </div>
</div>
</form>
</div>
    );
};

export default ForgetPassword;
