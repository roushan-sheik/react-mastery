import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./data";
const Blogs = () => {
  function makeSlice(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div>
      <h2 className="text-4xl font-bold ">Blogs</h2>
      <div>
        {blogs.map((blog) => {
          console.log(blog);
          return (
            <div className="p-6 bg-gray-200 my-4">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p>{makeSlice(blog.body, 200)}</p>
              <Link className="btn mt-4" to={blog.title}>
                Show more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
