"use client";

import Portfolio from "./components/Portfolio";

import Hero from "./components/hero";

import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Contact from "./contact/page";
import ContactInfo from "./components/ContactInfo";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import MyProcess from "./components/MyProcess";
import HeroMinimal from "./components/heroMinimal";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Hi! I'm Sabrina,"
        message="... and I'm excited to share my journey studying Frontend Development and UI/UX Design at KEA with you. This portfolio offers a glimpse into my work, showcasing my skills and passion for creating engaging and user-friendly digital experiences."
      />

      <AboutSection />

      {/* <MyProcess /> */}

      <Skills />

      <TechStack />

      {/* <Portfolio /> */}
    </div>
  );
}
