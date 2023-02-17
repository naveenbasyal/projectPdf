import React, { useState } from "react";
import jsPDF from "jspdf";

async function generatePdf(images) {
  const doc = new jsPDF();
  for (const image of images) {
    const dataUrl = await readImageDataUrl(image);
    const { width: originalWidth, height: originalHeight } = await getImageSize(
      dataUrl
    );
    //jo orginal image hai uska width nikal dega ye ↑
    const aspectRatio = originalWidth / originalHeight;
    let width = doc.internal.pageSize.getWidth() - 20; // ye x side se 1cm margin de dega
    let height = width / aspectRatio;
    if (height > doc.internal.pageSize.getHeight() - 20) {
      height = doc.internal.pageSize.getHeight() - 20; // ye y side se de dega margin
      width = height * aspectRatio;
    }
    const x = (doc.internal.pageSize.getWidth() - width) / 2;
    const y = (doc.internal.pageSize.getHeight() - height) / 2;
    doc.addImage(dataUrl, "JPEG", x, y, width, height);
    doc.addPage();
  }
  doc.deletePage(doc.getNumberOfPages()); // sala hamesha empty page bn jeta hai last mei usko delete krne ka jugad

  return doc;
}

function readImageDataUrl(file) {
  //img kaha hai usko pta krne ke liye
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function getImageSize(dataUrl) {
  return new Promise((resolve, reject) => {
    //img ka size pta krne ke liye
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function App() {
  const [images, setImages] = useState([]);

  async function handleFileInputChange(event) {
    //jitne bhi img hai usko array mei dal dega
    const files = Array.from(event.target.files);
    setImages(files);
  }

  async function handleSavePdf() {
    //save ke liye
    const pdf = await generatePdf(images);  
    pdf.save("Img2Pdf.pdf");
  }

  return (
    <div className="container ">
      <h2>Add multiple images to PDF</h2>
      <input
        className="form-control my-2"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInputChange}
      />
      <button className="btn btn-success my-2" onClick={handleSavePdf}>
        Save PDF
      </button>
    </div>
  );
}

export default App;
