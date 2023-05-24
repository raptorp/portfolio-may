import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectData from "./ProjectData";

import kuneThumb from "/public/kune.png";
import hogwartsThumb from "/public/aula.png";
import gameThumb from "/public/game.png";
import cartelThumb from "/public/cartel.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col px-4 py-8 md:py-16 md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1240px] justify-center item-center md:mx-auto">
      <div
        id="kune"
        className="bg-blue-800/20 py-8 md:px-8 xl:pt-0 xl:pb-20  mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid lg:grid lg:grid-cols-12 lg:grid-rows-none"
      >
        <ProjectImg imageSrc={kuneThumb} />
        <ProjectData
          title="KUNE Cph"
          description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
        massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
        fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
        vitae mattis tellus. Nullam quis imperdiet augue.
        "
          tags={["#website", "#UI", "#HTML5", "#CSS", "#JavaScript"]}
          websiteLink="https://sabrinaos.dk/2nd-semester/kunefestival_2.0/"
          prototypeLink="https://www.figma.com/proto/B3MxMe0sAkCPaI6t7aliEE/kune-prototype?page-id=424%3A2&type=design&node-id=604-597&viewport=-1574%2C2508%2C0.21&scaling=min-zoom&starting-point-node-id=604%3A597&show-proto-sidebar=1"
          githubLink="https://github.com/raptorp/kunefestival_2.0/"
          clientLink="https://www.kunekbh.com/"
          youtubeLink=""
          storyboardLink=""
        />
      </div>
      <div
        id="hogwarts"
        className="py-8 md:px-8 xl:py-16 xl:mx-8 mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid lg:grid lg:grid-cols-12 lg:grid-rows-none"
      >
        <ProjectImg imageSrc={hogwartsThumb} />
        <ProjectData
          title="AULA for Wizards"
          description="
            A visually engaging system for managing student lists at Hogwarts
            School of Witchcraft and Wizardry. Features include sorting,
            filtering, searching, and detailed student profiles. Expulsion,
            prefect selection, blood status calculations, and inquisitorial
            squad appointments are supported. The assignment incorporates a
            hacking feature and follows strict JavaScript coding standards.
            "
          tags={["#uni", "#UI", "#HTML5", "#CSS", "#JavaScript"]}
          websiteLink="https://sabrinaos.dk/3rd-semester/hacked_hogwarts_database_ui/"
          prototypeLink=""
          githubLink="https://github.com/raptorp/hacked_hogwarts_database_ui"
          clientLink=""
          youtubeLink=""
          storyboardLink=""
        />
      </div>
      <div
        id="cartel"
        className="py-8 md:px-8 xl:py-16 xl:mx-8 mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid lg:grid lg:grid-cols-12 lg:grid-rows-none"
      >
        <ProjectImg imageSrc={cartelThumb} />
        <ProjectData
          title="Copenhagen Cartel"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
            "
          tags={["#uni", "#PremierePro", "#content", "#illustration"]}
          websiteLink=""
          prototypeLink=""
          githubLink=""
          clientLink=""
          youtubeLink="https://youtu.be/ncTTkDUxGp4"
          storyboardLink="#_"
        />
      </div>
      <div
        id="game"
        className="py-8 md:px-8 xl:py-16 xl:mx-8 mb-4 xl:mb-0 lg:grid lg:grid-cols-12 lg:grid-rows-none"
      >
        <ProjectImg imageSrc={gameThumb} />
        <ProjectData
          title="Fat Rat - A Vanilla JS Game"
          description='
            This is a fully responsive website featuring an interactive,
            animated game. Using HTML, CSS, and JavaScript, I developed a
            "clicker" game where players click on objects to earn
            points or lose health within the time limit. The game is brought
            to life by hand-drawn SVG files, CSS animations for in-game
            movements, and playful soundscape that enhances the game
            experience The code follows a state machine diagram and adheres
            to modern JavaScript standards.
            '
          tags={["#uni", "#Illustrator", "#HTML5", "#CSS", "#JavaScript"]}
          websiteLink="https://sabrinaos.dk/1st-semester/fat-rat-game/"
          prototypeLink=""
          githubLink="https://github.com/raptorp/fat-rat-game"
          clientLink=""
          youtubeLink=""
          storyboardLink=""
        />
      </div>
    </div>
  );
};

export default ProjectSection;
