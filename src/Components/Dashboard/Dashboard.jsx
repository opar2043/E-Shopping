import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiLogOut, BiPlusCircle, BiUnite } from "react-icons/bi";
import { FiHome, FiInfo, FiPhoneCall, FiGrid } from "react-icons/fi";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const isAdmin = true;
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

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
    <div className=" bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-72 bg-gray-900 text-white p-6 flex  flex-col w-full h-auto">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">E-Shopping</h2>

          {/* Admin/User Menu */}
          <ul className="space-y-3">
            {isAdmin ? (
              <>

                <NavLink
                  to="/dashboard/order"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineShoppingCart size={22} />
                  <span>Dashboard</span>
                </NavLink>

                <NavLink
                  to="/dashboard/additem"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <BiPlusCircle size={22} />
                  <span>Add Item</span>
                </NavLink>

                <NavLink
                  to="/dashboard/item"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <BiUnite size={22}></BiUnite>
                  <span>Items</span>
                </NavLink>

                <NavLink
                  to="/dashboard/user"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineUser size={22} />
                  <span>Users</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard/my-order"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineShoppingCart size={22} />
                  <span>My-Orders </span>
                </NavLink>

                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineUser size={22} />
                  <span>Profile</span>
                </NavLink>
              </>
            )}

            <button
              onClick={() => logOut()}
              className="flex items-center w-full gap-3 p-3 rounded-lg transition bg-red-500 text-white hover:bg-red-700 shadow-md"
            >
              <BiLogOut size={22}></BiLogOut>
              <span>Log Out</span>
            </button>
          </ul>
        </div>

        {/* General Navigation */}
        <div>
          <hr className="border-gray-700 my-4" />
          <ul className="space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-gray-800" : "hover:bg-gray-800"
                }`
              }
            >
              <FiHome size={22} />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-gray-800" : "hover:bg-gray-800"
                }`
              }
            >
              <FiGrid size={22} />
              <span>Collection</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-gray-800" : "hover:bg-gray-800"
                }`
              }
            >
              <FiInfo size={22} />
              <span>About</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-gray-800" : "hover:bg-gray-800"
                }`
              }
            >
              <FiPhoneCall size={22} />
              <span>Contact</span>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
