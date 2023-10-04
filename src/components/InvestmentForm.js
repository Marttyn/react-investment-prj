import React from "react";
import Form from "./UI/Form";
import InputField from "./UI/InputField";
import InputGroup from "./UI/InputGroup";
import SubmitButton from "./UI/SubmitButton";
import ResetButton from "./UI/ResetButton";

const InvestmentForm = ({ calculateHandler }) => {
  const initialValues = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  };

  const [userInput, setUserInput] = React.useState(initialValues);

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.id]: event.target.value,
    });
  };

  const resetHandler = () => {
    setUserInput(initialValues);
    calculateHandler([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput["current-savings"] === "" ||
      userInput["yearly-contribution"] === "" ||
      userInput["expected-return"] === "" ||
      userInput["duration"] === ""
    ) {
      return;
    }
    calculateHandler(userInput);
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup>
        <InputField
          label="Current Savings ($)"
          type="number"
          id="current-savings"
          value={userInput["current-savings"]}
          onChange={handleChange}
        />
        <InputField
          label="Yearly Savings ($)"
          type="number"
          id="yearly-contribution"
          value={userInput["yearly-contribution"]}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <InputField
          label="Expected Interest (% per year)"
          type="number"
          id="expected-return"
          value={userInput["expected-return"]}
          onChange={handleChange}
        />
        <InputField
          label="Investment Duration (years)"
          type="number"
          id="duration"
          value={userInput["duration"]}
          onChange={handleChange}
        />
      </InputGroup>
      <p className="actions">
        <ResetButton onClick={resetHandler} />
        <SubmitButton />
      </p>
    </Form>
  );
};

export default InvestmentForm;
