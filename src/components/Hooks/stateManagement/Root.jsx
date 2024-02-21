import React from "react";
import Form from "./components/Form";

export const basketContext = React.createContext();
const Root = () => {
  const mobileSell = "MOBILE_SELL";
  const cameraSell = "CAMERA_SELL";
  const totalSold = "TOTAL_SOLD";
  // Main State
  const initialState = {
    count: 0,
    mobileSold: 0,
    cameraSold: 0,
  };
  function reducer(state, action) {
    switch (action.type) {
      case (action.type = mobileSell):
        return {
          ...state,
          mobileSold: state.mobileSold + action.price,
          count: state.count + 1,
        };
      case (action.type = cameraSell):
        return {
          ...state,
          cameraSold: state.cameraSold + action.price,
          count: state.count + 1,
        };

      default:
        return state;
    }
  }
  const [count, dispach] = React.useReducer(reducer, initialState);
  return (
    <div>
      <basketContext.Provider
        value={{ handleBasket: dispach, countHandler: count }}
      >
        <Form />
      </basketContext.Provider>
    </div>
  );
};

export default Root;
