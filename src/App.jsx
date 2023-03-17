import React, { useContext } from "react";
import DotRing from "./CustomMouse/DotRing/DotRing";
import { motion, useScroll } from "framer-motion";
import Delivery from "./Pages/Delivery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./Pages/cart";
import Tools from "./Pages/Tools";
import Auth from "./Auth/Auth";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <DotRing />
        <div>
          <Routes>
            <Route path="/" element={<Delivery />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
