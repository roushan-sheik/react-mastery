import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    //* Link  ব্যবহার না করে NavLink ব্যবহার করলে nav এর সাথে
    //* .active নামে একটা class add করে দেয়
    <nav>
      <div className="navbar bg-base-100 w-full flex gap-8">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
