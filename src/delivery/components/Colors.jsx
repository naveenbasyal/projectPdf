// <<<<<<< HEAD
// import React,{useState} from "react";

// const SetupPrint = () => {
//   const [blackWhite, setBlackWhite] = useState(false);
//   const [coloured, setColoured] = useState(false);

//   const handleBlackWhite = () => {
//     setBlackWhite(true);
//     setColoured(false);
//   };
//   const handleColoured = () => {
//     setBlackWhite(false);
//     setColoured(true);
//   };
// =======
import React, { useState } from "react";

const SetupPrint = () => {
  const [color, setColor] = useState('bw')
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Colors:</span>
        </div>
        <div className="col-lg-9 d-flex ">
          {/* <div className="col-lg-5 ">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={blackWhite}
                onChange={handleBlackWhite}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
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
                checked={coloured}
                onChange={handleColoured}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Coloured
              </label>
            </div>
          </div> */}
          <div className={
            color === 'bw' ? "bwBox active" : "bwBox"
          }
            title="Black and White"
            onClick={() => setColor('bw')}
          >

          </div>
          <div className={
            color === 'color' ? "colorBox active" : "colorBox"
          }

            title="Coloured"
            onClick={() => setColor('color')}
          >

          </div>
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
