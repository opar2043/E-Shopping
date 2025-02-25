import React from "react";

const MoreC = () => {
  return (
    <div className="p-6 md:p-10  rounded-lg shadow-md my-10 md:my-20">
      <h2 className="text-xl font-semibold text-slate-800">Company Information</h2>
      <p className="text-slate-800 mt-2">Learn more about our location and activities.</p>

      {/* Company Location */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-slate-900">📍 Location</h3>
        <p className="text-gray-800">123 Business Street, Dhaka, Bangladesh</p>
      </div>

      {/* Company Activities */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-slate-900">🚀 Activities</h3>
        <ul className="list-disc list-inside text-slate-800">
          <li>Software Development</li>
          <li>Web & Mobile App Solutions</li>
          <li>Cloud Services & AI Integration</li>
          <li>IT Consulting & Training</li>
        </ul>
      </div>
    </div>
  );
};

export default MoreC;

