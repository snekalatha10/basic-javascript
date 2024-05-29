import React, { useState } from "react";
import { Input } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import asset from "../../assets/images/asset.svg";
import mindgraph from "../../assets/images/mindgraph-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange=(e)=>{
    const inputValue=e.target.value;
    setEmail(inputValue);

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(inputValue) ? "" : "Invalid Email");
  };
  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    const isValidPassword = passwordRegex.test(inputValue);
  
    setPasswordError(
      isValidPassword
        ? ""
        : "Password must be at least 8 characters and include a number and a special character (!@#$%^&*)"
    );
  };
  
  const isLoginDisabled = !email || !password || emailError || passwordError;

  const handleLogin = () => {
    if (!isLoginDisabled) {
      navigate("/Otp");
    }else{
      setLoginError("Enter All Fields");
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
          <div className="text">
            <div className="layout">
              <label id="text">E-mail ID</label></div>
             <Input placeholder="Enter your E-mail ID" 
             value={email}
             onChange={handleEmailChange}
             prefix={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
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
            <div className="layout">
              <label id="text">  Password  </label></div>
              <Input.Password 
              placeholder="Enter your Password" 
              value={password}
              onChange={handlePasswordChange}
              prefix={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_200_2756)">
    <path d="M24 10.6667H22.6666V8.00004C22.6666 4.32004 19.68 1.33337 16 1.33337C12.32 1.33337 9.33331 4.32004 9.33331 8.00004V10.6667H7.99998C6.53331 10.6667 5.33331 11.8667 5.33331 13.3334V26.6667C5.33331 28.1334 6.53331 29.3334 7.99998 29.3334H24C25.4666 29.3334 26.6666 28.1334 26.6666 26.6667V13.3334C26.6666 11.8667 25.4666 10.6667 24 10.6667ZM16 22.6667C14.5333 22.6667 13.3333 21.4667 13.3333 20C13.3333 18.5334 14.5333 17.3334 16 17.3334C17.4666 17.3334 18.6666 18.5334 18.6666 20C18.6666 21.4667 17.4666 22.6667 16 22.6667ZM20.1333 10.6667H11.8666V8.00004C11.8666 5.72004 13.72 3.86671 16 3.86671C18.28 3.86671 20.1333 5.72004 20.1333 8.00004V10.6667Z" fill="#041724"/>
  </g>
  <defs>
    <clipPath id="clip0_200_2756">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>}/> 
<div className="error">{passwordError}</div>
            <div className="forget">
              <Link id="fp" to="/ForgetPassword">Forget Password?</Link>
            </div>
          </div>
          <div>
            <button type="submit" onClick={handleLogin} disabled={isLoginDisabled}>
              LOGIN
            </button>
            <div className="error">{loginError}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
