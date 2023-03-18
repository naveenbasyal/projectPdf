import React, { useContext } from "react";
import DotRing from "./CustomMouse/DotRing/DotRing";
import { motion, useScroll } from "framer-motion";
import Delivery from "./Pages/Delivery";
import Merge from "./tools/Merge";
import Img2Pdf from "./tools/Img2Pdf";
import ExtractPages from "./tools/ExtractPages";
import RemovePages from "./tools/RemovePages";
import PdfMaker from "./tools/PdfMaker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./Pages/cart";
import Tools from "./Pages/Tools";
import Auth from "./Pages/Auth";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <BrowserRouter>
        <Navbar scrollToTop={scrollToTop} />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <DotRing />
        <div>
          <Routes>
            <Route path="/" element={<Delivery scrollToTop={scrollToTop} />} />
            <Route
              path="/tools"
              element={<Tools scrollToTop={scrollToTop} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tools/merge" element={<Merge />} />
            <Route path="/tools/image-to-pdf" element={<Img2Pdf />} />
            <Route path="/tools/extract-pages" element={<ExtractPages />} />
            <Route path="/tools/remove-pages" element={<RemovePages />} />
            <Route path="/tools/create-pdf" element={<PdfMaker />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
