import React from "react";
import { createStore } from "redux";
// State
// dispatch action
// reducer
// initialState store
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const initialState = {
  count: 0,
};
// count increment
const incrementCount = function () {
  return {
    type: INCREMENT,
  };
};
// count decrement
const decrementCount = function () {
  return {
    type: DECREMENT,
  };
};
// create reducer function
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
// create store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
// increment
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
// decrement
store.dispatch(decrementCount());

// store ends
const ReduxRoot = () => {
  return <div>Redux</div>;
};

export default ReduxRoot;
