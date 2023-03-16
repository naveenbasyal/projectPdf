import React from "react";

const PaperCharges = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="dim">Printing</th>
            <th scope="col" className="dim">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Black and White per page (Single Side)</td>
            <td>₹1.50</td>
          </tr>
          <tr>
            <td>Black and White per page (Both Side)</td>
            <td>₹2.00</td>
          </tr>
          <tr>
            <td> Color printing per page(Single Side)</td>
            <td> ₹6.00</td>
          </tr>
          <tr>
            <td> Color printing per page(Both Side)</td>
            <td>₹10.00 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PaperCharges;
