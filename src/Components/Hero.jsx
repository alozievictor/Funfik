import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sienna from "../assets/siennaBg.png";
import Mazda from "../assets/2024.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
  };

  return (
    <div className="w-full -z-50 md:z-0">
      <div className="w-full md:h-[100vh] h-[80vh] overflow-hidden">
        <Slider {...settings}>
          <div className="Hero2 h-[100vh]">
            <div className="md:h-full h-[80vh] mx-auto grid md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center mt-20">
                <div className="w-full md:w-[65%] mx-auto">
                  <h4 className=" text-gray-800 capitalize text-xl md:text-base font-medium">
                    welcome to Funfik
                  </h4>
                  <h1 className="heroInnerCont capitalize tracking-normal text-3xl md:text-[50px] text-blue-900 font-medium py-3">
                    Ride for class, confort and safty.
                  </h1>
                  <p className="text-black text-base mt-1">
                    We're dedicated to providing reliable and efficient
                    transportation services to meet your needs.
                  </p>

                  <div className="w-full relative my-10">
                    <a
                      href="#explore"
                      className="py-3 px-5 bg-blue-900 hover:bg-blue-950 cursor-pointer text-white lg:w-40 rounded-sm drop-shadow-lg"
                    >
                      Explore more
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="Hero-cont1">
                  <img src={Mazda} alt="pix" className="w-[90%] h-[60vh]" />
                </div>
              </div>
            </div>
          </div>

          <div className="Hero2 h-[100vh]">
            <div className="md:h-full h-[80vh] mx-auto grid md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center mt-20">
                <div className="w-full md:w-[65%] mx-auto">
                  <h4 className=" text-gray-800 capitalize text-xl md:text-base font-medium">
                    welcome to Funfik
                  </h4>
                  <h1 className="heroInnerCont capitalize tracking-normal text-3xl md:text-[50px] text-blue-900 font-medium py-3">
                    Ride for class, confort and safty.
                  </h1>
                  <p className="text-black text-base mt-1">
                    We're dedicated to providing reliable and efficient
                    transportation services to meet your needs.
                  </p>

                  <div className="w-full relative my-10">
                    <a
                      href="#explore"
                      className="py-3 px-5 bg-blue-900 hover:bg-blue-950 cursor-pointer text-white lg:w-40 rounded-sm drop-shadow-lg"
                    >
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="Hero-cont1">
                  <img src={Sienna} alt="pix" className="w-[90%] h-[60vh]" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="Hero3 h-[100vh] border border-yellow-400">
            <div className="md:h-full h-[80vh] w-[85%] mx-auto flex items-center">
              <div className="md:w-[50%] border border-yellow-400">
                <h4 className=" text-[#f39c12] capitalize text-xl md:text-base font-medium">
                  welcome to lucidreams
                </h4>
                <h1 className="heroInnerCont tracking-wide text-3xl md:text-[50px] text-white font-medium py-3">
                  Showing you round the world, one country at a time
                </h1>
                <p className="text-white text-base mt-1">
                  Experience the thrill of exploring the world's most
                  fascinating destinations with our expertly curated travel
                  packages.
                </p>
                <div className="w-full relative my-10">
                  <a
                    href="#explore"
                    className="p-3 bg-[#265670] hover:bg-[#335c72] cursor-pointer text-white lg:w-40 rounded-sm drop-shadow-lg"
                  >
                    Explore more
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
