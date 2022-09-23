import React from "react";
import Navbar from "../components/Navbar";
import { AiFillStar } from "react-icons/ai";

import Reichstag from "../assets/reichstag.jpg";
import Marienplatz from "../assets/marienplatz.jpg";
import Miniatur from "../assets/miniatur.jpg";
import Cathedral from "../assets/cathedral.jpg";
import Footer from "../components/Footer";

const HotelBooking = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[250px] bg-cover bg-center p-24 bg-[url(./assets/beautiful-night-city.jpg)] m-auto">
        <h1 className="text-white text-2xl md:text-6xl font-bold text-center md:text-left">
          Germany hotels and places to stay
        </h1>
      </div>
      <div className="max-w-sm h-10 relative top-16 left-20">
        <h2 className="font-bold text-2xl md:text-3xl">Popular Hotels</h2>
      </div>
      <div className="container grid grid-cols-2  gap-4 relative top-[100px] left-20">
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/hotelbrandies.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Hotel Brandies</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/goldhotel.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Gold Hotel</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/goldhotel.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Gold Hotel</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/goldhotel.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Gold Hotel</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/goldhotel.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Gold Hotel</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
        <div className="flex w-[619px] h-[190px] bg-white">
          <div className="w-[232px] bg-cover bg-center bg-[url(./assets/goldhotel.jpeg)]" />
          <div className="w-[387px] border-r border-b border-l border-white lg:border-l-0 lg:border-t lg:border-white bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
            <h2 className="font-semibold text-2xl">Gold Hotel</h2>
            <p>,cnkvnlfmvlv</p>
            <p>dfhvbkfdnvlfdnvl</p>
            <button className="bg-[#F27B07] w-[143px] h-[43px] text-white font-bold">
              View deals
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HotelBooking;
