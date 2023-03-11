import React, { useState } from "react";
import BindingCharges from "./Charges/BindingCharges";
import PaperCharges from "./Charges/PrintingCharges";
import TotalPrices from "./Charges/TotalPrices";
import Bind from "./components/Bind";
import Colors from "./components/Colors";
import DeliveryHeader from "./components/DeliveryHeader";
import SetupPrint from "./components/SetupPrint";
import "./delivery.css";

const Delivery = () => {
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles({}); // reset purana file ka info

    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const bufferArray = e.target.result;
        const uint8Array = new Uint8Array(bufferArray);
        const pdfDoc = pdfjsLib.getDocument({ data: uint8Array });
        pdfDoc.promise.then((pdf) => {
          const pages = pdf._pdfInfo.numPages; // get number of pages
          setSelectedFiles((prev) => {
            return { ...prev, [file.name]: pages }; // add file name and number of pages to state
          });
        });
      };
    });
  };

  return (
    <>
      <section>
        {/* --------header---------- */}
        <DeliveryHeader />
        {/* ------------Main Delivery section---------- */}
        <div className="row mx-5 pop main_delivery_section">
          <h2 className="my-4 fw-bold dim px-5">Order Document</h2>
          {/* -------Choose File----------- */}
          <div className="col-lg-8 col-sm-12 px-5 Options">
            <div className="">
              <input
                multiple
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
                onChange={handleFileChange} // call handleFileChange on file selection
              />
              {/* Show selected files and number of pages */}
              <div>
                {Object.entries(selectedFiles).map(([name, pages]) => (
                  <div key={name} className="m-3">
                    <span className="fw-bold pop m-2">File Name :</span> {name}
                    <br />
                    <span className="fw-bold pop m-2">No of pages :</span>{" "}
                    {pages}
                  </div>
                ))}
              </div>
            </div>
            <Bind />
            <SetupPrint />
            <Colors />
          </div>

          {/*  ----------- Prices Chart------------ */}
          <div className="col-lg-4 col-sm-12 jsf my-5 price_chart">
            <h2 className="text-center dim fw-bold pop">Prices Chart</h2>
            <BindingCharges />
            <PaperCharges />
          </div>
        </div>
      </section>
      {/* --------Total Prices------------ */}
      <TotalPrices />
    </>
  );
};

export default Delivery;
