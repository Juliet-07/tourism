import React from "react";
import Navbar from "../components/Navbar";
import { AiFillStar, AiFillCar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
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
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Best Rental Cars
          </h1>
        </div>
        <div className="flex items-center justify-center relative top-[40px]">
          <div className="w-[273px] h-[58px] border border-[#ffc700] bg-white flex items-center justify-center text-[#6f6b5d]">
            <IoLocationSharp className="mr-4" />
            <p>Current Location</p>
          </div>
          {/* <div className="w-[273px] h-[58px] border border-[#ffc700] bg-white flex items-center"> */}
          <select className="w-[273px] h-[58px] border border-[#ffc700] bg-white flex items-center justify-center">
            <option selected>Preferred car model</option>
            <option value="US">Benz</option>
            <option value="CA">Range Rover</option>
            <option value="FR">Nissan</option>
            <option value="DE">Toyota</option>
          </select>
          {/* </div> */}
          <select className="w-[273px] h-[58px] border border-[#ffc700] bg-white flex items-center justify-center">
            <option selected>Budget Range</option>
            <option value="US">100</option>
            <option value="CA">200</option>
            <option value="FR">300</option>
            <option value="DE">400</option>
          </select>
          <select className="w-[232px] h-[58px] border border-[#ffc700] bg-white flex items-center justify-center">
            <option selected>Preferred date</option>
            <option value="US">Benz</option>
            <option value="CA">Range Rover</option>
            <option value="FR">Nissan</option>
            <option value="DE">Toyota</option>
          </select>
          <div className="w-[163px] h-[58px] bg-[#f27b0d] flex items-center justify-center text-white font-bold">
            <p>Search</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[200px] md:mt-10 mx-6">
          <div className="w-[176px] md:w-[327px] h-[24px] md:h-[39px] font-semibold text-2xl md:text-3xl mt-10 mx-6">
            Most demanded cars
          </div>
          <div>View all</div>
        </div>
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
        <div className="flex items-center justify-between mt-[200px] md:mt-10 mx-6">
          <div className="w-[176px] md:w-[243px] h-[24px] md:h-[39px] font-semibold text-2xl md:text-3xl mt-10 mx-6">
            Most Rated Cars
          </div>
          <div>View all</div>
        </div>
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
