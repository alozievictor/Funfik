import React from "react";
import Booking from "./BookingSection/Booking";
import Hiring from "./BookingSection/Hiring";

const Reservation = () => {
  const [showTab, setShowTab] = React.useState({
    Booking: true,
    Hiring: false,
  });
  return (
    <React.Fragment>
      <div className="py-5 w-[95%] md:w-[80%] mx-auto mb-20 mt-5 relative bg-white">
        <div className="w-full flex justify-start items-center">
          <div className="w-full md:w-[40%] xl:w-[30%]">
            <ul className="flex items-center gap-3">
              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Booking
                      ? "bg-[#ff4c3060] text-black font-semibold font-[Poppins] text-base h-[40px] px-5 rounded"
                      : "text-black font-medium text-[15px] bg-transparent font-[Poppins] p-2"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Booking: true,
                      Hiring: false,
                    }))
                  }
                >
                  Booking
                </button>
              </li>

              <li className="text-sm p-1 cursor-pointer">
                <button
                  //   role="button"
                  className={`${
                    showTab.Hiring
                    ? "bg-[#ff4c3060] text-black font-semibold font-[Poppins] text-base h-[40px] px-5 rounded"
                    : "text-black font-medium text-[15px] bg-transparent font-[Poppins] p-2"
                  }`}
                  id="tab-0"
                  data-toggle="tab"
                  href="#"
                  onClick={() =>
                    setShowTab((prev) => ({
                      ...prev,
                      Booking: false,
                      Hiring: true,
                    }))
                  }
                >
                  Charter Vehicle
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full mt-3 bg-transparent">
          {showTab.Booking && <Booking />}
          {showTab.Hiring && <Hiring />}
        </div>

        
      </div>
    </React.Fragment>
  );
};

export default Reservation;
