import React from "react";
import ProjectImg from "./ProjectImg";
import ProjectData from "./ProjectData";

import kuneThumb from "/public/kune.png";
import hogwartsThumb from "/public/aula.png";
import gameThumb from "/public/game.png";
import cartelThumb from "/public/cartel.png";

const ProjectSection = () => {
  return (
    <div className="flex flex-col px-4 py-8 md:py-16 md:max-w-[950px]  xl:max-w-[1440px] justify-center item-center md:mx-auto">
      <div
        id="kune"
        className=" py-8 md:px-8 xl:pt-0 xl:pb-20  lg mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid xl:grid xl:grid-cols-12 xl:grid-rows-none"
      >
        <ProjectImg imageSrc={kuneThumb} />
        <ProjectData
          title="KUNE Cph Revamp"
          description="
          For our 2nd semester exam, my team provided a vital dose of digital first aid to our client, KUNE Cph — an underground techno and electronic music festival.
          We transformed their static, single-page website into a dynamic platform that showcases their lineup, engages volunteers, and serves as a hub for their supporters to find all necessary information. 
          The final website incorporates vibrant visuals, responsive design, and modern web technologies to create an immersive platform for festival-goers. 
          Experience the culmination of our shared passion for music, art, and webdesign through the links below. 
        "
          tags={["#UI/UX", "#HTML5", "#CSS", "#JavaScript", "#database"]}
          websiteLink="https://kunefestival.vercel.app/"
          prototypeLink="https://www.figma.com/proto/B3MxMe0sAkCPaI6t7aliEE/kune-prototype?page-id=424%3A2&type=design&node-id=604-597&viewport=-1574%2C2508%2C0.21&scaling=min-zoom&starting-point-node-id=604%3A597&show-proto-sidebar=1"
          githubLink="https://github.com/raptorp/kunefestival_2.0/"
          clientLink="https://www.kunekbh.com/"
          youtubeLink=""
          storyboardLink=""
        />
      </div>
      <div
        id="hogwarts"
        className="py-8 md:px-8 xl:pt-0 xl:pb-20 xl:mt-24 mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid xl:grid xl:grid-cols-12 xl:grid-rows-none"
      >
        <ProjectImg imageSrc={hogwartsThumb} />
        <ProjectData
          title="AULA for Wizards"
          description="
          Introducing the Student Management System for Hogwarts School of Witchcraft and Wizardry—a dynamic solution developed as part of a school assignment. 
          The system has everything a magical admin needs to efficiently manage student data, offering robust features such as sorting, filtering, searching, and detailed student profiles. 
          From handling expulsions and prefect selections to calculating blood status and inquisitorial squad membership, this system delivers functionality tailored to Hogwarts' unique needs.
          Throughout the assignment, I have adhered to strict JavaScript coding standards, ensuring the system's reliability and maintainability.
          Explore the magic of this project by following the links below!
    "
          tags={["#HTML5", "#CSS", "#JavaScript", "#Json"]}
          websiteLink="https://hogwarts-admin.vercel.app/"
          prototypeLink=""
          githubLink="https://github.com/raptorp/hacked_hogwarts_database_ui"
          clientLink=""
          youtubeLink=""
          storyboardLink=""
        />
      </div>
      <div
        id="cartel"
        className="py-8 md:px-8 xl:pt-0 xl:pb-20 xl:mt-24 mb-4 xl:mb-0 border-b-2 border-emerald-900/50 border-solid xl:grid xl:grid-cols-12 xl:grid-rows-none"
      >
        <ProjectImg imageSrc={cartelThumb} />
        <ProjectData
          title="CPH Cartel Video Project"
          description="
          Introducing the CPH Cartel Project—a school assignment where our team created professional video content for the brand, Copenhagen Cartel.
          This video concept takes a tongue-in-cheek spin on the classic influencer trope while still staying true to Copenhagen Cartel's focus on sustainability. 
          Through meticulous videography and compelling storytelling, we emphasize the brand's craftsmanship, elegance, and commitment to environmental consciousness.
          As the person behind the idea, I take pride in how elegantly we executed the final product.
          Experience the CPH Cartel Project below and witness the power of visual storytelling in promoting sustainable fashion.
            "
          tags={["#SoMe", "#PremierePro", "#content", "#illustration"]}
          websiteLink=""
          prototypeLink=""
          githubLink=""
          clientLink=""
          youtubeLink="https://youtu.be/ncTTkDUxGp4"
          storyboardLink=""
        />
      </div>
      <div
        id="game"
        className="py-8 md:px-8 xl:pt-0 xl:pb-20 xl:mt-24 mb-4 xl:mb-0  xl:grid xl:grid-cols-12 xl:grid-rows-none"
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
          tags={[
            "#character_design",
            "#Illustrator",
            "#HTML5",
            "#CSS",
            "#JavaScript",
          ]}
          websiteLink="https://fat-rat-game.vercel.app/"
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
