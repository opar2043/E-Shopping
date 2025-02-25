import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { IoGitNetwork } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";

const Choosw = () => {
  return (
    <div className="my-14 md:my-20">
      <h2 className="text-2xl mb-4 md:mb-10 mt-10 md:text-3xl font-bold flex justify-start items-center">
        WHY <span className="text-gray-600">CHOOSE US</span>
        <div className="border-t-2 ml-1 mt-2 border-gray-900 w-12 sm:w-16"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-2 justify-center items-center p-7 border shadow rounded py-10">
          <h2 className="text-xl font-extrabold flex gap-2 justify-center items-center mb-2">
            <IoMdDoneAll className="text-2xl" /> Qualityfull Product{" "}
          </h2>
          <p className="text-gray-600 px-3 text-center text-sm">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center p-7 border shadow rounded py-10">
          <h2 className="text-xl font-extrabold flex gap-2 justify-center items-center mb-2">
            <IoGitNetwork className="text-2xl" /> Convenience{" "}
          </h2>
          <p className="text-gray-600 px-3 text-center text-sm">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center p-7 border shadow rounded py-10">
          <h2 className="text-xl font-extrabold flex gap-2 justify-center items-center mb-2">
            <MdHomeRepairService className="text-2xl" /> Exceptional Customer
            Service{" "}
          </h2>
          <p className="text-gray-600 px-3 text-center text-sm">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choosw;
