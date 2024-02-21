import React from "react";
import { basketContext } from "../Root";

const Increment = () => {
  const myBasketContext = React.useContext(basketContext);
  const mobileSell = "MOBILE_SELL";
  const cameraSell = "CAMERA_SELL";
  function handleCamera() {
    myBasketContext.handleBasket({ type: cameraSell, price: 20000 });
    console.log("camera clicked");
  }
  function handleMobile() {
    myBasketContext.handleBasket({ type: mobileSell, price: 8000 });
    console.log("mobile clicked");
  }
  return (
    <div>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">
          State Management with useReducer and useContext
        </h1>
        <div>
          <h2 className="py-6 text-3xl">
            Sotal Sold item : {myBasketContext.countHandler.count}
          </h2>
          <h2 className="py-6 text-3xl">
            Mobile Sold : {myBasketContext.countHandler.mobileSold}
          </h2>
          <h2 className="py-6 text-3xl">
            Camera Sold : {myBasketContext.countHandler.cameraSold}
          </h2>
        </div>
        <div>
          <button
            onClick={() => handleCamera()}
            className="btn mr-6 my-6 btn-primary "
          >
            Camera
          </button>
          <button onClick={() => handleMobile()} className="btn btn-info ">
            Mobile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Increment;
