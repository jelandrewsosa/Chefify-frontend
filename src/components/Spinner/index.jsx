import React from "react";
import style from "./style.module.css";

function Spinner() {
  return (
    <div className={style.loadingSpinnerContainer}>
      <div className={style.loadingSpinner}></div>
    </div>
  );
}

export default Spinner;
