import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
const LoginSignUp = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleSignUp = () => {
    setSignUp(true);
    setSignIn(false);
    console.log("up");
  };
  const handleSignIn = () => {
    setSignUp(false);
    setSignIn(true);
  };

  return (
    <div className="auth my-5 pop">
      <div
        className={`container ${signUp ? "right-panel-active" : ""}  `}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form >
            <h1 className="fs-3">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              className="form-control pop shadow-in input "
              type="text"
              placeholder="Name"
            />
            <input
              className="form-control pop shadow-in input "
              type="email"
              placeholder="Email"
            />
            <input
              className="form-control pop shadow-in input "
              type="password"
              placeholder="Password"
            />
            <button className="shadow-out dim my-2">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              className="form-control pop shadow-in input"
              type="email"
              placeholder="Email"
            />
            <input
              className="form-control pop shadow-in input"
              type="password"
              placeholder="Password"
            />
            <Link href="#">Forgot your password?</Link>
            <button className="shadow-out dim">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={handleSignIn} className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={handleSignUp} className="ghost " id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
