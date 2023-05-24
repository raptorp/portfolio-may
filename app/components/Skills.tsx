"use client";

import React from "react";

import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTrello,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto text-center py-24">
        <h1 className="text-3xl">SKILLS</h1>

        <ul className="flex flex-wrap p-4 justify-center">
          <li className="p-4">
            <SiFigma size={70} />
          </li>
          <li className="p-4">
            <SiAdobeillustrator size={70} />
          </li>
          <li className="p-4">
            <SiAdobephotoshop size={70} />
          </li>
          <li className="p-4">
            <SiTrello size={70} />
          </li>
          <li className="p-4">
            <SiGithub size={70} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
