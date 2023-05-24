import React from "react";

import kuneThumb from "/public/kune.png";
import hogwartsThumb from "/public/aula.png";
import cartelThumb from "/public/cartel.png";
import gameThumb from "/public/game.png";

import OverviewImg from "./OverviewImg";

const Overview = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center pt-12 pb-16 bg-red-200">
      <p className="text-7xl">OVERVIEW</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4">
        <OverviewImg linkOverview="projects/#kune" socialImg={kuneThumb} />
        <OverviewImg
          linkOverview="projects/#hogwarts"
          socialImg={hogwartsThumb}
        />
        <OverviewImg linkOverview="projects/#cartel" socialImg={cartelThumb} />
        <OverviewImg linkOverview="projects/#game" socialImg={gameThumb} />
      </div>
    </div>
  );
};

export default Overview;
