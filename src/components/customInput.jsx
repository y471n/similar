import React from "react";

const CustomInput = ({ value, setInput, handleInputChange }) => (
  <textarea
    cols="50"
    rows="50"
    value={value}
    onChange={(event) => handleInputChange(event, setInput)}
  ></textarea>
);

export default CustomInput;
