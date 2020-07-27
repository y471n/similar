import React from "react";

const CustomInput = ({ value, handleInputChange }) => (
  <textarea
    cols="50"
    rows="50"
    value={value}
    onChange={handleInputChange}
  ></textarea>
);

export default CustomInput;
