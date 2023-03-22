import React from "react";
import { motion } from "framer-motion";
const PaperCharges = ({bw, color}) => {
  return (
    <>
      <motion.table
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.5,
          // damping: 5,
        }}
        className="table"
      >
        <thead>
          <tr>
            <th scope="col" className="dim" title="print">
              <i class="p-1 stroke fa-sharp fa-solid fa-print"></i>
            </th>
            <th scope="col" className="dim">
              <i class="stroke p-1 fa-solid fa-hand-holding-dollar"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Black and White per page 
              {/* (Single Side) */}

            </td>
            <td>₹{bw}.00</td>
          </tr>
          {/* <tr>
            <td>Black and White per page (Both Side)</td>
            <td>₹2.00</td>
          </tr> */}
          <tr>
            <td> Color printing per page
              {/* (Single Side) */}
            </td>
            <td> ₹{color}.00</td>
          </tr>
          {/* <tr>
            <td> Color printing per page(Both Side)</td>
            <td>₹10.00 </td>
          </tr> */}
        </tbody>
      </motion.table>
    </>
  );
};

export default PaperCharges;
