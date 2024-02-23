import React from "react";
import { BasketContext } from "../Root";
const cameraSell = "CAMERA_SELL";
const mobileSell = "MOBILE_SELL";

const Store = () => {
  const handleStore = React.useContext(BasketContext);
  const { dispatch, state } = handleStore;
  const { count, totalSell, cameraSell, phoneSell } = state;
  function handleMobile() {
    dispatch({ type: mobileSell, price: 10000 });
  }
  function handleCamera() {
    dispatch({ type: cameraSell, price: 20000 });
  }
  return (
    <div>
      <div>
        <p>Total Sell : {count}</p>
        <p>Camera Sell :{cameraSell}</p>
        <p>Mobile Sell : {phoneSell}</p>
        <p>Total Cash: {totalSell}</p>
      </div>
      <div>
        <button onClick={handleMobile} className="btn btn-info">
          {" "}
          Sell Mobile
        </button>
        <button onClick={handleCamera} className="btn btn-secondary">
          {" "}
          Sell Camera
        </button>
      </div>
    </div>
  );
};

export default Store;
