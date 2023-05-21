import { PageWrapper } from "./page-wrapper";
import { SectionComponent } from "./components/section-component";

import hogwartsThumb from "../public/aula.png";
import kuneThumb from "../public/kune.png";
import gameThumb from "../public/game.png";
import cartelThumb from "../public/cartel.png";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        {/* hero */}

        <div className="pt-72 pb-48 mb-16">
          <div className="text-center">
            <h1 className="text-9xl pb-14 " style={{ fontFamily: "lora" }}>
              Hi! I&apos;m Sabrina...
            </h1>
            <h3 className="text-2xl ">
              ...and this is my portfolio where you can get a peak into
              <br />
              my journey studying Frontend Development and UI/UX Design at KEA
            </h3>
          </div>
        </div>

        {/* sections */}
        <div className="flex flex-col">
          <div className="flex-grow">
            {/* kune */}

            <SectionComponent
              imageSrc={kuneThumb}
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

          <div className="flex-grow">
            {/* hogwarts */}

            <SectionComponent
              imageSrc={hogwartsThumb}
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

          <div className="flex-grow">
            {/* cartel */}

            <SectionComponent
              imageSrc={cartelThumb}
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

          <div className="flex-grow">
            {/* game */}

            <SectionComponent
              imageSrc={gameThumb}
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
      </main>
    </PageWrapper>
  );
}
