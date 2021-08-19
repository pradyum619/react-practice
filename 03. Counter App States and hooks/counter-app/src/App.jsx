import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h4>
        Current Count is <span>{count}</span>
      </h4>
      <div className="btns-flex">
        <i
          onClick={() => (count >= 10 ? 10 : setCount(count + 1))}
          className="fa fa-plus"
          aria-hidden="true"
        ></i>
        <i
          onClick={() => (count <= 0 ? 0 : setCount(count - 1))}
          className="fa fa-minus"
          aria-hidden="true"
        ></i>
      </div>
      <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}
