import React from "react";

const Bind = () => {
  return (
    <>
      <div className="bind  my-5">
        <h4 className="fw-bold dim">Bind Document</h4>
        <p>
          Build an easy to read, long lasting, impressive bound book from your
          pdf file with these binding options.
        </p>
        <div className="container">
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="spiral bind"
            />
            <label className="form-check-label" for="exampleRadios1">
              Spiral Bind
            </label>
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="plastic cover"
            />
            <label className="form-check-label" for="exampleRadios2">
              Plastic Cover
            </label>
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="Staples only"
            />
            <label className="form-check-label" for="exampleRadios3">
              Staples Only
            </label>
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios4"
              value="Loose"
            />
            <label className="form-check-label" for="exampleRadios4">
              Loose Pages
            </label>
          </div>
        </div>
      </div>
      <hr className="hr hr-blurry" />
    </>
  );
};

export default Bind;
