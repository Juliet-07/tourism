import React from "react";
import Logo from "../assets/guidemeyellow.png";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[341px] mt-10">
      <div className="flex items-center justify-center">
        <div className="w-[40px] h-[40px]">
          <img src={Logo} alt="guide me" />
        </div>
        <div className="flex flex-col text-white">
          <p className="font-medium text-xl">Quick Contact</p>
          <div className="w-[410px] h-[53px] bg-white border rounded-[4px] flex items-center justify-between p-4 my-4">
            <input
              type="text"
              placeholder="Send a quick mail"
              className="focus:outline-0 text-gray-700"
            />
            <button
              type="submit"
              className="bg-black w-[108px] h-[45px] border rounded-[4px] py-[10px] px-[20px] font-medium"
            >
              Send
            </button>
          </div>
          <div className="text-white text-2xl flex">
            <div className="w-[40px] h-[40px] border rounded-full m-2 flex items-center justify-center">
              <BsTwitter size={20} />
            </div>
            <div className="w-[40px] h-[40px] border rounded-full m-2 flex items-center justify-center">
              <RiInstagramFill size={20} />
            </div>
            <div className="w-[40px] h-[40px] border rounded-full m-2 flex items-center justify-center">
              <CgFacebook size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="w-[330px] md:w-[1200px] bg-[#f4f4f4] border flex items-center justify-center mx-10"></div>
      <div className="text-white flex items-center justify-center relative top-[30px]">
        <AiOutlineCopyright size={30} />
        <p className="font-medium text-sm px-2">
          Copyright {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
