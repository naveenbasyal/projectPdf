import React from "react";

const SetupPrint = () => {
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Colors:</span>
        </div>
        <div className="col-lg-9 d-flex ">
          <div className="col-lg-5 ">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Black & White
              </label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Coloured
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
