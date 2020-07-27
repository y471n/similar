import React from "react";
import CustomTextArea from "components/customTextArea";
import Warning from "components/warning";
import isJSON from "helpers/isJSON";
import prettify from "helpers/prettify";

const JSONInput = ({ input, setInput }) => {
  const [warning, setWarning] = React.useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (isJSON(value)) {
      const prettifiedInput = prettify(value);
      setInput(prettifiedInput);
      setWarning("");
    } else {
      setInput(value);
      setWarning("Please enter a valid JSON.");
    }
  };

  return (
    <>
      <CustomTextArea value={input} handleInputChange={handleInputChange} />
      <br />
      <Warning title={warning} />
    </>
  );
};

export default JSONInput;
