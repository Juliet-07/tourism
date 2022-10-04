import React, { Fragment, useState } from "react";
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
    <div className="w-full flex justify-between items-center h-20 max-w-[1440px] mx-auto px-4 text-black">
      <h1 className="text-3xl font-bold">Logo.</h1>
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
                        <span>Car Renting</span>
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
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4 pt-4">Logo.</h1>
        <ul className="mt-20 uppercase text-center">
          <li className="p-4">Home</li>
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
          <li className="p-4">Contact us</li>
          <li className="p-4">Login</li>
          <li className="p-4">Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
