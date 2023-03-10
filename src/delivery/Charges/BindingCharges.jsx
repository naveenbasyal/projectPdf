import React from "react";

const BindingCharges = () => {
  return (
    <>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col" className="fw-bold dim">
              Binding
            </th>
            <th scope="col" className="dim">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiral Binding</td>
            <td>₹40.00</td>
          </tr>
          <tr>
            <td> Plastic Cover</td>
            <td>₹10.00</td>
          </tr>
          <tr>
            <td> Staples only</td>
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
