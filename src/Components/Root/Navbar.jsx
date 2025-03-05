// import { Link, NavLink } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";
// import useAuth from "../Hooks/useAuth";
// import useCart from "../Hooks/useCart";

// const Navbar = () => {
//   const links = (
//     <>
//       <NavLink to={"/"}>
//         <li>
//           <a>Home</a>
//         </li>
//         <hr className="border border-slate-700 w-8 mx-auto hidden" />
//       </NavLink>
//       <NavLink to={"/collection"}>
//         <li>
//           <a>Collection</a>
//         </li>
//         <hr className="border border-slate-700 w-8 mx-auto hidden" />
//       </NavLink>
//       <NavLink to={"/about"}>
//         <li>
//           <a>About</a>
//         </li>
//         <hr className="border border-slate-700 w-8 mx-auto hidden" />
//       </NavLink>
//       <NavLink to={"/contact"}>
//         <li>
//           <a>Contact</a>
//         </li>
//         <hr className="border border-slate-700 w-8 mx-auto hidden" />
//       </NavLink>
//       <NavLink to={"/dashboard"}>
//         <li>
//           <a>dashboard</a>
//         </li>
//         <hr className="border border-slate-700 w-8 mx-auto hidden" />
//       </NavLink>
//     </>
//   );

//   const { user } = useAuth;

//   const [carts] = useCart([]);
//   const cart = carts.filter((car) => car.email == user?.email);

//   return (
//     <div className="navbar bg-base-100 ">
//       {/* Left Side - Brand & Mobile Menu */}
//       <div className="navbar-start">
//         <div className="dropdown">
//           <button tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <NavLink to="/" className="btn btn-ghost text-xl text-pink-500 font-extrabold">
//           E-Shoping
//         </NavLink>
//       </div>

//       {/* Center - Navigation Links */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       {/* Right Side - Cart Dropdown */}
//       <div className="navbar-end">
//         <div className="w-9  rounded-full overflow-hidden border-2 border-slate-300 shadow-md">
//           <img
//             src={
//               user?.photoURL ||
//               "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             }
//             alt="User Avatar"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div>
//           <button className="btn-xs ">
//             <Link to={"/login"} className="btn-xs text-lg">
//               <FaRegUserCircle size={32} />
//             </Link>
//           </button>
//         </div>
//         <div className="dropdown dropdown-end mr-7">
//           {/* Cart Button */}
//           <button tabIndex={0} className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="badge badge-sm indicator-item text-red-600">
//                 {cart.length}
//               </span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

















import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
import { BiCart } from "react-icons/bi";

const Navbar = () => {
  const { user } = useAuth();
  const [carts] = useCart([]);
  const cart = carts.filter((car) => car.email === user?.email);
  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
        <hr className="border border-slate-700 w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/collection"}>
        <li>
          <a>Collection</a>
        </li>
        <hr className="border border-slate-700 w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <a>About</a>
        </li>
        <hr className="border border-slate-700 w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <a>Contact</a>
        </li>
        <hr className="border border-slate-700 w-8 mx-auto hidden" />
      </NavLink>
      <NavLink to={"/dashboard"}>
        <li>
          <a>dashboard</a>
        </li>
        <hr className="border border-slate-700 w-8 mx-auto hidden" />
      </NavLink>
    </>
  );


  return (
    <div className="navbar bg-base-100 shadow-md px-6">
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
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-white rounded-lg z-10"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold text-pink-500">
          E-Shopping
        </NavLink>
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">{links}</ul>
      </div>

      {/* Right Side - Cart & Profile */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
          <img
            src={
              user?.photoURL ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Icon/Login */}
        <Link to={user ? "/dashboard" : "/login"} className="text-xl text-gray-600 hover:text-pink-500">
          <FaRegUserCircle size={28} />
        </Link>

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


