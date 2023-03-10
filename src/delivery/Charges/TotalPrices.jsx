import React from "react";
import { Link } from "react-router-dom";

const TotalPrices = () => {
  return (
    <div className="totalPrice my-5">
      <hr class="hr hr-blurry" />

      <div className="container my-5 ">
        <h2 className="dim pop fw-bold center">Total Price</h2>
        <h4 className="jsf fw-bold center my-3">Rs. 40</h4>

        <div className="instructions my-4">
          <span className="fw-bold my-3 dim pop float-start">
            Any Instructions ?
          </span>
          <input
            type="text"
            className="form-control pop"
            placeholder="Leave a message..."
          />
        </div>
        <div className="add_to_cart pop">
          <Link to="/cart" className="btn btn-primary">
            Add to Cart
          </Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TotalPrices;
