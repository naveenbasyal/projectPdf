import React, { useState } from "react";
import axios from "axios";

const ConvertToPDF = () => {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const convert = async () => {
    const formData = new FormData();
    formData.append("input", file);
    formData.append("outputformat", "pdf");

    try {
      const res = await axios.post("https://api.cloudconvert.com/convert", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        responseType: "blob"
      });
      setConvertedFile(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={convert}>Convert to PDF</button>
      {convertedFile && (
        <a href={URL.createObjectURL(convertedFile)} download="converted.pdf">
          Download Converted PDF
        </a>
      )}
    </div>
  );
};

export default ConvertToPDF;
