import React, { useState } from 'react';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFiles(event.target.files);
  };

  const renderSelectedFiles = () => {
    return Array.from(selectedFiles).map((file, index) => (
      <iframe key={index} src={URL.createObjectURL(file)} width="100%" height="600px" />
    ));
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
      {selectedFiles.length > 0 && renderSelectedFiles()}
    </div>
  );
}

export default App;
