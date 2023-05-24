import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4  ">
      {/* <h1
        className="text-4xl font-bold text-center p-4"
        style={{ fontFamily: "lora" }}
      >
        Let&apos;s talk!
      </h1> */}

      <div className="flex flex-col py-8 md:py-16  md:flex-row text-center  bg-emerald-950/20 md:justify-evenly">
        <div className="flex flex-col p-4 space-y-2">
          <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl  text-amber-800/70">
            Find me on LinkedIn
          </h1>
          <Link href="https://www.linkedin.com/in/sabrinaos/">
            <p className="text-xl lg:text-2xl xl:text-3xl  ">/li/sabrinaos</p>
          </Link>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl text-amber-800/70 ">
            Send me an email
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl">
            sabrinaos@outlook.dk
          </p>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl text-amber-800/70 ">
            Call me
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl">+45 5468 8115</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
