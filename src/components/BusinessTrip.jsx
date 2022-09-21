import React from "react";
import Trip from "../assets/businesstrip.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const BusinessTrip = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[724px] mx-auto relative flex flex-col items-center justify-center text-white">
        <img
          src={Trip}
          className="w-full h-full object-cover bg-center absolute mix-blend-overlay"
          alt="/"
        />
        <h1 className="text-center font-bold text-2xl md:text-6xl">
          Business Trip
        </h1>
        <p className="text-lg text-center text-slate-300 mt-4">
          Make your next business trip memorable
        </p>
        <div className="mt-10">
          <button
            className="w-[150px] h-[35px] bg-[#F27B0D] text-white font-bold py-2 px-4 inline-flex items-center justify-center"
            type="button"
          >
            <span>Explore</span>
            <AiOutlineArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessTrip;
