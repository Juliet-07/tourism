import React, { useState, useRef, useEffect } from "react";
import data from "./data.json";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Hotels near sights
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top-20 w-full h-full">
          <div
            onClick={movePrev}
            className="hover:bg-black text-white w-[60px] h-[60px] border rounded-full flex items-center justify-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <AiOutlineArrowLeft size={30} />
          </div>
          <div
            onClick={moveNext}
            className="hover:bg-black text-white w-[60px] h-[60px] border rounded-full flex items-center justify-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <AiOutlineArrowRight size={30} />
          </div>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div key={index} className="relative snap-start md:w-[383px] md:h:[670px] rounded overflow-hidden shadow-lg">
                <a
                  href={resource.link}
                  className="h-[386px] w-[383px] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <img
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                {/* <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
