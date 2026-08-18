import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function multiply() {
    setCount(count * 2);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="box">
        <h1>My Counter</h1>

        <div className="display">
          <p>Value</p>
          <h2>{count}</h2>
        </div>

        <div className="buttons">
          <button onClick={add}>Add +1</button>
          <button onClick={subtract}>Minus -1</button>
          <button onClick={multiply}>Multiply ×2</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;