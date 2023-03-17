import React, { useState } from "react";
import { motion } from "framer-motion";
const DeliveryHeader = () => {
  return (
    <>
      <div className="delivery_header row">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.5,
            // damping: 5,
          }}
          className="container display-4 py-5 dim jsf text-capitalize fw-bold col-lg-6 col-sm-12"
        >
          <span className="stroke p-1">Print on demand:</span>
          <br />
          <span className="fs-1 px-3 primary  fw-bold center">
            Convenient online document printing services
          </span>
        </motion.div>
        <div className="col-lg-5 center col-sm-12">
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            initial={{ x: "100vw" }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.5,
              // damping: 5,
            }}
            animate={{ x: 0 }}
            src="https://img.freepik.com/free-vector/printing-industry-flat-design_23-2148892783.jpg"
            className="img-fluid rounded headerImage p-2 shadow-out"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryHeader;
