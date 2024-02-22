import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import User from "./components/User";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/blogs"} element={<Blogs />}></Route>
          <Route path={"/blogs/:title"} element={<Blog />}></Route>
          <Route path={"/user"} element={<User />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
