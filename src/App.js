import React from "react";
import InvestmentHeader from "./components/InvestmentHeader";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [yearlyData, setYearlyData] = React.useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlySavings = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let yearlyContribution = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlySavings;
      let totalInterest = yearlyInterest;
      if (i > 0) {
        totalInterest = yearlyInterest + yearlyData[i - 1].totalInterest;
      }
      yearlyContribution += yearlySavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);
  };

  return (
    <div>
      <InvestmentHeader />

      <InvestmentForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
