import { GitHub, Linkedin, ArrowUp } from "react-feather";

// import { useEffect } from "react";
import Link from "next/link";

// import { lora } from "../fonts";

const Footer = () => {
  return (
    <div
      className="
      mt-20
      flex
      flex-col
      border-t-2 
      border-solid 
      border-black 
      border-opacity-50
      py-12
      px-14
      space-y-28
      text-gray-900
      "
    >
      <div className="grid grid-cols-3 ">
        <p className="text-xl opacity-80">
          Junior Frontend Developer and UI Designer
          <br />
          Portfolio 2023-2023
        </p>

        <h4 className="text-2xl text-center ">
          <span className="font-bold">SABRINA</span> SØRENSEN
        </h4>

        <p className="text-xl text-right opacity-80">
          Available for internship
          <br />
          August 2023
        </p>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col space-y-14">
          <div className="text-center space-y-2">
            <h2 className="text-5xl font-medium" style={{ fontFamily: "lora" }}>
              Need an intern or a student helper?
            </h2>
            <h3 className="text-3xl ">
              Let’s connect and figure something out!
            </h3>
            <p className="text-2xl pt-4 text-amber-800 opacity-60">
              sabrinaos@outlook.dk
            </p>
          </div>

          <ul className="flex flex-row justify-center space-x-12 text-center">
            <li>
              <Link
                href="https://www.linkedin.com/in/sabrinaos/"
                className="relative inline-block text-lg group"
              >
                <span
                  className="
                    relative 
                    z-10 block 
                    px-5 py-3 
                    overflow-hidden 
                    font-medium
                    leading-tight
                    text-gray-800
                    transition-colors 
                    duration-300 
                    ease-out 
                    border-2 
                    border-gray-900
                    rounded-lg
                    group-hover:text-white
                    "
                >
                  <span
                    className="
                      absolute 
                      inset-0 
                      w-full h-full 
                      px-5 py-3 
                      rounded-lg 
                      bg-gray-50
                      "
                  ></span>
                  <span
                    className="
                      absolute 
                      left-0 
                      w-48 
                      h-48       
                      -ml-2 
                      transition-all 
                      duration-300 
                      origin-top-right 
                      -rotate-90 
                      -translate-x-full 
                      translate-y-12 
                      bg-gray-900 
                      group-hover:-rotate-180 ease
                      "
                  ></span>
                  <span className="relative flex space-x-2">
                    <Linkedin></Linkedin>
                    <p>Linkedin</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/raptorp"
                className="relative inline-block text-lg group"
              >
                <span
                  className="
                    relative 
                    z-10 block 
                    px-5 py-3 
                    overflow-hidden 
                    font-medium
                    leading-tight
                    text-gray-800
                    transition-colors 
                    duration-300 
                    ease-out 
                    border-2 
                    border-gray-900
                    rounded-lg
                    group-hover:text-white
                    "
                >
                  <span
                    className="
                      absolute 
                      inset-0 
                      w-full h-full 
                      px-5 py-3 
                      rounded-lg 
                      bg-gray-50
                      "
                  ></span>
                  <span
                    className="
                      absolute 
                      left-0 
                      w-48 
                      h-48       
                      -ml-2 
                      transition-all 
                      duration-300 
                      origin-top-right 
                      -rotate-90 
                      -translate-x-full 
                      translate-y-12 
                      bg-gray-900 
                      group-hover:-rotate-180 ease
                      "
                  ></span>
                  <span className="relative flex space-x-2">
                    <GitHub></GitHub>
                    <p>GitHub</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <a href="./">
          <div className="flex items-center space-x-1">
            <ArrowUp size={20}></ArrowUp>
            <p className="text-xl">Back to top</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
