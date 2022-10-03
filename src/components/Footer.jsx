import React from "react";
import Logo from "../assets/logoTourism.png";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-black h-[221px] relative top-20 flex items-center justify-around">
      <div className="w-[60px] h-[60px]">
        <img src={Logo} alt="guide me" />
      </div>
      <div className="text-white font-bold text-3xl">
        nb glkgtlrkmblkf bttbk
      </div>
      <div className="text-white text-2xl flex items-center justify-center">
        <div className="w-[50px] h-[50px] border rounded-full m-4 flex items-center justify-center">
          <BsTwitter />
        </div>
        <div className="w-[50px] h-[50px] border rounded-full m-4 flex items-center justify-center">
          <RiInstagramFill />
        </div>
        <div className="w-[50px] h-[50px] border rounded-full m-4 flex items-center justify-center">
          <CgFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
