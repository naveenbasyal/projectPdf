import PDFMerger from "pdf-merger-js/browser";
import React, { useState } from "react";

const Merger = () => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [files, setFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
  };

  const handleMergeButtonClick = async () => {
    const merger = new PDFMerger();

    for (const file of files) {
      await merger.add(file);
    }

    const mergedPdf = await merger.saveAsBlob();
    const url = URL.createObjectURL(mergedPdf);

    setMergedPdfUrl(url);
  };

  return (
    <div className="container mt-5">
      <input
        className="form-control"
        type="file"
        onChange={handleFileInputChange}
        multiple
      />
      <button
        className="btn btn-primary my-3 fs-5"
        onClick={handleMergeButtonClick}
        disabled={files.length===0}
      >
        Merge
      </button>
      <div>
        {files.length === 0 ? (
          <p>
            Please select PDF files to merge and click on the "Merge" button.
          </p>
        ) : (
          <iframe
            height={1000}
            src={`${mergedPdfUrl}`}
            title="pdf-viewer"
            width="100%"
          ></iframe>
        )}
      </div>
    </div>
  );
};
export default Merger;
