import React from "react";
import Todo from "./Todo";

const State = ({ getData }) => {
  return (
    <div>
      <h2>State</h2>
      <Todo getData={getData} />
    </div>
  );
};

export default State;
