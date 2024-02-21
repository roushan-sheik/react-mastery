import React, { useReducer } from "react";

const ComplexReducer = () => {
  const initialState = {
    counter: 0,
  };
  //* reducer যেটা হচ্ছে একটা ফাংশন
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          counter: state.counter - 1,
        };
      default:
        return state;
    }
  }
  // NOTE - useReducer
  //* দুইটা parameter নিবে।
  //* reducer যেটা হচ্ছে একটা ফাংশন
  //* initialState শুরুতে কি থাকবে সেটা বলে দিতে হবে।
  //* useReducer একটা tuple[count, dispatch] রিটার্ন করবে।
  //* count টা হবেচ্ছ value
  //* dispatch টা হচ্ছে action
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2 className="py-6 text-3xl">Count: {count.counter} </h2>
      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="btn btn-primary "
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn btn-info "
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ComplexReducer;
