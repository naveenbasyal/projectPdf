import React, { useState } from "react";

const SetupPrint = () => {
  const [singleSide, setSingleSide] = useState(false);
  const [bothside, setBothSide] = useState(false);

  const handleSingleChange = () => {
    setSingleSide(true);
    setBothSide(false);
  };
  const handleBothChange = () => {
    setSingleSide(false);
    setBothSide(true);
  };
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Setup:</span>
        </div>
        <div className="col-lg-9 d-flex ">
          <div className="col-lg-5 ">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={singleSide}
                onChange={handleSingleChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Single Side
              </label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                checked={bothside}
                onChange={handleBothChange}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Both Side
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
