import React from "react";
import Navbar from "../components/Navbar";
import { AiFillStar } from "react-icons/ai";
import Red from "../assets/frame111.png";
import BMW from "../assets/frame112.png";
import Ash from "../assets/frame113.png";
import Benz from "../assets/frame114.png";
import Rectangle from "../assets/rectangle.png";
import Footer from "../components/Footer";

const Carrenting = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[250px] bg-cover bg-center p-24 bg-[url(./assets/pexelphoto.png)] m-auto">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
            Best Rental Cars
          </h1>
        </div>
        <div className="flex items-center justify-center relative top-[40px]">
          <div className="w-[396px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>Enter preferred city</p>
          </div>
          <div className="w-[268px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>check in, check out</p>
          </div>
          <div className="w-[312px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>1 adult, 0 children, 1 room</p>
          </div>
          <div className="w-[163px] h-[58px] bg-[#f27b0d] flex items-center justify-center text-white font-bold">
            <p>Search</p>
          </div>
        </div>
        <h2 className="pl-8 pt-8 mt-10 font-bold text-2xl md:text-3xl text-center">
          Most demanded cars
        </h2>
        <div className="m-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src={Red}
              className="md:w-[302px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-10 left-8 font-semibold text-white text-[20px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-6 left-8 font-semibold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={BMW}
              className="md:w-[302px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-10 left-8 font-semibold text-white text-[20px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-6 left-8 font-semibold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Ash}
              className="md:w-[302px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-10 left-8 font-semibold text-white text-[20px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-6 left-8 font-semibold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Benz}
              className="md:w-[302px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-10 left-8 font-semibold text-white text-[20px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-6 left-8 font-semibold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
        </div>
        <h1 className="px-8 py-6 font-bold text-2xl md:text-3xl text-center">
          Most Rated Cars
        </h1>
        <div className="m-4 grid grid-cols-2 gap-[24px]">
          <div className="md:w-[609px] md:h:[758px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Rectangle} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">Mercedes Benz</h1>
              <div className="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                This is Berlin’s most wanted and most luxurious car, befitting
                for any occasion of your choice.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#EADACC] w-[143px] h-[43px] text-[#f27b0d] font-bold">
                Rent now
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="md:w-[609px] md:h:[758px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Rectangle} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">Mercedes Benz</h1>
              <div className="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                This is Berlin’s most wanted and most luxurious car, befitting
                for any occasion of your choice.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#EADACC] w-[143px] h-[43px] text-[#f27b0d] font-bold">
                Rent now
              </button>
            </div>
          </div>
          <div className="md:w-[609px] md:h:[758px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Rectangle} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">Mercedes Benz</h1>
              <div class="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                This is Berlin’s most wanted and most luxurious car, befitting
                for any occasion of your choice.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#EADACC] w-[143px] h-[43px] text-[#f27b0d] font-bold">
                Rent now
              </button>
            </div>
          </div>
          <div className="md:w-[609px] md:h:[758px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Rectangle} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">Mercedes Benz</h1>
              <div className="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                This is Berlin’s most wanted and most luxurious car, befitting
                for any occasion of your choice.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#EADACC] w-[143px] h-[43px] text-[#f27b0d] font-bold">
                Rent now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Carrenting;
