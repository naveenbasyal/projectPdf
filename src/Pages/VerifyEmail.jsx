import React, { useEffect } from "react";
import { RingLoader,PulseLoader } from "react-spinners";

const VerifyEmail = () => {
  return (
    <div className="container pop center" style={{ height: "70vh" }}>
      <div className="dim fs-3 p-1 center ">
        <RingLoader color="#5b4af1" size={100} />
        <h3 className="my-4 ">
          {" "}
          Verifying Email <span><PulseLoader color="#5b4af1" size={7}/></span>
        </h3>
      </div>
    </div>
  );
};

export default VerifyEmail;
