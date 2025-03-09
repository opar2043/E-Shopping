import { FaDollarSign, FaUsers, FaShoppingCart, FaBox, FaStar } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const COrder = () => {

  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7000 },
    { month: "Mar", revenue: 8000 },
    { month: "Apr", revenue: 6000 },
    { month: "May", revenue: 9000 },
    { month: "Jun", revenue: 11000 },
  ];
  
  const recentOrders = [
    { id: "#1001", customer: "John Doe", amount: "$120", status: "Completed" },
    { id: "#1002", customer: "Jane Smith", amount: "$80", status: "Pending" },
    { id: "#1003", customer: "David Brown", amount: "$150", status: "Shipped" },
  ];
  
  const topProducts = [
    { name: "Smartphone X", sales: "320 Sales" },
    { name: "Wireless Earbuds", sales: "275 Sales" },
    { name: "Gaming Laptop", sales: "190 Sales" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard (Not OK)</h1>

    {/* Dashboard Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-all">
        <FaDollarSign className="text-green-500 text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-gray-600 text-lg">$25,670</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-all">
        <FaUsers className="text-blue-500 text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-gray-600 text-lg">5,432</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-all">
        <FaBox className="text-yellow-500 text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Items Sold</h2>
          <p className="text-gray-600 text-lg">1,234</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-all">
        <FaShoppingCart className="text-purple-500 text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-gray-600 text-lg">678</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-all">
        <FaStar className="text-orange-500 text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Reviews</h2>
          <p className="text-gray-600 text-lg">320</p>
        </div>
      </div>
    </div>

    {/* Revenue Chart */}
    <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Recent Orders & Top Products */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>
                <td className={`font-semibold ${order.status === "Completed" ? "text-green-500" : "text-red-500"}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Products */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
        <ul>
          {topProducts.map((product, index) => (
            <li key={index} className="py-2 flex justify-between border-b">
              <span>{product.name}</span>
              <span className="text-gray-500">{product.sales}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default COrder;
