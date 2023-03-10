import React from "react";
// import ViewPdf from "./tools/ViewPdf";
// import Merge from "./tools/Merge";
// import Img2Pdf from "./tools/Img2Pdf";
// import ExtractImages from "./tools/ExtractPages";
// import PdfMaker from "./tools/PdfMaker";
// import RemovePages from "./tools/RemovePages";
import LandingPage from "./Pages/LandingPage";
import Delivery from "./delivery/Delivery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./cart/cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
