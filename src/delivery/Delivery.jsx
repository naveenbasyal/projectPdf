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
  const [copies, setCopies] = useState(1);
  const [fileUrl, setFileUrl] = useState("");
  const [ShowPdf, setShowPdf] = useState(false);
  
  const handleFileChange = (e) => {
    const files = e.target.files;
    const url = e.target.files[0]; //----Url of file
    const fileUrl = URL.createObjectURL(url);
    setFileUrl(fileUrl); //   file url
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

      // console.log(file);
    });
  };
  //  ----------- Delete the selected File-------------
  const handleDeleteFile = (name) => {
    const newFiles = { ...selectedFiles };
    delete newFiles[name];
    setSelectedFiles(newFiles);
    setTotalFiles(totalFiles - 1);
  };
  const handlePlusButton = () => {
    setCopies(copies + 1);
  };
  const handleMinusButton = () => {
    if (copies > 1) {
      setCopies(copies - 1);
    }
  };
  const showPdf = () => {
    if (!ShowPdf) {
      setShowPdf(true);
    }
  };

  return (
    <>
      <section>
        {/* --------header---------- */}
        <DeliveryHeader />
        {/* ------------Main Delivery section---------- */}
        <div className="row mx-5 pop main_delivery_section">
          <h2 className="my-4 fw-bold dim px-5 ms-3">Order Document</h2>
          {/* -------Choose File----------- */}
          <div className="col-lg-8 col-sm-12 px-5 Options">
            <div className="">
              <input
                multiple
                className="form-control form-control-lg choosefile shadow-in"
                id="formFileLg"
                type="file"
                onChange={handleFileChange}
              />
              {error && (
                <div className="container center py-5">
                  <span className="p-2 text-danger shadow-in">{error} </span>
                  <br />
                  <Link to="/tools" className="dim">
                    Convert to pdf ?
                  </Link>
                </div>
              )}

              {/* Total Files Selected */}
              <div className="container my-4">
                <span className="dim fs-5 ">
                  Total Files Selected: {totalFiles}
                </span>
              </div>
              {/* ------------------------Main Content------------------- */}
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
                          {/* ------Thumbnail---------- */}
                          <img
                            src={file.imageDataUri}
                            className="img-fluid pdfImg shadow-out p-1"
                            alt=""
                          />
                          {/* ---------Copies------ */}
                          <div className="copies d-flex">
                            <button
                              onClick={handleMinusButton}
                              className="center shadow-out "
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={copies}
                              onChange={(e) => setCopies(e.target.value)}
                              className="center shadow-in px-2 mx-2 form-control"
                            />
                            <button
                              onClick={handlePlusButton}
                              className=" shadow-out"
                            >
                              +
                            </button>
                          </div>
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
                          <button
                            className="dim mt-5 eye px-2 center shadow-out"
                            onClick={showPdf}
                          >
                            <i className="fa fa-eye" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      {ShowPdf && <iframe src={fileUrl} />}

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
