import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#f4f4f5");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#f4f4f5");
        setTextColor("#18181B");
      } else {
        setColor("transparent");
        setTextColor("#f4f4f5");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when mobile nav is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling when mobile nav is closed
    }
  }, [nav]);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1540px] m-auto flex justify-between items-center p-4 sm:py-8 text-white text-xl lg:text-2xl">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className=" ">
            <span className="font-bold">SABRINA</span> SØRENSEN
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex  font-medium space-x-24"
        >
          <li className="">
            <Link href="/work">Work</Link>
          </li>
          <li className="">
            <Link href="/#about">#About</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* mobile menu */}

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul style={{ color: `${textColor}` }}>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#gallery">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
