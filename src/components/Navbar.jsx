import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  const toggleTheme = () => {
    const newTheme =
      theme === "tripnexus-light"
        ? "tripnexus-dark"
        : "tripnexus-light";

    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "hover:text-primary transition";

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/explore" className={navLinkStyle}>Explore</NavLink></li>
            <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
            <li><NavLink to="/blog" className={navLinkStyle}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-primary">
          Trip<span className="text-accent">Nexus</span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/explore" className={navLinkStyle}>Explore</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
          <li><NavLink to="/blog" className={navLinkStyle}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "tripnexus-light" ? <FaMoon /> : <FaSun />}
        </button>

        <NavLink to="/login" className="btn btn-outline btn-primary hidden sm:inline-flex">
          Login
        </NavLink>

        <NavLink to="/register" className="btn btn-primary hidden sm:inline-flex">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;