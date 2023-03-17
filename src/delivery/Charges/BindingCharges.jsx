import React from "react";
import { motion } from "framer-motion";
const BindingCharges = () => {
  return (
    <>
      <motion.table
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.6,
          // damping: 5,
        }}
        className="table my-5"
      >
        <thead>
          <tr>
            <th scope="col" className="fw-bold dim">
              Binding
            </th>
            <th scope="col" className="dim">
              <i class="p-1 stroke fa-solid fa-hand-holding-dollar"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spiral Binding</td>
            <td>₹40.00</td>
          </tr>
          <tr>
            <td> Plastic Cover</td>
            <td>₹10.00</td>
          </tr>
          <tr>
            <td> Staples only</td>
            <td> ₹5.00</td>
          </tr>
          <tr>
            <td> Loose Leaf</td>
            <td>₹0.00 </td>
          </tr>
        </tbody>
      </motion.table>
    </>
  );
};

export default BindingCharges;
