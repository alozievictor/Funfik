import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => setNav(!nav);
  const handleClose = () => {
    untoggleNav();
    setNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/destination", label: "Destination" },
    { to: "/contact", label: "Contact us" },
    // { to: "/login", label: "Login" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    setShowComponent(false);

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentUrl]);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const untoggleNav = () => {
    setNav(nav);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`md:fixed drop-shadow relative ${
        scrolling
          ? "bg-white w-full"
          : "bg-transparent w-full"
      } `}
      style={{ zIndex: nav ? "10" : "1" }}
    >
      <div className={`w-full top-0 h-[11vh] pt-2`}>
        <div className="md:w-[80%] mx-auto px-2 flex justify-between items-center">
          {windowWidth > 768 ? (
            <div className="flex items-center text-white md:pt-0">
              <img src={logo} alt="pic" className="w-12 h-12 mt-1" />
              <h2
                className={`ml-2 md:mt-2 text-3xl text-black ${
                  scrolling ? " " : ""
                }`}
              >
                Funfik
              </h2>
            </div>
          ) : (
            <div
              className={`flex items-center pt-2 md:pt-0 ${
                scrolling ? "text-white " : "text-black"
              }`}
            >
              <img src={logo} alt="pic" className="w-12 h-12" />
              <h2 className="ml-2 text-[25px] md:mt-2">Funfik</h2>
            </div>
          )}

          {windowWidth > 768 && (
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-light pt-2 focus:outline-none hover:font-normal cursor-pointer text-gray-900 hover:text-blue-900 transition duration-300 
                  ${
                    link.label === "Login" ? "p-2.5 border border-blue-950 text-blue-950 font-medium text-center cursor-pointer lg:w-28 rounded-md" : "" 
                  } 
                  ${
                    scrolling ? "" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

         

          <div
            className="md:hidden w-full px-2 pt-3 flex justify-end items-end"
            onClick={toggleNav}
          >
            {nav ? (
              <FaTimes
                className={`w-6 flex justify-end items-end ${
                  scrolling ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 flex justify-end items-end ${
                  scrolling ? "text-white" : "text-black"
                }`}
              />
            )}
          </div>
        </div>

        <ul
          className={`${
            !nav ? "-translate-x-full" : "translate-x-0"
          } md:hidden w-full bg-white h-[100vh] drop-shadow-sm absolute top-0 left-0 transition-transform duration-300 mt-[16%]`}
        >
          {links.map((link) => (
            <li
              key={link.to}
              className="border-b-2 border-zinc-100 w-full text-center py-5 cursor-pointer hover:text-[#f39c12] transition duration-300"
            >
              <Link
                onClick={handleClose}
                to={link.to}
                smooth={true}
                duration={500}
                className=" z-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
