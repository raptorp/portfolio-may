import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 700) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 ${
        isSticky ? "bg-gray-900 text-gray-200 bg-opacity-95" : ""
      }`}
    >
      <div className="py-16 px-24">
        <div className="flex justify-between">
          {/* logo */}

          <div>
            <a className="text-2xl" href="/">
              <h4 className="text-2xl text-center ">
                <span className="font-bold">SABRINA</span> SØRENSEN
              </h4>
            </a>
          </div>

          {/* secondary nav */}

          <div className="hidden md:flex items-center space-x-1 text-xl">
            <a href="#projects" className="px-3">
              #Projects
            </a>
            <a href="/about" className="px-3">
              #About
            </a>
            <a href="#contact" className="">
              #Contact
            </a>
          </div>

          {/* mobile button goes here */}

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          #Projects
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          #About
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          #Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
