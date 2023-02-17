import React from 'react';
import docxConverter from 'docx-pdf';

function App() {
  const convertToPDF = () => {
    docxConverter('./demo.docx', './output.pdf', function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log('result' + result);
    }); 
  }

  return (
    <div>
      <h1>Convert .docx to .pdf</h1>
      <button onClick={convertToPDF}>Convert</button>
    </div>
  );
}

export default App;
