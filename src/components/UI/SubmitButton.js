import React from "react";
import styles from "../CSS/SubmitButton.module.css";

const SubmitButton = () => {
  return (
    <button type="submit" className={styles.button}>
      Calculate
    </button>
  );
};

export default SubmitButton;