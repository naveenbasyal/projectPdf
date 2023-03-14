import React from "react";

const DeliveryHeader = () => {
  return (
    <>
      <div className="delivery_header row">
        <div className="container display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12">
          <span className="">Print on demand:</span><br />
          <span className="display-5 center">
            Convenient online document printing services
          </span>
        </div>
        <div className="col-lg-5 center col-sm-12">
          <img
            src="https://img.freepik.com/free-vector/printing-industry-flat-design_23-2148892783.jpg"
            className="img-fluid rounded headerImage p-2 shadow-out"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryHeader;
