import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

// import { useEffect } from "react";
import Link from "next/link";
import LinkedButton from "./LinkedButton";

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
      px-4
      space-y-28
      text-gray-900
     
      "
    >
      <div className="max-w-[1200px] lg:max-w-[1600px] mx-auto w-full ">
        <div className="flex flex-col  md:grid grid-cols-3 grid-rows-auto text-center ">
          <div className="text-l md:text-xl md:order-1 opacity-80 md:text-left pt-1 md:pt-0">
            <p>Junior Frontend Developer and UI Designer</p>
            {/* <p>Portfolio 2023-2023</p> */}
          </div>

          <h4 className="order-first md:order-2 text-2xl  text-center ">
            <span className="font-bold">SABRINA</span> SØRENSEN
          </h4>
          <div className="flex justify-center md:justify-start space-x-1 md:flex-col md:order-3 text-l md:text-xl md:text-right opacity-80 pt-1 md:pt-0">
            <p>Available for internship</p>
            <p>August 2023</p>
          </div>
        </div>

        <div className="mx-auto py-12 md:py-32">
          <div className="flex flex-col space-y-10">
            <div className="text-center space-y-4 ">
              <h2
                className="text-4xl md:text-5xl font-semibold text-amber-800/70"
                // style={{ fontFamily: "lora" }}
              >
                Need an intern or a student helper?
              </h2>
              <h3 className="text-2xl md:text-3xl md:pb-2">
                Let’s connect and figure something out!
              </h3>
              <p className="text-2xl pt-2 md:py-2">sabrinaos@outlook.dk</p>
            </div>

            <ul className="flex flex-row justify-center space-x-4 text-center">
              <li>
                <LinkedButton
                  btnLink="https://www.linkedin.com/in/sabrinaos/"
                  btnIcon={<FaLinkedinIn size={24} />}
                  btnText="Linkedin"
                />
              </li>
              <li>
                <LinkedButton
                  btnLink="https://github.com/raptorp"
                  btnIcon={<FaGithub size={24} />}
                  btnText="GitHub"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:justify-end justify-center">
          <a href="./">
            <div className="flex items-center space-x-1">
              <FaArrowUp size={20} />
              <p className="text-xl">Back to top</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
