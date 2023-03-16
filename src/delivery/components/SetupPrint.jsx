import React from "react";
import { SiPowerpages } from 'react-icons/si'
import { FaFilePdf } from 'react-icons/fa'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { BsFillFileFill } from 'react-icons/bs'
const SetupPrint = () => {
  const [page, setPage] = React.useState('single')
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Page :</span>
        </div>
        <div className="col-lg-9 d-flex ">
          {/* <div className="col-lg-5 ">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Single Side
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
                Both Side
              </label>
            </div>
          </div> */}
          <div className={
            page === 'single' ? "pageBox active" : "pageBox"
          }
            title="Single Side"
            onClick={() => setPage('single')}
          >
            <BsFillFileFill />
          </div>
          <div className={
            page === 'both' ? "pageBox active" : "pageBox"
          }

            title="Both Side"
            onClick={() => setPage('both')}
          >
            <SiPowerpages />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
