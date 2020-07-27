import React from "react";

const CustomTextArea = ({ value, handleInputChange }) => (
  <textarea
    cols="50"
    rows="50"
    value={value}
    onChange={handleInputChange}
  ></textarea>
);

export default CustomTextArea;
