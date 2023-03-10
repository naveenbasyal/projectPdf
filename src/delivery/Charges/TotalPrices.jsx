import React from "react";
import { Link } from "react-router-dom";

const TotalPrices = () => {
  return (
    <>
      {" "}
      <section className="container  my-5 pop py-4 bg ">
        <div className="container my-5 ">
          <h3 className="center">Total Price</h3>
          <span className="center fs-5">Rs.40</span>
          <div className="my-5">
            <h4 className="dim">Any Instructions ?</h4>
            <input
              className="instruction pop py-3"
              type="text"
              placeholder="Leave a message here"
            />
          </div>
          <button className="btn btn-primary">
            <Link to="/cart" className="text-white add2cart">
              Add to Cart
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default TotalPrices;
