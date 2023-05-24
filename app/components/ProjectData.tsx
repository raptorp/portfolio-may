"use client";

import React from "react";
import LinkedButton from "./LinkedButton";

import {
  FaExternalLinkAlt,
  FaFigma,
  FaGithub,
  FaUsers,
  FaYoutube,
  FaFileImage,
} from "react-icons/fa";

const ProjectData = (projectInfo: {
  title: string;
  description: string;
  tags: string[];
  websiteLink: string;
  prototypeLink: string;
  githubLink: string;
  clientLink: string;
  youtubeLink: string;
  storyboardLink: string;
}) => {
  const {
    title,
    description,
    tags,
    websiteLink,
    prototypeLink,
    githubLink,
    clientLink,
    youtubeLink,
    storyboardLink,
  } = projectInfo;

  return (
    <div className="sm:grid lg:col-span-7 xl:col-span-7">
      <div className="px-4  py-6 lg:py-0 ">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  pb-0.5"
          style={{ fontFamily: "lora" }}
        >
          {title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-xl">{description}</p>
        <ul className="flex flex-wrap pt-2">
          {tags.map((tag, index) => (
            <li className="pr-2" key={index}>
              <h4 className="text-xl sm:text-2xl lg:text-xl text-gray-900 opacity-80 italic">
                {tag}
              </h4>
            </li>
          ))}
        </ul>
      </div>
      <ul className="grid auto-rows-auto grid-cols-2 items-center sm:flex sm:justify-end sm:flex-wrap gap-x-2 gap-y-1.5 px-4 py-6 lg:pb-0 self-end">
        {websiteLink && (
          <li className="">
            <LinkedButton
              btnLink={websiteLink}
              btnIcon={<FaExternalLinkAlt size={22} />}
              btnText="Website"
            />
          </li>
        )}

        {prototypeLink && (
          <li className="">
            <LinkedButton
              btnLink={prototypeLink}
              btnIcon={<FaFigma size={24} />}
              btnText="Prototype"
            />
          </li>
        )}

        {githubLink && (
          <li className="">
            <LinkedButton
              btnLink={githubLink}
              btnIcon={<FaGithub size={24} />}
              btnText="GitHub"
            />
          </li>
        )}

        {clientLink && (
          <li className="">
            <LinkedButton
              btnLink={clientLink}
              btnIcon={<FaUsers size={24} />}
              btnText="Client site"
            />
          </li>
        )}

        {youtubeLink && (
          <li className="">
            <LinkedButton
              btnLink={youtubeLink}
              btnIcon={<FaYoutube size={24} />}
              btnText="YouTube"
            />
          </li>
        )}

        {storyboardLink && (
          <li className="">
            <LinkedButton
              btnLink={storyboardLink}
              btnIcon={<FaFileImage size={24} />}
              btnText="Storyboard"
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectData;
