import React, { Fragment, useState } from "react";
import Logo from "../assets/logoTourism.png";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineClose, AiOutlineMenu, AiFillCar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { FaClinicMedical, FaHotel } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiAllSeeingEye } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="w-full flex justify-between items-center h-20 mx-auto px-4 text-black">
      <div className="w-[80px] h-[80px]">
        <img src={Logo} alt="guide me" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        {/* dropdown */}
        <li className="p-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex ">
                Services
                <BiChevronDown className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-[500px] h-[200px] px-[52px] py-[44px] origin-top-right rounded-md bg-white flex items-center justify-between">
                <div className="py-1">
                  {/* <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-lg flex"
                        )}
                      >
                        <FaClinicMedical color="#F27B0D" size={20} />
                        <span>Medical Tourism</span>
                      </p>
                    )}
                  </Menu.Item> */}
                  {/* <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-lg flex"
                        )}
                      >
                        <BsBriefcaseFill color="#F27B0D" size={20} />
                        <span>Business trip</span>
                      </p>
                    )}
                  </Menu.Item> */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/carrenting"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-lg flex"
                        )}
                      >
                        <AiFillCar color="#F27B0D" size={20} />
                        <span>iCar Renting</span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  {/* <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-lg flex"
                        )}
                      >
                        <GiAllSeeingEye color="#F27B0D" size={20} />
                        <span>Site Seeing</span>
                      </p>
                    )}
                  </Menu.Item> */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/hotelbooking"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "px-4 py-2 text-lg flex"
                        )}
                      >
                        <FaHotel color="#F27B0D" size={20} />
                        <span>Hotel Booking</span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4">About us</li>
        <li className="p-4">Contact us</li>
        <li className="p-4 ml-10">
          <Link to="/signin">Login</Link>
        </li>
        <li className="p-3 text-white bg-[#F27B0D] rounded w-[106px] h-[48px] text-center">
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-20 w-[378px] h-[420px] ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        {/* <div className="w-[60px] h-[60px] flex items-center justify-center">
          <img src={Logo} alt="guide me" />
        </div> */}
        <ul className="">
          <li className="p-4 ">Home</li>
          <li className="p-4">
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex items-center justify-center">
                <Menu.Button className="inline-flex">
                  Services
                  <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-[500px] h-[200px] px-[52px] py-[44px] origin-top-right rounded-md bg-white flex items-center justify-between">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "px-4 py-2 text-lg flex"
                          )}
                        >
                          <FaClinicMedical color="#F27B0D" size={20} />
                          <span>Medical Tourism</span>
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "px-4 py-2 text-lg flex"
                          )}
                        >
                          <BsBriefcaseFill color="#F27B0D" size={20} />
                          <span>Business trip</span>
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "px-4 py-2 text-lg flex"
                          )}
                        >
                          <AiFillCar color="#F27B0D" size={20} />
                          <span>Car Renting</span>
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "px-4 py-2 text-lg flex"
                          )}
                        >
                          <GiAllSeeingEye color="#F27B0D" size={20} />
                          <span>Site Seeing</span>
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "px-4 py-2 text-lg flex"
                          )}
                        >
                          <FaHotel color="#F27B0D" size={20} />
                          <span>Hotel Booking</span>
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-4">About us</li>
          <li className="p-4">Contact us</li>
        </ul>
        <div className="w-[328px] h-[50px] py-[12px] px-[14px] m-6 bg-[#f27b0d] text-center text-white font-medium">
          {" "}
          <Link to="/signup">Sign up</Link>
        </div>
        <div className="w-[328px] h-[50px] py-[12px] px-[14px] m-6 border border-[#f27b0d] text-center text-black font-medium">
          {" "}
          <Link to="/signin">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
