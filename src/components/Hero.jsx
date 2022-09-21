import React from "react";
import Explore from "../assets/explore.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[724px] mx-auto relative flex flex-col items-center justify-center text-white">
        <img
          src={Explore}
          className="w-full h-full object-cover absolute bg-center mix-blend-overlay"
          alt="/"
        />
        <h1 className="text-center font-bold text-2xl md:text-6xl">
          Explore Germany and All Its Beauty
        </h1>
        <p className="text-lg text-center text-slate-300 mt-4">
          See Germany and experience the joy that come with nature, medicine and
          tourism.
          <br /> Make your business trip worthwhile.
        </p>
      </div>
    </div>
  );
};

export default Hero;
