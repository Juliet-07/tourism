import React from "react";
import Navbar from "../components/Navbar";
import Man from "../assets/frame358.png";
import Man1 from "../assets/frame371.png";
import Plane1 from "../assets/frame372.png";
import Plane2 from "../assets/frame373.png";
import Plane3 from "../assets/frame374.png";
import Plane4 from "../assets/frame375.png";
import Footer from "../components/Footer";

const BusinessTrip = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-foll h-[250px] bg-cover bg-center p-24 bg-[url(./assets/ceo.png)] m-auto">
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
            Business trips
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
            <p>1 adolt, 0 children, 1 room</p>
          </div>
          <div className="w-[163px] h-[58px] bg-[#f27b0d] flex items-center justify-center text-white font-bold">
            <p>Search</p>
          </div>
        </div>
        <div className="md:w-[200px] md:h-[39px] font-semibold text-2xl md:text-3xl mx-6 mt-20">
          <p>Who we are?</p>
        </div>
        <div className="md:w-[1105px] md:h-[116px] mx-6 mb-10">
          <p className="font-normal md:text-2xl">
            We are GuideMe, a company specialized in establishing companies and
            business development;
            <br /> we seek to provide foll support to investors and
            entrepreneurs to help them establish their
            <br /> businesses in Germany. By providing a foll range of services
            that aim to provide innovative
            <br /> solutions to guide our local and international clients and
            put them on the right track.{" "}
          </p>
        </div>

        <div className="md:w-[214px] md:h-[39px] font-semibold text-2xl md:text-3xl mx-6 my-4">
          <p>Our Services?</p>
        </div>
        <div className="flex">
          <ol className="list-decimal p-2 text-xl w-[678px] h-[944px] ml-10">
            <li className="mb-10">
              A service for organizing conferences and events for the company.
            </li>
            <li className="mb-10">
              The service for receiving all the various commercial delegations
              from the airport, and good courteous reception.
            </li>
            <li className="mb-10">
              Communication service with any company in the world in various
              fields and languages.
            </li>
            <li className="mb-10">
              Services for establishing start-up companies and finalizing all
              procedures.
            </li>
            <li className="mb-10">
              Marketing and promotion service for the company, through audio or
              video advertisements.
            </li>
            <li className="mb-10">
              All legal services related to contracts and ensuring their
              validity.
            </li>
            <li className="mb-10">
              Insurance services for equipment and facilities of a company.
            </li>
            <li className="mb-10">
              Advertising services such as company introduction firms and
              others.
            </li>
            <li className="mb-10">
              Translation services for all languages of the world. Providing
              drivers with drivers in several different languages.
            </li>
            <li className="mb-10">
              The service of providing private guards through companies
              specialized in the field of security.
            </li>
            <li>
              We also provide all services related to the establishment of
              start-up companies and contracts for all tenders.
            </li>
          </ol>
          <div className="flex items-center justify-between ml-20 relative top-2">
            <img
              src={Man}
              alt="/"
              className="w-[120px] h-[765px] relative top-20 mr-[20px]"
            />
            <img src={Man1} alt="/" className="w-[210px] h-[765px]" />
          </div>
        </div>
        <div className="flex items-center justify-between m-6">
          <div className="w-[268px] md:w-[278px] h-[24px] md:h-[39px] font-semibold text-xl md:text-3xl">
            <p>Book our services</p>
          </div>
          <div>View all</div>
        </div>

        <div className="m-4 grid grid-cols-4 gap-4">
          <div className="w-[302px] h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Plane1}
              alt="/"
              className="w-[231px] h-[153px] relative top-[24px] left-[24px]"
            />
            <p className="relative top-20 left-4 text-xs text-[#4b492b] font-semibold">
              Boeing 709
            </p>
            <div className="flex items-center justify-around relative top-20">
              <p className="text-xl font-semibold">$500</p>
              <button className="bg-[#faf4ef] w-[123px] h-[41px] text-[#f27b0d] font-semibold px-6">
                Rent now
              </button>
            </div>
          </div>
          <div className="w-[302px] h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Plane2}
              alt="/"
              className="w-[231px] h-[153px] relative top-[24px] left-[24px]"
            />
            <p className="relative top-20 left-4 text-xs text-[#4b492b] font-semibold">
              Boeing 709
            </p>
            <div className="flex items-center justify-around relative top-20">
              <p className="text-xl font-semibold">$500</p>
              <button className="bg-[#faf4ef] w-[123px] h-[41px] text-[#f27b0d] font-semibold px-6">
                Rent now
              </button>
            </div>
          </div>
          <div className="w-[302px] h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Plane3}
              alt="/"
              className="w-[231px] h-[153px] relative top-[24px] left-[24px]"
            />
            <p className="relative top-20 left-4 text-xs text-[#4b492b] font-semibold">
              Boeing 709
            </p>
            <div className="flex items-center justify-around relative top-20">
              <p className="text-xl font-semibold">$500</p>
              <button className="bg-[#faf4ef] w-[123px] h-[41px] text-[#f27b0d] font-semibold px-6">
                Rent now
              </button>
            </div>
          </div>
          <div className="w-[302px] h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Plane4}
              alt="/"
              className="w-[231px] h-[153px] relative top-[24px] left-[24px]"
            />
            <p className="relative top-20 left-4 text-xs text-[#4b492b] font-semibold">
              Boeing 709
            </p>
            <div className="flex items-center justify-around relative top-20">
              <p className="text-xl font-semibold">$500</p>
              <button className="bg-[#faf4ef] w-[123px] h-[41px] text-[#f27b0d] font-semibold px-6">
                Rent now
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 relative top-10 flex items-center justify-center">
          <button className="bg-[#f27b0d] w-[512px] h-[90px] font-semibold text-white text-xl">
            Send us a message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessTrip;
