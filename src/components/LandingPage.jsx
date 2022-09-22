import React from "react";
import Explore from "../assets/explore.png";
import Medicals from "../assets/medical.png";
import Site from "../assets/sightseeing.png";
import Trip from "../assets/businesstrip.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingPage = () => {
  return (
    <div>
      {/* Hero */}
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
      {/* Hero */}
      <div>
        <p>supported by</p>
        <p>logo</p>
        <p>logo</p>
        <p>logo</p>
      </div>
      {/* Medical */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[724px] mx-auto relative flex flex-col items-center justify-center text-white">
          <img
            src={Medicals}
            className="w-full h-full object-cover bg-center absolute mix-blend-overlay"
            alt="/"
          />
          <h1 className="text-center font-bold text-2xl md:text-6xl">
            Medical Tourism
          </h1>
          <p className="text-lg text-center text-slate-300 mt-4">
            Get a chance to visit a doctor on your next visit to Germany.
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
      {/* Medical */}
      {/* Siteseeing */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[724px] mx-auto relative flex flex-col items-center justify-center text-white">
          <img
            src={Site}
            className="w-full h-full object-cover bg-center absolute mix-blend-overlay"
            alt="/"
          />
          <h1 className="text-center font-bold text-2xl md:text-6xl">
            Germany Siteseeing
          </h1>
          <p className="text-lg text-center text-slate-300 mt-4">
            Experience siteseeing at its best. Feel the joy of nature and
            history
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
      {/* Siteseeing */}
      {/* Business Trip */}
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
      {/* Business Trip */}
    </div>
  );
};

export default LandingPage;
