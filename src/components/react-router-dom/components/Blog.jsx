import React from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const dataLocation = useLocation();
  console.log(dataLocation);
  return (
    <div className="p-6 bg-gray-200 my-4">
      <h1>Blog no: {dataLocation.state.id} </h1>
      <h2 className="text-4xl my-4">{dataLocation.state.title}</h2>
      <p>{dataLocation.state.body}</p>
    </div>
  );
};

export default Blog;
