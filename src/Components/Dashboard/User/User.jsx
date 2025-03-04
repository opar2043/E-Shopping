import { Toaster } from "react-hot-toast";
import useUser from "../../Hooks/useUser";

const User = () => {
  const [user] = useUser();
  console.log(user);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">All Users</h2>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Avatar</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">E-Mail</th>
              <th className="px-6 py-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {user &&
              user.map((item, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img
                            src={item.avatar || "https://via.placeholder.com/150"}
                            alt="User Avatar"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className=" ">
                    <span className="text-blue-600 font-semibold bg-blue-300/25 rounded-lg px-3 text-sm py-1">{item.role || "User"}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
