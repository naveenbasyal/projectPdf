import React from "react";

const Colors = () => {
  return (
    <>
      <div className="colors  my-5">
        <h4 className=" dim "> Colors</h4>
        <p className="container">
          Choose the color of your printout. If you are printing a black and
          white document, you can choose the color of the paper.
        </p>
        <div className="container d-flex">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />

          <label className="mx-1 my-1"> All Pages Black & White</label>
        </div>
        <div className="container">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="mx-1 my-1"> All Pages Color</label>
        </div>
        <div className="container d-flex">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />

          <label className="mx-1 my-1">
            Images Coloured and Text Black & White
          </label>
        </div>
      </div>
      <hr class="hr hr-blurry" />
    </>
  );
};

export default Colors;
