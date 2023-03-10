import React from "react";
import BindingCharges from "./Charges/BindingCharges";
import PaperCharges from "./Charges/PrintingCharges";
import TotalPrices from "./Charges/TotalPrices";
import Bind from "./components/Bind";
import Colors from "./components/Colors";
import DeliveryHeader from "./components/DeliveryHeader";
import SetupPrint from "./components/SetupPrint";
import "./delivery.css";

const delivery = () => {
  return (
    <>
      <section>
        {/* --------header---------- */}
        <DeliveryHeader />
        {/* ------------Main Delivery section---------- */}
        <div className="row mx-5 pop main_delivery_section">
          <h2 className="my-4 fw-bold dim px-5">Order Document</h2>
          {/* -------Choose File----------- */}
          <div
            className="col-lg-8 col-sm-12 px-5 Options
          "
          >
            <div className="">
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
            <Bind />
            <SetupPrint />
            <Colors />
          </div>

          {/*  ----------- Prices Chart------------ */}
          <div className="col-lg-4 col-sm-12 jsf my-5 price_chart">
            <h2 className="text-center dim fw-bold pop">Prices Chart</h2>
            <BindingCharges />
            <PaperCharges />
          </div>
        </div>
      </section>
      {/* --------Total Prices------------ */}
      <TotalPrices />
    </>
  );
};

export default delivery;
