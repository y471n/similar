import React from "react";
import "./App.css";
import prettify from "./helpers/prettify";
import getComparisonScores from "./helpers/similarity";
import isJSON from "./helpers/isJSON";

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
            <textarea
              cols="50"
              rows="50"
              value={input1}
              onChange={(event) =>
                handleInputChange(event, setInput1, setWarning1)
              }
            ></textarea>
            <br />
            <span className="warning">{warning1}</span>
          </div>
          <div>
            <textarea
              cols="50"
              rows="50"
              value={input2}
              onChange={(event) =>
                handleInputChange(event, setInput2, setWarning2)
              }
            ></textarea>
            <br />
            <span className="warning">{warning2}</span>
          </div>
        </div>
        <span id="score">Similarity Score: {score}</span>
      </main>
    </div>
  );
};

export default App;
