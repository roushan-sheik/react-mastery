import React from "react";
import ComponentA from "./ComponentA";
import { UserContext } from "./UserContext";

const user = {
  name: "Arifa Moni",
  email: "arifa@gmail.com",
  age: 20,
};

const Root = () => {
  return (
    <div>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
};

export default Root;
