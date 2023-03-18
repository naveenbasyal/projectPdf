import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function ExtractPages() {
  const [pdfFileData, setPdfFileData] = useState();
  const [pdfPagesCount, setPdfPagesCount] = useState();

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

  async function extractPdfPages() {
    const fromPage = parseInt(document.getElementById("fromPage").value);
    const toPage = parseInt(document.getElementById("toPage").value);

    if (fromPage && toPage && fromPage <= toPage && toPage <= pdfPagesCount) {
      const pdfSrcDoc = await PDFDocument.load(
        await fetch(pdfFileData).then((res) => res.arrayBuffer())
      );
      const pdfNewDoc = await PDFDocument.create();
      const pages = await pdfNewDoc.copyPages(
        pdfSrcDoc,
        Array.from(
          { length: toPage - fromPage + 1 },
          (_, i) => fromPage + i - 1
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
  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      await renderPdf(pdfArrayBuffer);
    }
  };

  return (
    <div className="container my-5">
      <h1>Extract Pages</h1>
      <input
        type="file"
        className="form-control"
        id="file-selector"
        accept=".pdf"
        onChange={onFileSelected}
      />
      {pdfFileData && (
        <div>
          <label htmlFor="fromPage">Enter start page:</label>
          <input type="number" id="fromPage" min="1" max={pdfPagesCount} />
          <label htmlFor="toPage">Enter end page:</label>
          <input type="number" id="toPage" min="1" max={pdfPagesCount} />
          <button onClick={extractPdfPages}>Extract Pages</button>
          <iframe
            style={{ display: "block", width: "100vw", height: "90vh" }}
            title="PdfFrame"
            src={pdfFileData}
            type="application/pdf"
          ></iframe>
        </div>
      )}

    </div>
  );
}
