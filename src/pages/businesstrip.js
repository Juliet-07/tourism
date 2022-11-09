import React from "react";
import Navbar from "../components/Navbar";
import Man from "../assets/frame358.png";
import Man1 from "../assets/frame371.png";
import Event from "../assets/frame387.png";
import Legal from "../assets/frame389.png";
import Reception from "../assets/frame391.png";
import Comm from "../assets/frame393.png";
import Security from "../assets/frame388.png";
import Marketing from "../assets/frame390.png";
import Insurance from "../assets/frame392.png";
import Advert from "../assets/frame394.png";
import Footer from "../components/Footer";

const BusinessTrip = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-[90px] md:h-[250px] bg-cover bg-center p-24 bg-[url(./assets/ceo.png)] m-auto">
          <h1 className="text-white text-2xl md:text-6xl font-bold">
            Business trips
          </h1>
        </div>
        {/* <div className="flex items-center justify-center relative top-[40px]">
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
        </div> */}
        <div className="w-[125px] md:w-[200px] h-[24px] md:h-[39px] font-semibold text-xl md:text-3xl mx-6 mt-6 mb-2">
          <p>Who we are?</p>
        </div>
        <div className="w-[327px] md:w-[1105px] h-[240px] md:h-[116px] mx-6 mb-10">
          <p className="font-normal text-[16px] leading-6 md:text-2xl">
            We are GuideMe, a company specialized in establishing companies and
            business development; we seek to provide foll support to investors
            and entrepreneurs to help them establish their businesses in
            Germany. By providing a foll range of services that aim to provide
            innovative solutions to guide our local and international clients
            and put them on the right track.{" "}
          </p>
        </div>

        <div className="w-[140px] md:w-[214px] h-[24px] md:h-[39px] font-semibold text-xl md:text-3xl mx-6">
          <p>Our Services?</p>
        </div>
        <div className="flex">
          <ol className="list-decimal p-2 text-[16px] leading-6 md:text-xl w-[327px] md:w-[678px] h-[809px] md:h-[944px] ml-10 mb-20">
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
          <div className="hidden md:flex items-center justify-between ml-20 relative top-2">
            <img
              src={Man}
              alt="/"
              className="w-[120px] h-[765px] relative top-20 mr-[20px]"
            />
            <img src={Man1} alt="/" className="w-[210px] h-[765px]" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[200px] md:mt-10 mx-6">
          <div className="w-[176px] md:w-[278px] h-[24px] md:h-[39px] font-semibold text-xl md:text-3xl">
            <p>Book our services</p>
          </div>
          <div>View all</div>
        </div>

        <div className="m-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Event}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Event Hall
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Legal}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Legal Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Reception}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Reception Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Comm}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Comm. Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Security}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Security Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Marketing}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Marketing Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Insurance}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Insurance Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[158px] md:w-[302px] h-[167px] md:h-[320px] border rounded-[30px] shadow-lg">
            <img
              src={Advert}
              alt="/"
              className="w-[137px] md:w-[263px] h-[80px] md:h-[153px] relative top-[18px] md:top-[24px] left-[10px] md:left-[19px] border rounded-[24px]"
            />
            <p className="relative top-8 md:top-20 left-4 text-[8px] md:text-[14px] leading-4 text-[#4b492b] font-semibold">
              Advertising Services
            </p>
            <div className="flex items-center justify-around relative top-8 md:top-20">
              <p className="text-[8px] md:text-xs font-medium">
                Berlin, Germany
              </p>
              <button className="bg-[#faf4ef] w-[64px] md:w-[123px] h-[22px] md:h-[41px] text-[#f27b0d] font-medium md:px-6 border rounded-[12px] text-[9px] md:text-xs">
                Book now
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 relative top-6 md:top-10 flex items-center justify-center">
          <button className="bg-[#f27b0d] w-[327px] md:w-[512px] h-[58px] md:h-[90px] font-semibold text-white text-xl border rounded-[6px]">
            Send us a message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessTrip;
