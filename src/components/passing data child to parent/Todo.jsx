import React from "react";
let obj = {
  name: "Arifa Moni",
  email: "arifamoni@gmailcom",
  password: "1asdk34k34k5j",
};
const Todo = ({ getData }) => {
  getData(obj);
  return (
    <div>
      <h2>Todo</h2>
    </div>
  );
};

export default Todo;
