import React, { useState } from "react";
import BindingCharges from "./Charges/BindingCharges";
import PaperCharges from "./Charges/PrintingCharges";
import TotalPrices from "./Charges/TotalPrices";
import { Link } from "react-router-dom";
import Bind from "./components/Bind";
import Colors from "./components/Colors";
import DeliveryHeader from "./components/DeliveryHeader";
import SetupPrint from "./components/SetupPrint";
import "./delivery.css";

const Delivery = () => {
  const [selectedFiles, setSelectedFiles] = useState({});
  const [totalFiles, setTotalFiles] = useState(0);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles({}); // reset purana file ka info
    setTotalFiles(fileArray.length); // set total files
    fileArray.forEach((file) => {
      if (!file.name.endsWith(".pdf")) {
        // check if file is not a PDF
        setSelectedFiles({});
        setTotalFiles(0);
        setError("Please upload only PDF files"); //  error message
        return;
      }
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const bufferArray = e.target.result;
        const uint8Array = new Uint8Array(bufferArray);
        const pdfDoc = pdfjsLib.getDocument({ data: uint8Array });
        pdfDoc.promise.then((pdf) => {
          const pages = pdf._pdfInfo.numPages; // get number of pages
          pdf.getPage(1).then((page) => {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement("canvas");
            const canvasContext = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
              canvasContext,
              viewport,
            };
            page.render(renderContext).promise.then(() => {
              const imageDataUri = canvas.toDataURL();
              setSelectedFiles((prev) => {
                return { ...prev, [file.name]: { pages, imageDataUri } }; // add file name, number of pages, and image data URI to state
              });
            });
          });
        });
      };
    });
  };
  //  ----------- Delete the selected File-------------
  const handleDeleteFile = (name) => {
    const newFiles = { ...selectedFiles };
    delete newFiles[name];
    setSelectedFiles(newFiles);
    setTotalFiles(totalFiles - 1);
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
                className="form-control form-control-lg choosefile shadow-in"
                id="formFileLg"
                type="file"
                onChange={handleFileChange} // call handleFileChange on file selection
              />
              {error && (
                <div className="container py-5">
                  <span className="py-2 text-danger">{error} </span><br />
                  <Link to='/tools' className="dim">Convert to pdf ?</Link>
                </div>
              )}

              {/* Total Files Selected */}
              <div className="container my-4">
                <span className="dim fs-5 ">
                  Total Files Selected: {totalFiles}
                </span>
              </div>
              {/* ------------Main Content-------- */}
              {Object.keys(selectedFiles).length === 0 ? (
                <div className="container my-5 center py-5">
                  <span className="fs-3 py-5 text-danger">
                    {/* Please choose a file   */}
                  </span>
                </div>
              ) : (
                <div>
                  {Object.entries(selectedFiles).map(([name, file]) => (
                    <div>
                      <div key={name} className="my-5 row">
                        <div className="col-lg-3 center">
                          <img
                            src={file.imageDataUri}
                            className="img-fluid pdfImg shadow-out p-1"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-7 py-3">
                          <h4 className="dim fs-5">
                            {name} (Pages: {file.pages})
                          </h4>
                          <Bind />
                          <SetupPrint />
                          <Colors />
                        </div>
                        <div className="col-lg-2">
                          <button className="btn text-danger deleteicon px-2 center shadow-out">
                            <i
                              className="fa fa-trash "
                              aria-hidden="true"
                              onClick={() => handleDeleteFile(name)}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <hr className="hr hr-blurry" />
                    </div>
                  ))}
                </div>
              )}
            </div>
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
