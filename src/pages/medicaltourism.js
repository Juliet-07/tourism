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
        <div className="bg-gradient-to-r from-[#535353] to-[#535353] w-full h-[331px] mx-auto relative flex items-center justify-center text-white">
          <img
            src={Doctors}
            className="w-full h-full object-cover bg-center bg-contain absolute mix-blend-overlay"
            alt="/"
          />
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center md:text-left">
            Medical Tourism in Germany
          </h1>
        </div>
        <div className="flex items-center justify-center relative top-[44px]">
          <div className="w-[378px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>Select a practice</p>
          </div>
          <div className="w-[378px] h-[58px] border border-[#ffc700] bg-white flex items-center">
            <p>check in, check out</p>
          </div>
          <div className="w-[163px] h-[58px] bg-[#f27b0d] flex items-center justify-center text-white font-bold">
            <p>Search</p>
          </div>
        </div>
        <div className="relative top-[100px] flex items-center justify-between">
          <p className="m-4 p-4 font-bold text-3xl">How to go for treatment</p>
          <div className="m-4 p-2 w-[331px] h-[43px] bg-[#f27b0d] text-white font-semibold text-center">
            Find a Specialized Hospital Treatment
          </div>
        </div>
        <div className="relative top-[110px] flex items-center justify-center">
          <img src={Tools} className="w-[1200px] h-[477px]" />
          <div className="absolute top-[35px] left-[65px] bg-white w-[44px] h-[44px] border rounded-full text-center p-2 font-semibold">
            <p>MF</p>
          </div>
          <p className="font-bold absolute top-[40px] left-[120px] text-xl">
            Medical tourism in Germany
          </p>
        </div>
      </div>
      <div className="w-[970px] h-full mb-20 relative top-36 left-10">
        <h2 className="font-bold text-3xl">
          Find the best in Germany with just a click
        </h2>
        <p className="text-[20px] mb-4">
          People come to Germany to find speciality on:
        </p>
        <ul className="list-disc relative left-10">
          <li className="text-xl p-2">
            <span className="font-bold">Oncology:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
          <li className="text-xl p-2">
            <span className="font-bold">Cardiosurgery:</span>Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </li>
          <li className="text-xl p-2">
            <span className="font-bold">Neurosugery:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
          <li className="text-xl p-2">
            <span className="font-bold">Orthpedics:</span>Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </li>
        </ul>
      </div>
      <div className="bg-[#f27b0d] w-[331px] h-[43px] text-white flex items-center justify-center font-semibold relative top-20 left-10 mb-10">Find a Specialized Hospital Treatment</div>
      <Footer />
    </>
  );
};

export default MedicalTourism;
