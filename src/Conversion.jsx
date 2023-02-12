import React, { useState } from "react";

const DocToPdf = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onConvert = async () => {
    setError(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("inputformat", "doc");
    formData.append("outputformat", "pdf");
    try {
      const response = await fetch(`https://api.cloudconvert.com/convert?apikey=${apiKey}`, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.blob();
      setResult(URL.createObjectURL(result));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onConvert}>Convert to PDF</button>
      {error && <p>Error: {error}</p>}
      {result && <iframe src={result} title="PDF Result" />}
    </div>
  );
};

export default DocToPdf;
