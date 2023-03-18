import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ scrollToTop }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    scrollToTop();
  };
  // const
  return (
    <>
      <div className="navbar d-flex shadow-out">
        <div className="navbar-brand d-inline-block fs-1 ls-2">
          <Link
            to="/"
            // onClick={scrollToTop}
            className="brand stroke"
            onClick={() => handleLinkClick("home")}
          >
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
        <div className="nav-items">
          <Link
            to="/tools"
            className={`links ${
              activeLink === "tools"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            title="Tools"
            onClick={() => handleLinkClick("tools")}
          >
            <i class="fa-solid fa-screwdriver-wrench p-2"></i>
          </Link>
          <Link
            to="/cart"
            className={`links ${
              activeLink === "cart"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            title="Cart"
            onClick={() => handleLinkClick("cart")}
          >
            <i class="fa-solid  p-2 fa-cart-shopping"></i>
          </Link>
          <Link
            to="/auth"
            className={`links ${
              activeLink === "auth"
                ? "stroke shadow-in p-2 roundedBorder"
                : "stroke-grey"
            }`}
            title="auth"
            onClick={() => handleLinkClick("auth")}
          >
            <i class="fas fa-sign-in-alt  p-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
