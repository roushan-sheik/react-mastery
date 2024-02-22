import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 w-full flex gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blogs"}>Blogs</Link>
      </div>
    </nav>
  );
};

export default Nav;
