import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
import { BiCart, BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const [carts, refetch, isLoading] = useCart([]);
  const cart = carts.filter((car) => car.email === user?.email);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
        <hr className="md:border md:border-pink-500 w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/collection"}>
        <li>
          <a>Collection</a>
        </li>
        <hr className="md:border md:border-pink-500  w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <a>About</a>
        </li>
        <hr className="md:border md:border-pink-500  w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <a>Contact</a>
        </li>
        <hr className="md:border md:border-pink-500  w-8 mx-auto hidden" />
      </NavLink>
      {user && (
        <NavLink to={"/dashboard"}>
          <li>
            <a>Dashboard</a>
          </li>
          <hr className="md:border md:border-pink-500  w-8 mx-auto hidden" />
        </NavLink>
      )}
    </>
  );

  function logOut() {
    handleLogout()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <div className="navbar bg-base-100 shadow-md md:px-6">
      {/* Left Side - Brand & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content t font-semibold  w-52 p-2 shadow bg-white rounded-lg z-10 "
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="/public/e-shopping.jpeg" alt="" className=" w-4 md:w-8" />
          <NavLink
            to="/"
            className="text-sm md:text-2xl font-bold text-pink-500"
          >
            E-Shopping
          </NavLink>
        </div>
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-semibold text-lg">{links}</ul>
      </div>

      {/* Right Side - Cart & Profile */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Profile Picture */}
        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
          {user ? (
            <img
              src={
                user?.photoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={
                user?.photoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* User Icon/Login */}
        {user ? (
          <button
            onClick={logOut}
            className="px-2 py-1 rounded text-sm bg-red-500 text-white flex items-center justify-center gap-1 font-semibold"
          >
            <BiLogOut></BiLogOut>Logout
          </button>
        ) : (
          <Link
            to={user ? "/dashboard" : "/login"}
            className="text-xl text-gray-600 hover:text-pink-500"
          >
            <FaRegUserCircle size={28} />
          </Link>
        )}

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end relative">
          <button tabIndex={0} className="btn btn-ghost btn-circle relative">
            <BiCart className="text-2xl text-gray-700 hover:text-pink-500" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
