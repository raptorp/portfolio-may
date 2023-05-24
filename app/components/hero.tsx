// import React from "react";

const Hero = (heroContent: { heading: string; message: string }) => {
  const { heading, message } = heroContent;

  return (
    <div className="flex items-center justify-center h-[80vh] mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}

      <div className="absolute top-0 left-0 right-0 bottom-[20vh] bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-1rem] md:max-w-[600px] lg:max-w-[800px]">
        <h2 className="text-5xl lg:text-8xl ">{heading}</h2>
        <p className="py-5 text-xl font-light lg:text-3xl">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
