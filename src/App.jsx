import React from "react";
import ViewPdf from "./components/ViewPdf";
import Merge from "./components/Merge";
import Img2Pdf from "./components/Img2Pdf";
// import Conversion from "./components/Conversion";

const App = () => {
  return (
    <>
      <ViewPdf />
      <Img2Pdf />
      <Merge />
    </>
  );
};

export default App;
