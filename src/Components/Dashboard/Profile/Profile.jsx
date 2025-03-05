import useAuth from "../../Hooks/useAuth";
import { FaUserCircle, FaEnvelope, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaEdit, FaDatabase } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-100 py-10 px-4">
      <h2 className="text-3xl font-semibold text-slate-800 mb-6 gap-2 flex items-center justify-center"><FaDatabase></FaDatabase> User Dashboard</h2>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-300 shadow-md">
            <img
              src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div> 

          {/* User Info */}
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <FaUserCircle className="text-slate-600" />
            {user?.displayName || "Rijoan Rashid Opar"} <span>(user)</span>
          </h2>

          <p className="text-slate-600 text-sm flex items-center gap-2">
            <FaEnvelope className="text-slate-500" />
            E-mail: <span className="font-medium">{user?.email}</span>
          </p>

          <p className="text-slate-600 text-sm flex items-center gap-2">
            {user?.emailVerified ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            E-mail Verified: 
            <span className={`font-medium ${user?.emailVerified ? "text-green-600" : "text-red-500"}`}>
              {user?.emailVerified ? "Verified" : "Not Verified"}
            </span>
          </p>

          <p className="text-slate-600 text-sm flex items-center gap-2">
            <FaCalendarAlt className="text-slate-500" />
            Created At: <span className="font-medium">{user?.metadata?.creationTime}</span>
          </p>

          {/* E-commerce Motivational Text */}
          <p className="text-slate-700 text-center text-sm mt-3 px-4">
            "Shop smarter, shop faster! Enjoy a seamless and personalized shopping experience with exclusive deals and secure checkout."
          </p>

          {/* Edit Profile Button */}
          <button className="mt-4 px-5 py-2 bg-slate-800 text-white rounded-lg shadow flex items-center gap-2 hover:bg-slate-700 transition">
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
