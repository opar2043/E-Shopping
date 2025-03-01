import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/collection"}>
        <li>
          <a>Collection</a>
        </li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <a>About</a>
        </li>
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Left Side - Brand & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side - Cart Dropdown */}
      <div className="navbar-end">
        
        <div>
          <button className="btn-xs">
            <Link to={'/login'} className="btn-xs text-lg"><FaRegUserCircle /></Link>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          {/* Cart Button */}
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </button>

          {/* Cart Dropdown Content */}
          <div
            tabIndex={0}
            className="card card-compact  dropdown-content bg-base-300 z-[10] mt-3 w-52 shadow p-4"
          >
            <div className="card-body ">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
