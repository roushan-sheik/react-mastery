import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/blogs"} element={<Blogs />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
