import React from "react";
import { UserContext } from "./UserContext";

const ComponentB = () => {
  const user = React.useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h2>Component B</h2>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Age: {user.age}</h3>
    </div>
  );
};

export default ComponentB;
