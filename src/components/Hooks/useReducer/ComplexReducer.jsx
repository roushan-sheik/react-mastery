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
          counter: state.counter + action.value,
        };
      case "decrement":
        return {
          counter: state.counter - action.value,
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
          onClick={() => dispatch({ type: "increment", value: 1 })}
          className="btn btn-primary "
        >
          Increment by 1
        </button>
        <button
          onClick={() => dispatch({ type: "increment", value: 10 })}
          className="btn btn-primary "
        >
          Increment By 10
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", value: 1 })}
          className="btn btn-info "
        >
          Decrement by 1
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", value: 5 })}
          className="btn btn-info "
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
};

export default ComplexReducer;
