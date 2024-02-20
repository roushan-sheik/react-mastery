import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = 10;
  function reducer(state, action) {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => dispatch("increment")} className="btn btn-info ">
          Increment{" "}
        </button>
        <button onClick={() => dispatch("decrement")} className="btn btn-info ">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
