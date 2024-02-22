import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
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
