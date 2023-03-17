import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex">
        <div className="navbar-brand d-inline-block fs-1 ls-2">
          <Link to="/" className="brand  stroke">
            <span className="rubber stroke ">F</span>
            <span className="rubber stroke ">I</span>
            <span className="rubber stroke ">L</span>
            <span className="rubber stroke ">E</span>
            <span className="rubber stroke ">D</span>
            <span className="rubber stroke ">E</span>
            <span className="rubber stroke ">S</span>
            <span className="rubber stroke ">K</span>
          </Link>
        </div>
        <div className="">
          <Link to="/tools" className="links" title="Tools">
            <i class="fa-regular stroke p-2 fa-screwdriver-wrench"></i>
          </Link>
          <Link to="/cart" className="links" title="Cart">
            <i class="fa-solid stroke p-2 fa-cart-shopping"></i>
          </Link>
          <Link to="/auth" className="links" title="auth">
            <i class="fas fa-sign-in-alt stroke p-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
