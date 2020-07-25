import React from "react";
import "./App.css";

const App = () => {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const isJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  const prettify = (ugly) => {
    const obj = JSON.parse(ugly);
    const pretty = JSON.stringify(obj, undefined, 4);
    return pretty;
  };

  const handleInput1 = (event) => {
    const value = event.target.value;
    setInput1(value);
    if (isJSON(value)) {
      const prettifiedInput = prettify(value);
      setInput1(prettifiedInput);
    }
  };

  const handleInput2 = (event) => {
    const value = event.target.value;
    setInput2(value);
    if (isJSON(value)) {
      const prettifiedInput = prettify(value);
      setInput2(prettifiedInput);
    }
  };

  return (
    <div className="App">
      <main>
        <div class="flex-container">
          <div>
            <textarea
              cols="50"
              rows="50"
              value={input1}
              onChange={handleInput1}
            ></textarea>
          </div>
          <div>
            <textarea
              cols="50"
              rows="50"
              value={input2}
              onChange={handleInput2}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
