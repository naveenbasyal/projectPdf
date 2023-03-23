import React from "react";
import "../styles/Auth.css";

const ForgotPassword = () => {
  return (
    <div className="container my-5 center forgotPassword">
      <div className="row d-flex justify-content-around my-5">
        <div className="col-lg-4">
          <div className="">
            <img src="/forgot_password.png" alt="img" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="">
            <div>
              <h1 className="text-start stroke display-3">Forgot</h1>
              <h1 className="text-start stroke display-3">Password ?</h1>
            </div>
            <div>
              <small className="pop text-muted">
                You will receive a link to create a new password via email.
              </small>
            </div>

            <form>
              <div className="form-group my-3">
                <label htmlFor="email" className="dim pop">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control my-2 px-3 py-2 bg-color pop"
                  id="email"
                  placeholder="john@example.com"
                  autoComplete="off"
                />
               
              </div>
              <button type="submit" className="shadow-btn shadow-out dim pop">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
