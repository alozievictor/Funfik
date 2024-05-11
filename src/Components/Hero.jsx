import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sienna from "../assets/car blob1.jpg";
import Mazda from "../assets/blob6.jpg";
import Car from "../assets/banner_car.png";

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
    <div className="w-full -z-50 md:z-0 bg-[#F8F8F8] rounded-b-[35px]">
      <div className="w-full md:h-[100vh] h-[75vh] overflow-hidden">
        <Slider {...settings}>
          <div className="Hero2 h-[100vh]">
            <div className="md:h-full h-[80vh] md:w-full w-[90%] mx-auto grid md:grid-cols-5">
              <div className="flex justify-end items-center md:mt-10 md:col-span-2">
                <div className="w-full md:w-[80%]">
                  <h1 className="heroInnerCont capitalize font-[Poppins] tracking-normal text-5xl md:text-[47px] text-gray-900 font-bold py-3">
                    Ride <span className="text-[#FF4D30]">for</span> Adventures,
                    Comfort and Safety
                  </h1>
                  <p className="text-black font-[Urbanist] text-base md:text-lg mt-1">
                    We're dedicated to providing reliable and efficient
                    transportation services to meet your needs.
                  </p>

                  <div className="w-full relative my-10">
                    <button
                      class="
        group
        p-6
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-[#FF4D30]
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100"
                    >
                      <span
                        class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-[#FF4D30]
           transition-all
         duration-500"
                      ></span>

                      <p
                        class="group-hover:opacity-0 text-base group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
                      >
                        Explore Now
                      </p>

                      <span class="group-hover:translate-x-0 text-base group-hover:opacity-100 absolute translate-x-full opacity-0 transition-all duration-200">
                        Thank you!
                      </span>

                      <span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-[#FF4D30] transition-all duration-500"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full hidden md:block md:col-span-3">
                <div className="Hero-cont1">
                  <img
                    src={Car}
                    alt="pix"
                    className="w-[100%] h-[80vh] flex item-end ml-10 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Hero2 h-[100vh]">
            <div className="md:h-full h-[80vh] md:w-full w-[90%] mx-auto grid md:grid-cols-5">
              <div className="flex justify-end items-center md:mt-10 md:col-span-2">
                <div className="w-full md:w-[80%]">
                  <h1 className="heroInnerCont capitalize font-[Poppins] tracking-normal text-5xl md:text-[47px] text-gray-900 font-bold py-3">
                    Ride <span className="text-[#FF4D30]">for</span> Adventures,
                    Comfort and Safety
                  </h1>
                  <p className="text-black font-[Urbanist] text-base md:text-lg mt-1">
                    We're dedicated to providing reliable and efficient
                    transportation services to meet your needs.
                  </p>

                  <div className="w-full relative my-10">
                    <button
                      class="
        group
        p-6
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-[#FF4D30]
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100"
                    >
                      <span
                        class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-[#FF4D30]
           transition-all
         duration-500"
                      ></span>

                      <p
                        class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
                      >
                        Explore Now
                      </p>

                      <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
                        Thank you!
                      </span>

                      <span class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-[#FF4D30] transition-all duration-500"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full hidden md:block md:col-span-3">
                <div className="Hero-cont1">
                  <img
                    src={Car}
                    alt="pix"
                    className="w-[100%] h-[80vh] flex item-end ml-10 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
