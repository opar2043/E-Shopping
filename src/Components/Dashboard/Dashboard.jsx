import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiPlusCircle, BiUnite } from "react-icons/bi";
import { FiHome, FiInfo, FiPhoneCall, FiGrid } from "react-icons/fi";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-gray-900 text-white p-6 flex  flex-col justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">E-Shopping</h2>

          {/* Admin/User Menu */}
          <ul className="space-y-3">
            {isAdmin ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineDashboard size={22} />
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
                  to="/dashboard/order"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineShoppingCart size={22} />
                  <span>Orders</span>
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
                {/* <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineDashboard size={22} />
                  <span>Dashboard</span>
                </NavLink> */}

                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <AiOutlineShoppingCart size={22} />
                  <span>My Orders</span>
                </NavLink>

                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition ${
                      isActive ? "bg-gray-800" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <BiPlusCircle size={22} />
                  <span>Wishlist</span>
                </NavLink>

                <NavLink
                  to="/profile"
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
