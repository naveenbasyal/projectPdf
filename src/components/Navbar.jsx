import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex">
       
        <div className="nav-links">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/tools">
            Tools
          </Link>
          <Link className="links" to="/delivery">
            Delivery
          </Link>
          <Link to="/cart" className="links">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
