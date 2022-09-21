import React from "react";
import Navbar from "./components/Navbar";
import { AiFillStar } from "react-icons/ai";
import Frankfurt from "./assets/frankfurt.jpg";
import Munich from "./assets/munich.jpg";
import Berlin from "./assets/berlin.jpg";
import Hamburg from "./assets/hamburg.jpg";
import Reichstag from "./assets/reichstag.jpg";
import Marienplatz from "./assets/marienplatz.jpg";
import Miniatur from "./assets/miniatur.jpg";
import Cathedral from "./assets/cathedral.jpg";

const Siteseeing = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[250px] bg-cover bg-center p-24 bg-[url(./assets/beautiful-night-city.jpg)] m-auto">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center md:text-left">
            Places to visit in Germany
          </h1>
        </div>
        <div>Input here</div>
        <h2 className="pl-8 pt-8 font-bold text-2xl md:text-3xl">
          Popular cities
        </h2>
        <div className="m-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src={Frankfurt}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Frankfurt
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Munich}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Munich
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Bavaria, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Berlin}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Berlin
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Germany, Europe
            </p>
          </div>
          <div className="relative">
            <img
              src={Hamburg}
              className="md:w-[302px] md:h-[302px] rounded"
              alt="/"
            />
            <p className="absolute bottom-24 left-8 font-bold text-white text-[32px]">
              Hamburg
            </p>
            <p className="absolute bottom-20 left-8 font-bold text-white text-sm">
              Germany, Europe
            </p>
          </div>
        </div>
        <h1 className="pl-8 pt-10 font-bold text-3xl md:text-4xl">
          Top Attractions in Germany
        </h1>
        <div className="m-10 p-4 grid grid-cols-2 gap-4">
          <div className="md:w-[609px] md:h:[758px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[497px]" src={Reichstag} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">
                Reichstag Building
              </h1>
              <div class="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                This is Berlin's Parliament Building that was restored after
                World War II.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
                Book now
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="md:w-[590px] md:h:[760px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[497px]" src={Marienplatz} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">Marienplatz</h1>
              <div class="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                Marienplatz is the soul of Munich and site of it's beginnings in
                1158.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
                Book now
              </button>
            </div>
          </div>
          <div className="md:w-[590px] md:h:[760px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[497px]" src={Miniatur} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">
                Miniatur Wunderland
              </h1>
              <div class="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                Located in the old, but now revitalised warehouse area of
                Hamburg, Miniatur Wunderland is the world's largest model.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
                Book now
              </button>
            </div>
          </div>
          <div className="md:w-[590px] md:h:[760px] rounded overflow-hidden shadow-lg">
            <img className="w-full h-[497px]" src={Cathedral} alt="/" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl md:text-4xl">
                Cologne Cathedral
              </h1>
              <div class="flex items-center mb-2 pt-1">
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
                <AiFillStar size={15} color="yellow" />
              </div>
              <p className="text-black text-base">
                Construction on this building project of the middle Ages stared
                1248 and reportedly took over 600 years to complete.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Siteseeing;
