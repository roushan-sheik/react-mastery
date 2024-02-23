import React from "react";
import { createStore } from "redux";
// initialState
const initialState = {
  count: 0,
};
// dispatch/action -> INCREMENT DECREMENT RESET
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
function inCrement() {
  return {
    type: INCREMENT,
  };
}
function deCrement() {
  return {
    type: DECREMENT,
  };
}
function reSet() {
  return {
    type: RESET,
  };
}
// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
// store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(inCrement());
store.dispatch(inCrement());
store.dispatch(inCrement());
store.dispatch(reSet());
store.dispatch(inCrement());
store.dispatch(inCrement());

const ReduxRoot = () => {
  return <div>Redux</div>;
};

export default ReduxRoot;
