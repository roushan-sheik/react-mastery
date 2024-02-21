import React from "react";
import { basketContext } from "../Root";
const mobileSell = "MOBILE_SELL";
const cameraSell = "CAMERA_SELL";

const Increment = () => {
  const myBasketContext = React.useContext(basketContext);
  //* myBasketContext এর মাঝে একটা অবজেক্ট আছে যেটা
  //* র‌্যাপ করার সময় ভ্যালু  হিসেবে পাঠিয়েছিলাম
  //* { handleBasket: dispatch, stateOutput: state }
  function handleCamera() {
    myBasketContext.handleBasket({ type: cameraSell, price: 20000 });
  }
  function handleMobile() {
    myBasketContext.handleBasket({ type: mobileSell, price: 8000 });
  }
  return (
    <div>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold">
          State Management with useReducer and useContext
        </h1>
        <div>
          <h2 className="py-6 text-3xl">
            Total Sold : {myBasketContext.stateOutput.totalSold} Tk
          </h2>
          <p>phone price: 8000 Tk</p>
          <h2 className="py-6 text-3xl">
            Sotal Sold item : {myBasketContext.stateOutput.count} Pice
          </h2>
          <h2 className="py-6 text-3xl">
            Mobile Sold: {myBasketContext.stateOutput.mobileSold} Tk
          </h2>
          <p>camera price: 20000 Tk</p>
          <h2 className="py-6 text-3xl">
            Camera Sold: {myBasketContext.stateOutput.cameraSold} Tk
          </h2>
        </div>
        <div>
          <button
            onClick={() => handleCamera()}
            className="btn mr-6 my-6 btn-primary "
          >
            Sell Camera
          </button>
          <button onClick={() => handleMobile()} className="btn btn-info ">
            Sell Mobile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Increment;
