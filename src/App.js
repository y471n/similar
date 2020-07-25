import React from "react";
import "./App.css";
import prettify from "./helpers/prettify";
import getComparisonScores from "./helpers/similarity";
import isJSON from "./helpers/isJSON";
import Warning from "./components/warning";
import CustomInput from "./components/customInput";

const App = () => {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [warning1, setWarning1] = React.useState("");
  const [warning2, setWarning2] = React.useState("");

  React.useEffect(() => {
    const score = getComparisonScores(input1, input2);
    setScore(score);
  }, [input1, input2]);

  const handleInputChange = (event, setInput, setWarning) => {
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
    <div className="App">
      <main>
        <div className="flex-container">
          <div>
            <CustomInput
              value={input1}
              setInput={setInput1}
              setWarning={setWarning1}
              handleInputChange={handleInputChange}
            />
            <br />
            <Warning title={warning1} />
          </div>
          <div>
            <CustomInput
              value={input2}
              setInput={setInput2}
              setWarning={setWarning2}
              handleInputChange={handleInputChange}
            />
            <br />
            <Warning title={warning2} />
          </div>
        </div>
        <span id="score">Similarity Score: {score}</span>
      </main>
    </div>
  );
};

export default App;
