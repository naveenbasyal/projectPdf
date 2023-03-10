import React from "react";

const Colors = () => {
  return (
    <>
      <div className="colors  my-5">
        <h4 className="dim fw-bold"> Colors</h4>
        <p className="">
          Choose the color of your printout. If you are printing a black and
          white document, you can choose the color of the paper.
        </p>
        <div className="container">
          <div className="my-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Black and white"
            />
            <label className="mx-2" for="flexRadioDefault1">
              Black & White
            </label>
          </div>
          <div className=" my-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Coloured"
            />
            <label className="mx-2" for="flexRadioDefault2">
              Coloured
            </label>
          </div>
          <div className=" my-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              value="imagesColouredonly"
            />
            <label className="mx-2" for="flexRadioDefault3">
              Only Images Coloured
            </label>
          </div>
        </div>
      </div>

      <hr class="hr hr-blurry" />
    </>
  );
};

export default Colors;
