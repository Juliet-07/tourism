import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MedicalTourism = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[331px] bg-center bg-cover bg-fixed p-24 bg-[url(./assets/doctors.jpg)] m-auto">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center md:text-left">
            Medical Tourism in Germany
          </h1>
        </div>
        <div>
          <p>how to go for treatment</p>
          <p>find a specialized hospital</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MedicalTourism;
