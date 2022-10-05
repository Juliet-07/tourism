import React from "react";
import Navbar from "../components/Navbar";
import { AiFillStar } from "react-icons/ai";
import Benz from "../assets/benz.jpeg";
import Frankfurt from "../assets/frankfurt.jpg";
import Munich from "../assets/munich.jpg";
import Berlin from "../assets/berlin.jpg";
import Hamburg from "../assets/hamburg.jpg";
import Reichstag from "../assets/reichstag.jpg";
import Marienplatz from "../assets/marienplatz.jpg";
import Miniatur from "../assets/miniatur.jpg";
import Cathedral from "../assets/cathedral.jpg";
import Footer from "../components/Footer";

const Carrenting = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[250px] bg-cover bg-center p-24 bg-[url(./assets/beautiful-night-city.jpg)] m-auto">
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
        <h2 className="pl-8 pt-8 mt-10 font-bold text-2xl md:text-3xl">
          Most demanded cars
        </h2>
        <div className="m-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src={Frankfurt}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative bg-[#000000]">
            <img
              src={Munich}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Berlin}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Hamburg}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Mercedes Benz
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
        </div>
        <h1 className="px-8 py-10 font-bold text-3xl md:text-4xl">
          Most Rated Cars
        </h1>
        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="md:w-[550px] md:h:[700px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Benz} alt="/" />
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
          <div className="md:w-[550px] md:h:[700px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Benz} alt="/" />
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
          <div className="md:w-[550px] md:h:[700px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Benz} alt="/" />
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
          <div className="md:w-[550px] md:h:[700px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[450px]" src={Benz} alt="/" />
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
