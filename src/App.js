import React from "react";
import "App.css";
import getComparisonScores from "helpers/similarity";
import JSONInput from "components/JSONInput";

const App = () => {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const score = getComparisonScores(input1, input2);
    setScore(score);
  }, [input1, input2]);

  return (
    <div className="App">
      <main>
        <div className="flex-container">
          <div>
            <JSONInput input={input1} setInput={setInput1} />
          </div>
          <div>
            <JSONInput input={input2} setInput={setInput2} />
          </div>
        </div>
        <span id="score">Similarity Score: {score}</span>
      </main>
    </div>
  );
};

export default App;
