import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { GitHub, Figma, Youtube, Link2, Users } from "react-feather";

export const SectionComponent = (projectInfo: {
  imageSrc: any;
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
    imageSrc,
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
    <div
      className="
    flex 
    flex-row 
    py-20 
    items-start    
    border-t-2 
    border-solid 
    border-emerald-900 
    border-opacity-50
    space-x-14"
    >
      <Image className="pl-6 drop-shadow-sm" src={imageSrc} alt="#" />
      <div className="flex flex-col pr-6 space-y-16 ">
        <div className="flex flex-col  space-y-4 self-auto">
          <h3 className="text-6xl" style={{ fontFamily: "lora" }}>
            {title}
          </h3>
          <p className="text-2xl">{description}</p>
          <ul className="flex flex-row space-x-2">
            {tags.map((tag, index) => (
              <li key={index}>
                <h4 className="text-2xl text-gray-900 opacity-80 italic">
                  {tag}
                </h4>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-row justify-end space-x-8 text-xl">
          {websiteLink && (
            <li>
              <Link
                href={websiteLink}
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
                    <Link2></Link2>
                    <p>Website</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          )}

          {prototypeLink && (
            <li>
              <Link
                href={prototypeLink}
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
                    <Figma></Figma>
                    <p>Prototype</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          )}

          {githubLink && (
            <li>
              <Link
                href={githubLink}
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
          )}

          {clientLink && (
            <li>
              <Link
                href={clientLink}
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
                    <Users></Users>
                    <p>Client</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          )}

          {youtubeLink && (
            <li>
              <Link
                href={youtubeLink}
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
                    <Youtube></Youtube>
                    <p>Watch</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          )}

          {storyboardLink && (
            <li>
              <Link
                href={storyboardLink}
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
                    <Users></Users>
                    <p>Storyboard</p>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
