import React from "react";
import Title from "../Shared/Title";

const Subscribe = () => {
  return (
    <div className="mb-10 mt-8 md:mt-20">
      <Title head={"Subscribe now & "} head2={"get 20% off"}></Title>
      <div className="flex justify-center items-center ">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="py-3 px-4 rounded outline-none w-full md:w-1/3 border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-600 "
        />
        <button className="btn bg-black py-4 px-6 rounded text-white hover:bg-gray-800 ">
          Subscribe Us
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
