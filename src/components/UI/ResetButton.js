import React from "react";
import styles from "../CSS/ResetButton.module.css";

const ResetButton = ({ onClick }) => {
  return (
    <button type="reset" className={styles.buttonAlt} onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetButton;