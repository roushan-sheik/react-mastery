import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="p-8">
      <button className="btn btn-primary" onClick={notify}>
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}
