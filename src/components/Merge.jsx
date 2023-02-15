import PDFMerger from "pdf-merger-js/browser";
import React, { useEffect, useState } from "react";

const Merger = () => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [files, setFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
  };

  useEffect(() => {
    const render = async () => {
      const merger = new PDFMerger();

      for (const file of files) {
        await merger.add(file);
      }

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      return setMergedPdfUrl(url);
    };

    render().catch((err) => {
      throw err;
    });

    () => setMergedPdfUrl({});
  }, [files, setMergedPdfUrl]);

  return (
    <>
      <input type="file" onChange={handleFileInputChange} multiple />
      <div>
        {files.length === 0 ? (
          <p>Please select PDF files to merge.</p>
        ) : (
          <iframe
            height={1000}
            src={`${mergedPdfUrl}`}
            title="pdf-viewer"
            width="100%"
          ></iframe>
        )}
      </div>
    </>
  );
};
export default Merger;
