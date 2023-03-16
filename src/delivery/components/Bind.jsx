import React from "react";

const Bind = () => {
  return (
    <>
      <div className="d-flex my-3 row bind">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Bindings:</span>
        </div>
        <div className="col-lg-9 d-flex">
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Spiral Binding
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
                Plastic Cover
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hr hr-blurry" /> */}
    </>
  );
};

export default Bind;
