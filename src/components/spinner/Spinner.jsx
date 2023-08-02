import React from "react";
import Style from "./spinner.module.css";

const Spinner = () => {
  return (
    <aside
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "6",
      }}
    >
      <div className={Style.alignment}>
        <div className={Style.pulseLoader}></div>
      </div>
    </aside>
  );
};

export default Spinner;
