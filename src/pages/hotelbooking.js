import React from "react";
import Navbar from "../components/Navbar";
import Reichstag from "../assets/reichstag.jpg";
import BerlinWall from "../assets/berlin-wall.jpeg";
import Brandenburg from "../assets/brandenburg.jpg";
import { BiChevronDown } from "react-icons/bi";
import Footer from "../components/Footer";

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
      <div className="w-[285px] relative left-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Hotels near sights
        </h2>
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="w-[383px] h-[670px] rounded overflow-hidden shadow-lg">
          <img className="w-full h-[383px]" src={Reichstag} alt="/" />
          <div className="px-6 py-4">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">
              Reichstag Building
            </h1>
            <p className="text-black text-[18px]">
              Situated just north of the Brandenburg Gate, this building houses
              the German Parliament and was the seat of the Weimar Republic
              government until it was seized by the Nazis in 1933.
            </p>
            <div className="flex mt-4 text-black text-[18px]">
              <p>Read more</p>
              <BiChevronDown size={30} />
            </div>
          </div>
        </div>
        <div className="w-[383px] h-[670px] rounded overflow-hidden shadow-lg">
          <img className="w-full h-[383px]" src={BerlinWall} alt="/" />
          <div className="px-6 py-4">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">
              Memorial of the Berlin wall
            </h1>
            <p className="text-black text-[18px]">
              The Berlin Wall Memorial is the central memorial site of German
              division located in the middle of the capital. Situated at the
              historic site...
            </p>
            <div className="flex mt-4 text-black text-[18px]">
              <p>Read more</p>
              <BiChevronDown size={30} />
            </div>
          </div>
        </div>
        <div className="w-[383px] h-[670px] rounded overflow-hidden shadow-lg">
          <img className="w-full h-[383px]" src={Brandenburg} alt="/" />
          <div className="px-6 py-4">
            <h1 className="font-bold text-2xl md:text-3xl mb-4">
              Brandenburg Gate
            </h1>
            <p className="text-black text-[18px]">
              Located in no-man's land between East and West Germany during the
              Cold War, this famous monument, built during the 18th-century
              reign of Friedrich Wilhelm II, has long...
            </p>
            <div className="flex mt-4 text-black text-[18px]">
              <p>Read more</p>
              <BiChevronDown size={30} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HotelBooking;
