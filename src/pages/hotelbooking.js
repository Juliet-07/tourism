import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const HotelBooking = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[331px] bg-cover bg-center p-24 bg-[url(./assets/beautiful-night-city.jpg)] m-auto">
        <h1 className="text-white text-2xl md:text-6xl font-bold text-center md:text-left">
          Germany hotels and places to stay
        </h1>
        <div className="flex items-center justify-center relative top-[58px]">
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
      </div>
      <div className="w-[230px] h-[39px] relative top-[60px] left-6">
        <h2 className="font-bold text-2xl md:text-3xl">Popular Hotels</h2>
      </div>
      <div className="w-full py-20 pl-4 grid grid-cols-2 gap-4">
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
      {/* <div className="w-[285px] h-[39px] relative top-[60px] left-6 bg-green-500">
        <h2 className="font-bold text-2xl md:text-3xl">Hotels near sights</h2>
      </div> */}
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel />
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default HotelBooking;
