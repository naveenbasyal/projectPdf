import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Auth.css";
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
        id="container "
      >
        {/* ---------SignUP----------- */}
        <div className="form-container sign-up-container  ">
          <form className=" ">
            <h1 className="fs-4 stroke jsf p-1 ls-1">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social ">
                <i className="fab fa-facebook-f "></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g "></i>
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
        {/* ---------------SignIn---------- */}
        <div className="form-container sign-in-container col-sm-12">
          <form>
            <h1 className="stroke ls-1 jsf p-1">Sign in</h1>
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
            <button onClick={handleSignUp} className="signUp-1" id="signUp-1">
              Sign Up
            </button>
            <button className="shadow-out dim">Sign In</button>
          </form>
        </div>
        <div className="overlay-container col-sm-12">
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
