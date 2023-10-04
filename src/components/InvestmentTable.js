import React from "react";
import styles from './CSS/InvestmentTable.module.css';

const InvestmentTable = ({ yearlyData }) => {
  if (yearlyData.length === 0) {
    return <p className={styles.result__fallback}>No investment calculated yet.</p>;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const content = yearlyData.map((data) => (
    <tr key={data.year}>
      <td>{data.year}</td>
      <td>{formatter.format(data.savingsEndOfYear)}</td>
      <td>{formatter.format(data.yearlyInterest)}</td>
      <td>{formatter.format(data.totalInterest)}</td>
      <td>{formatter.format(data.yearlyContribution)}</td>
    </tr>
  ));

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

export default InvestmentTable;
