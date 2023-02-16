import React from "react";
import ViewPdf from "./components/ViewPdf";
import Merge from "./components/Merge";

const App = () => {
  return (

    <div className='container'>

    <br></br>
    
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
          accept='
          application/pdf,
          application/x-pdf,
          application/vnd.ms-excel,
          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
          application/vnd.openxmlformats-officedocument.wordprocessingml.document,
          application/msword,
          application/vnd.ms-powerpoint,
          application/vnd.openxmlformats-officedocument.presentationml.presentation,
          application/vnd.oasis.opendocument.text,
          application/vnd.oasis.opendocument.spreadsheet,
          application/vnd.oasis.opendocument.presentation,
          application/vnd.oasis.opendocument.graphics,
          application/vnd.oasis.opendocument.chart,
          '
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>
      <br></br>
      <h4>View PDF</h4>
      <div className='pdf-container'>

        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>

    </div>
  )
}

export default App

  