import React from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const { id } = useParams();
  const name = searchParams.get("name");
  return (
    <div>
      <h1>User Page</h1>
      <h2>id: {searchParams.get("id")}</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {searchParams.get("age")}</h2>
    </div>
  );
};

export default User;
