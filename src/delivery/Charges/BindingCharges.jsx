import React from "react";

const BindingCharges = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Binding</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiral Bound Book</td>
            <td>₹40.00</td>
          </tr>
          <tr>
            <td> 3 Staples with Plastic Cover and Tape on Spine</td>
            <td>₹20.00</td>
          </tr>
          <tr>
            <td> 2 Staples on Left Edge</td>
            <td> ₹5.00</td>
          </tr>
          <tr>
            <td> Loose Leaf</td>
            <td>₹0.00 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BindingCharges;
