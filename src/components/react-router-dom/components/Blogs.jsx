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
          const { id, title, body } = blog;

          return (
            <div className="p-6 bg-gray-200 my-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p>{makeSlice(body, 200)}</p>
              <Link state={blog} className="btn mt-4" to={title}>
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
