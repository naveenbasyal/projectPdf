import { useState } from "react";
import { motion } from "framer-motion";
import { PDFDocument } from "pdf-lib";

export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();
  const [pdfPagesCount, setPdfPagesCount] = useState(0);

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  async function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);

    const pdfDoc = await PDFDocument.load(uint8array);
    setPdfPagesCount(pdfDoc.getPageCount());
  }

  async function removePdfPages() {
    const fromPage = parseInt(document.getElementById("fromPage").value);
    const toPage = parseInt(document.getElementById("toPage").value);

    if (fromPage && toPage && fromPage <= toPage && toPage <= pdfPagesCount) {
      const pdfSrcDoc = await PDFDocument.load(
        await fetch(pdfFileData).then((res) => res.arrayBuffer())
      );
      const pdfNewDoc = await PDFDocument.create();
      const excludePages = Array.from(
        { length: toPage - fromPage + 1 },
        (_, i) => fromPage + i - 1
      );
      const pages = await pdfNewDoc.copyPages(
        pdfSrcDoc,
        Array.from({ length: pdfPagesCount }, (_, i) => i).filter(
          (i) => !excludePages.includes(i)
        )
      );
      pages.forEach((page) => pdfNewDoc.addPage(page));
      const newPdf = await pdfNewDoc.save();
      const newPdfUrl = URL.createObjectURL(
        new Blob([newPdf], { type: "application/pdf" })
      );

      // Replace original PDF with extracted pages
      setPdfFileData(newPdfUrl);
      setPdfPagesCount(pages.length);
    } else {
      alert("Invalid page range");
    }
  }
  // jab user file select krega

  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      await renderPdf(pdfArrayBuffer);
    }
  };

  return (
    <div className="container center my-5 pop">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <h1 className="stroke ls-2 mx-4 center">Remove Pages from PDF</h1>
        <div className="d-flex my-5 justify-content-around center">
          <span className="dim fw-bold fs-5">
            Total Pages : {pdfPagesCount}
          </span>
          <label htmlFor="remove-pages" className="u-f-b">
            {pdfPagesCount == 0 ? "Upload Files" : "Upload More?"}
            <input
              type="file"
              className="form-control"
              id="remove-pages"
              accept=".pdf"
              onChange={onFileSelected}
            />
          </label>
        </div>
      </div>
      {pdfFileData && (
        <>
          <div className="col-lg-8  col-md-10 col-sm-12">
            <div className="my-5 d-flex  justify-content-around">
              <div className="d-flex center">
                <label htmlFor="fromPage" className="dim fs-5 mx-3">
                  Start page:
                </label>
                <input
                  style={{ width: "5rem" }}
                  className="center bg-color shadow-in px-2 mx-2 form-control"
                  type="number"
                  id="fromPage"
                  min="1"
                  max={pdfPagesCount}
                />
              </div>
              <div className="d-flex center">
                <label htmlFor="toPage" className="dim fs-5 mx-3">
                  End page:
                </label>
                <input
                  style={{ width: "5rem" }}
                  className="center bg-color shadow-in px-2 mx-2 form-control"
                  type="number"
                  id="toPage"
                  min="1"
                  max={pdfPagesCount}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="shadow-out shadow-btn dim my-5 p-2"
                onClick={removePdfPages}
              >
                Remove Pages
              </motion.button>
            </div>
          </div>
        </>
      )}
     
      <iframe
        height={700}
        src={pdfFileData}
        title="pdf-viewer"
        style={{ width: "60vw" }}
        id="pdf-preview"
      ></iframe>
     
    </div>
  );
}
