"use client";

import React from "react";
import Hero from "../components/hero";

import ProjectSection from "../components/ProjectSection";
import Overview from "../components/Overview";

const Work = () => {
  return (
    <div>
      <Hero
        heading="Want to see something cool?"
        message="Below, you can find a selection of my favorite projects, ranging from pure JavaScript projects to a complete revamp of clients' digital presence."
      />

      <ProjectSection />
    </div>
  );
};

export default Work;