import React from "react";

const CustomInput = ({ value, setInput, setWarning, handleInputChange }) => (
  <textarea
    cols="50"
    rows="50"
    value={value}
    onChange={(event) => handleInputChange(event, setInput, setWarning)}
  ></textarea>
);

export default CustomInput;
