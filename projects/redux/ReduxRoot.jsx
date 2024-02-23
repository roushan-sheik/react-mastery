import React from "react";
import { createStore } from "redux";
// initialState
const initialState = {
  count: 0,
};
// dispatch/action -> INCREMENT DECREMENT RESET
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
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
function deCrementByVal(val) {
  return {
    type: DECREMENT_BY_VALUE,
    payload: val,
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
    case DECREMENT_BY_VALUE:
      return { ...state, count: state.count + action.payload };
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
  console.log(store.getState().count);
});
store.dispatch(inCrement());
store.dispatch(inCrement());
store.dispatch(inCrement());
store.dispatch(reSet());
store.dispatch(inCrement());
store.dispatch(inCrement());
store.dispatch(deCrementByVal(50));
store.dispatch(deCrementByVal(100));

const ReduxRoot = () => {
  return <div>Redux</div>;
};

export default ReduxRoot;
