import React from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center pb-16 pt-8 xl:mb-36 xl:mt-10">
      <h1 className="text-3xl sm:text-3xl lg:text-5xl xl:text-6xl  pb-0.5 xl:pb-10">
        TECH STACK
      </h1>

      <ul className="flex flex-wrap p-4 justify-center">
        <li className="p-4">
          <SiHtml5 size={70} />
        </li>
        <li className="p-4">
          <SiCss3 size={70} />
        </li>
        <li className="p-4">
          <SiJavascript size={70} />
        </li>
        <li className="p-4">
          <SiReact size={70} />
        </li>
        <li className="p-4">
          <SiTypescript size={70} />
        </li>
        <li className="p-4">
          <SiNextdotjs size={70} />
        </li>
        <li className="p-4">
          <SiTailwindcss size={70} />
        </li>
        <li className="p-4">
          <SiBootstrap size={70} />
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
