import React from "react";
import Form from "./components/Form";

export const basketContext = React.createContext();
const Root = () => {
  const mobileSell = "MOBILE_SELL";
  const cameraSell = "CAMERA_SELL";

  // Main State
  const initialState = {
    count: 0,
    mobileSold: 0,
    cameraSold: 0,
    totalSold: 0,
  };
  function reducer(state, action) {
    //  state:{count: 0, mobileSold: 0, cameraSold: 0, totalSold: 0}
    //  action:{type: 'MOBILE_SELL', price: 8000}

    switch (action.type) {
      case (action.type = mobileSell):
        return {
          ...state,
          mobileSold: state.mobileSold + action.price,
          count: state.count + 1,
          totalSold: state.totalSold + action.price,
        };
      case (action.type = cameraSell):
        return {
          ...state,
          cameraSold: state.cameraSold + action.price,
          count: state.count + 1,
          totalSold: state.totalSold + action.price,
        };

      default:
        return state;
    }
  }
  //* reducer ফাংশন টা-
  //* initialState এর value update করে state এর মাঝে দিয়ে দিবে
  //* dispatch হচ্ছে একটা ফাংশন যেটা action type দিয়ে trigger করবে।
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <basketContext.Provider
        value={{ handleBasket: dispatch, stateOutput: state }}
      >
        <Form />
      </basketContext.Provider>
    </div>
  );
};

export default Root;
