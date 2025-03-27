import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useAxios from "../../Hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { FaCoins, FaEnvelope, FaTrash } from "react-icons/fa";

const Order = () => {
  const [cart , refetch , isLoading] = useCart([]) || [];
  const axiosSecure = useAxios();
  const { user } = useAuth() || {};

  const userCart = cart.filter((car) => car?.email == user?.email) || [];
  const totalPrice = userCart.reduce((sum, item) => sum + item.price, 0);
  // console.log(totalPrice);

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then(() => {
          toast.error("Successfully Deleted");
          refetch()
        });
      }
    });
  }

  return (
    <div className="p-8 min-h-screen">
      <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 py-2 px-8 rounded-lg shadow-lg flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-white" />
          <span className="text-xl text-white">{user?.email}</span>
        </div>

        <div className="bg-white text-slate-600 rounded-lg px-4 py-2 shadow-md">
          <p className="text-lg font-medium flex items-center justify-center gap-2">
            <FaCoins></FaCoins> Total Price:{" "}
            <span className="font-semibold text-gray-900">{totalPrice}$</span>
          </p>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="overflow-x-auto shadow-2xl rounded-lg bg-white p-4">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-slate-500 to-slate-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">#</th>
              <th className="px-6 py-3 text-left font-semibold">Image</th>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Category</th>
              <th className="px-6 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {userCart &&
              userCart.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-100 transition-all duration-300"
                >
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 rounded-full overflow-hidden shadow-lg">
                        <img
                          src={item.image || "https://via.placeholder.com/150"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.price}$</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-5 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
