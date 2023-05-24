"use client";

import kuneThumb from "/public/kune.png";
import hogwartsThumb from "/public/aula.png";
import gameThumb from "/public/game.png";
import cartelThumb from "/public/cartel.png";

import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-medium text-4xl lg:text-4xl p-4">
        Portfolio PORTFOLIO
      </h1>

      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            className="w-full h-full responsive"
            src={kuneThumb}
            alt="/"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="w-full h-full object-cover responsive"
            src={hogwartsThumb}
            alt="/"
            width="215"
            height="217"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="w-full h-full object-cover responsive"
            src={cartelThumb}
            alt="/"
            width="215"
            height="217"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="w-full h-full object-cover responsive"
            src={gameThumb}
            alt="/"
            width="215"
            height="217"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="w-full h-full object-cover responsive"
            src={gameThumb}
            alt="/"
            width="215"
            height="217"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
