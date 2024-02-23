import React from "react";
import ComponentA from "./components/ComponentA";
export const BasketContext = React.createContext();
const cameraSell = "CAMERA_SELL";
const mobileSell = "MOBILE_SELL";
const initialState = {
  count: 0,
  totalSell: 0,
  cameraSell: 0,
  phoneSell: 0,
};
const Root = () => {
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case (action.type = cameraSell):
        return {
          ...state,
          count: state.count + 1,
          cameraSell: state.cameraSell + action.price,
          totalSell: state.totalSell + action.price,
        };
      case (action.type = mobileSell):
        return {
          ...state,
          count: state.count + 1,
          mobileSell: state.mobileSell + action.price,
          totalSell: state.totalSell + action.price,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <BasketContext.Provider value={{ state, dispatch }}>
        <ComponentA />
      </BasketContext.Provider>
    </div>
  );
};

export default Root;
