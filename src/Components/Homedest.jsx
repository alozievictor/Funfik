import React from "react";
import Abuja from "../assets/Abuja-GS.jpg";
import Abj from "../assets/Abj.jpg";
import Benue from "../assets/Benue.jpg";
import Jos from "../assets/JOS.png";
import Nas from "../assets/nasarawa.jpg";

const Homedest = () => {
  return (
    <div className="py-10 md:py-16 xl:py-20 mb-10">
      <div className="w-[95%] md:w-[85%] mx-auto mb-20 relative">
        <div className="w-full md:w-[50%] mx-auto">
          <h3 className="text-black capitalize font-[Poppins] text-4xl font-bold text-center">
            Why travel with Funfik?
          </h3>
          <p className="text-black font-[Poppins] text-base md:text-base mt-3 text-center">
            Ready, set, go! With just a few quick taps, Funfik will take you
            where you need to be, no matter the destination.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-10 my-10">
          <div className=" p-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-50 shadow relative flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-shield-fill-check"
                  viewBox="0 0 16 16"
                  className="text-[#FF4D30]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"
                  />
                </svg>
              </div>
            </div>

            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[Poppins]">
                SAFETY FIRST
              </p>
              <span className="text-black font-[Poppins] text-sm mt-3 text-center">
                Safety is our top priority, we stay connected with you to ensure
                everything is going smoothly and to assists if
                needed.
              </span>
            </div>
          </div>

          <div className=" p-6 ">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-50 shadow relative flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar2-check-fill"
                  viewBox="0 0 16 16"
                  className="text-[#FF4D30]"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
              </div>
            </div>

            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[Poppins]">
                Set your own hours
              </p>
              <span className="text-black font-[Poppins] text-sm mt-3 text-center">
                With flexible work hours, you have the freedom to set your own
                schedule and work whenever suits you best.
              </span>
            </div>
          </div>

          <div className="p-6 ">
            <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-slate-50 shadow relative flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-credit-card-fill"
                viewBox="0 0 16 16"
                className="text-[#FF4D30]"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
              </svg>
            </div>
            </div>
            
            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[Poppins]">
                transparent prices
              </p>
              <span className="text-black font-[Poppins] text-sm mt-3 text-center">
                we always provide clear and transparent prices upfront, so you
                know exactly what to expect before you order your journey
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-[85%] mx-auto mt-10 py-5">
        <div className="w-full md:w-[50%] mx-auto">
          <h3 className="text-blue-900 capitalize font-[Urbanist] text-4xl font-bold text-center">
            Our top destinations
          </h3>
        </div>
        <div className="w-full grid md:grid-cols-4 gap-5 mt-20">
          <div className="">
            <img
              src={Abj}
              alt="abuja-image"
              className="w-full h-[220px] rounded"
            />
            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[urbanist]">
                Fct-abuja
              </p>
            </div>
          </div>

          <div className="">
            <img
              src={Benue}
              alt="abuja-image"
              className="w-full h-[220px] rounded"
            />
            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[urbanist]">
                benue-state
              </p>
            </div>
          </div>

          <div className="">
            <img
              src={Jos}
              alt="abuja-image"
              className="w-full h-[220px] rounded"
            />
            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[urbanist]">
                plateau-state
              </p>
            </div>
          </div>

          <div className="">
            <img
              src={Nas}
              alt="abuja-image"
              className="w-full h-[220px] rounded"
            />
            <div className="my-2">
              <p className="text-xl text-center uppercase py-3 font-medium font-[urbanist]">
                nasarawa-state
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedest;
