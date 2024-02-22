import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./data";

const Blog = () => {
  const [body, setBody] = React.useState("");
  const { title } = useParams();
  React.useEffect(() => {
    const data = blogs.filter((blog) => blog.title === title);
    setBody(data[0].body);
  });
  return (
    <div className="p-6 bg-gray-200 my-4">
      <h2 className="text-4xl my-4">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Blog;
