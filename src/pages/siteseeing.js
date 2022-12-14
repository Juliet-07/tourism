import React from "react";
import Navbar from "../components/Navbar";
import { AiFillStar } from "react-icons/ai";
import Frankfurt from "../assets/frankfurt.jpg";
import Munich from "../assets/munich.jpg";
import Berlin from "../assets/berlin.jpg";
import Hamburg from "../assets/hamburg.jpg";
import Reichstag from "../assets/reichstag.jpg";
import Marienplatz from "../assets/marienplatz.jpg";
import Miniatur from "../assets/miniatur.jpg";
import Cathedral from "../assets/cathedral.jpg";
import Footer from "../components/Footer";

const Siteseeing = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[92px] md:h-[250px] bg-cover bg-center bg-[url(./assets/beautiful-night-city.jpg)] m-auto flex items-center">
          <h1 className="text-white text-2xl md:text-6xl font-bold px-6">
            Places to visit in Germany
          </h1>
        </div>
        <div className="flex items-center justify-center my-6">
          <form className="px-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search cities or places"
                className="w-[327px] md:w-[740px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
              />
            </div>
          </form>
        </div>
        <div className="w-[134px] md:w-[214px] h-[24px] md:h-[39px] font-bold text-xl md:text-3xl mx-6 my-2">
          <p>Popular cities</p>
        </div>
        <div className="m-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src={Frankfurt}
              className="w-[157px] md:w-[302px] h-[167px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-6 md:bottom-12 left-4 md:left-8 font-bold text-white text-lg md:text-3xl">
              Frankfurt
            </p>
            <p className="absolute bottom-3 md:bottom-8 left-4 md:left-8 font-bold text-white text-sm">
              Hesse, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Munich}
              className="w-[157px] md:w-[302px] h-[167px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-6 md:bottom-12 left-4 md:left-8 font-bold text-white text-lg md:text-3xl">
              Munich
            </p>
            <p className="absolute bottom-3 md:bottom-8 left-4 md:left-8 font-bold text-white text-sm">
              Bavaria, Germany
            </p>
          </div>
          <div className="relative">
            <img
              src={Berlin}
              className="w-[157px] md:w-[302px] h-[167px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-6 md:bottom-12 left-4 md:left-8 font-bold text-white text-lg md:text-3xl">
              Berlin
            </p>
            <p className="absolute bottom-3 md:bottom-8 left-4 md:left-8 font-bold text-white text-sm">
              Germany, Europe
            </p>
          </div>
          <div className="relative">
            <img
              src={Hamburg}
              className="w-[157px] md:w-[302px] h-[167px] md:h-[320px] rounded"
              alt="/"
            />
            <p className="absolute bottom-6 md:bottom-12 left-4 md:left-8 font-bold text-white text-lg md:text-3xl">
              Hamburg
            </p>
            <p className="absolute bottom-3 md:bottom-8 left-4 md:left-8 font-bold text-white text-sm">
              Germany, Europe
            </p>
          </div>
        </div>
        <div className="w-[268px] md:w-[589px] h-[24px] md:h-[53px] font-bold text-xl md:text-4xl mx-6 mt-20 mb-4">
          <p>Top Attractions in Germany</p>
        </div>
        <div className="mx-6 grid md:grid-cols-2 gap-4">
          <div className="w-[327px] md:w-[590px] h-[450px] md:h-[760px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-[230px] md:h-[497px]"
              src={Reichstag}
              alt="/"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl md:text-4xl">
                Reichstag Building
              </h1>
              <div className="flex items-center mb-2 pt-1">
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
          <div className="w-[327px] md:w-[590px] h-[450px] md:h-[760px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-[230px] md:h-[497px]"
              src={Marienplatz}
              alt="/"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl md:text-4xl">Marienplatz</h1>
              <div className="flex items-center mb-2 pt-1">
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
          <div className="w-[327px] md:w-[590px] h-[489px] md:h-[760px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-[230px] md:h-[497px]"
              src={Miniatur}
              alt="/"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl md:text-4xl">
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
          <div className="w-[327px] md:w-[590px] h-[489px] md:h-[760px] rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-[230px] md:h-[497px]"
              src={Cathedral}
              alt="/"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl md:text-4xl">
                Cologne Cathedral
              </h1>
              <div className="flex items-center mb-2 pt-1">
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
      <Footer />
    </>
  );
};
export default Siteseeing;
