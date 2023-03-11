import React from "react";

const SetupPrint = () => {
  return (
    <>
      <div className="setup_print my-5">
        <h4 className="dim fw-bold"> Setup Print</h4>
        <p className="">
          Choose the number of copies you want to print and the paper size and
          sides you want to print on.
        </p>
        <div className="container">
          <label className=" my-2 fw-bold dim">No of Copies</label>
          <input type="number" className="form-control" />
        </div>
        <div className="container my-2">
          <label className="my-2 dim fw-bold">Paper Size</label>
          <select className="form-select">
            <option defaultValue value="A4">
              A4
            </option>
            <option value="A3">A3</option>
            <option value="A2">A2</option>
            <option value="A1">A1</option>
            <option value="A0">A0</option>
          </select>
        </div>
        <div className="container">
          <label className="my-2 dim fw-bold">Paper Sides *</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios5"
              value="single side"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios5">
              Single Side
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios6"
              value="both side"
            />
            <label className="form-check-label" htmlFor="exampleRadios6">
              Both Side
            </label>
          </div>
        </div>
      </div>
      <hr className="hr hr-blurry" />
    </>
  );
};

export default SetupPrint;
