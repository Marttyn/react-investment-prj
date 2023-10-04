import React from "react";

const InputField = ({ label, type, id, value, onChange }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </p>
  );
};

export default InputField;
