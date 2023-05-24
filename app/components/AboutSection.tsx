import Image from "next/image";
import React from "react";
import profilePic from "/public/headshot-bw.png";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="
      flex flex-col-reverse 
      py-8 
      max-w-[500px] 
      lg:max-w-max
      mx-auto
      lg:grid lg:grid-cols-12 
      lg:mx-8
      xl:max-w-[1440px] 
      xl:mx-auto
      justify-center item-center items-center"
    >
      <div
        className="
      px-8  py-8   
      col-span-7 
      bg-emerald-950/70 
      md:px-16 md:py-8 
      text-gray-100 
      lg:py-16
      "
      >
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl  pb-0.5 xl:pb-10 ">
          #ABOUT
        </h1>
        <p className="py-2 text-xl sm:text-l lg:text-2xl">
          As a passionate 29-year-old 3rd semester student of Multimedia Design
          at KEA, I am continuously expanding my technical foundation including
          graphic design, web development, and UX/UI. I approach my studies with
          enthusiasm and an eagerness to learn and grow in the field. While
          I&apos;ve acquired a certain proficiency in industry-standard design
          tools and technologies, I am constantly seeking new knowledge and
          exploring innovative approaches to enhance my skills.
        </p>
        <p className="py-2 text-xl sm:text-l lg:text-2xl">
          I am actively seeking a 10-week internship opportunity in August,
          where I can apply and expand upon my skills while contributing to the
          dynamic realm of multimedia design.
        </p>
        <p className="py-2 text-xl sm:text-l lg:text-2xl">
          Let&apos;s connect to explore opportunities for me to expand my skills
          and contribute to the world of multimedia design
        </p>
      </div>
      <Image
        className="xl:col-start-9 col-span-5 xl:col-span-4"
        src={profilePic}
        alt="/"
      />
    </div>
  );
};

export default AboutSection;
