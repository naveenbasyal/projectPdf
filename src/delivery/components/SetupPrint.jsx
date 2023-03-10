import React from "react";

const SetupPrint = () => {
  return (
    <>
      <div className="setup_print my-5">
        <h4 className=" dim"> Setup Print</h4>
        <p className="container ">
          Choose the number of copies you want to print and the paper size and
          sides you want to print on.
        </p>
        <div className="container">
          <label className="mx-2 my-2">Number of Copies</label>
          <input type="number" />
        </div>
        <div className="container">
          <label className="mx-2 my-2">Paper Size</label>
          <select>
            <option value="A4">A4</option>
            <option value="A3">A3</option>
            <option value="A2">A2</option>
            <option value="A1">A1</option>
            <option value="A0">A0</option>
          </select>
        </div>
        <div className="container">
          <label className="mx-2 my-2">Paper Sides *</label>
          <div className="container">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="mx-2">Single Side</label>
          </div>
          <div className="container d-flex">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="mx-2">Both Side</label>
          </div>
        </div>
      </div>
      <hr class="hr hr-blurry" />
    </>
  );
};

export default SetupPrint;
