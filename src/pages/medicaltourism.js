import React from "react";
import Navbar from "../components/Navbar";
import Doctors from "../assets/doctors.jpg";
import Tools from "../assets/doctors-tools.jpeg";
import Footer from "../components/Footer";

const MedicalTourism = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[92px] md:h-[331px] mx-auto relative flex items-center justify-center text-white">
          <img
            src={Doctors}
            className="w-full h-full object-cover bg-center bg-contain absolute mix-blend-overlay"
            alt="/"
          />
          <div className="w-[251px] md:w-[875px] h-[58px] md:h-[72px] text-white text-2xl md:text-6xl font-bold">
            Medical Tourism in Germany
          </div>
        </div>
        {/* <div className="flex items-center justify-center relative top-[44px]">
          <div className="w-[378px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>Select a practice</p>
          </div>
          <div className="w-[378px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>check in, check out</p>
          </div>
          <div className="w-[163px] h-[58px] bg-[#f27b0d] flex items-center justify-center text-white font-bold">
            <p>Search</p>
          </div>
        </div> */}
        <div className="relative top-[50px] flex flex-col md:flex-row md:items-center md:justify-between m-6">
          <p className="font-bold text-xl md:text-3xl">
            How to go for treatment
          </p>
          <div className="w-[256px] md:w-[331px] h-[39px] md:h-[43px] bg-[#f27b0d] text-center text-white font-bold py-2 mt-2 md:mt-0">
            <p className="text-[12px] md:text-[16px]">
              Find a Specialized Hospital Treatment
            </p>
          </div>
        </div>
        <div className="bg-red-700 w-[327px] md:w-[1250px] h-[181px] md:h-[477px] my-20 mx-10 md:mx-4">
          {/* <img src={Tools} className="w-[1200px] h-[477px]" />
          <div className="absolute top-[35px] left-[65px] bg-white w-[44px] h-[44px] border rounded-full text-center p-2 font-semibold">
            <p>MF</p>
          </div>
          <p className="font-bold absolute top-[40px] left-[120px] text-xl">
            Medical tourism in Germany
          </p> */}
        </div>
      </div>
      <div className="w-[327px] md:w-[970px] h-full mb-20 relative md:left-10">
        <div className="relative left-10 mb-4">
          <h2 className="font-bold text-[16px] md:text-3xl">
            Find the best in Germany with just a click
          </h2>
          <p className="text-sm md:text-[20px]">
            People come to Germany to find speciality on:
          </p>
        </div>

        <ul className="list-disc relative left-10">
          <li className="text-sm md:text-xl p-2">
            <span className="font-bold">Oncology:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
          <li className="text-sm md:text-xl p-2">
            <span className="font-bold">Cardiosurgery:</span>Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </li>
          <li className="text-sm md:text-xl p-2">
            <span className="font-bold">Neurosugery:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
          <li className="text-sm md:text-xl p-2">
            <span className="font-bold">Orthpedics:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
        </ul>
      </div>
      <div className="bg-[#f27b0d] w-[256px] md:w-[331px] h-[39px] md:h-[43px] text-white p-3 text-[12px] font-semibold relative left-10 mb-10">
        Find a Specialized Hospital Treatment
      </div>
      <Footer />
    </>
  );
};

export default MedicalTourism;
