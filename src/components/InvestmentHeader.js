import React from "react";
import logo from "../assets/investment-calculator-logo.png";
import styles from "./CSS/InvestmentHeader.module.css";

const InvestmentHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default InvestmentHeader;
