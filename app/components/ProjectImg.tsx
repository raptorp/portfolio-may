"use client";

import React from "react";
import Image from "next/image";

const ProjectImg = (projectAssets: { imageSrc: any }) => {
  const { imageSrc } = projectAssets;
  return (
    <div className="lg:col-span-5 xl:col-span-5 lg:px-4 ">
      <Image className="w-full" src={imageSrc} alt="/" />
    </div>
  );
};

export default ProjectImg;
