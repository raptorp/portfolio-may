import React from "react";

import Image from "next/image";

import { SlArrowDownCircle } from "react-icons/sl";
import Link from "next/link";

const OverviewImg = (imgContent: { socialImg: any; linkOverview: string }) => {
  const { socialImg, linkOverview } = imgContent;
  return (
    <Link href={linkOverview}>
      <div className="relative">
        <Image src={socialImg} alt="/" className="w-full h-full responsive" />

        {/* overlay */}
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group ">
          <p className="text-gray-300 hidden group-hover:block">
            <SlArrowDownCircle size={30} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OverviewImg;
