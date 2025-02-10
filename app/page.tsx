"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
// xs: 320
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

import { ThemeProvider } from "./ui/contexts/ThemeContext";
import TitleCard from "./ui/cards/mobile/TitleCard";
import AboutCard from "./ui/cards/mobile/AboutCard";
import ExperienceCard from "./ui/cards/mobile/ExperienceCard";
import ProjectCard from "./ui/cards/mobile/ProjectCard";
import EducationCard from "./ui/cards/mobile/EducationCard";

import TitleCardDesktop from "./ui/cards/desktop/TitleCardDesktop";
import AboutCardDesktop from "./ui/cards/desktop/AboutCardDesktop";
import ExperienceCardDesktop from "./ui/cards/desktop/ExperienceCardDesktop";
import ProjectCardDesktop from "./ui/cards/desktop/ProjectCardDesktop";
import EducationCardDesktop from "./ui/cards/desktop/EducationCardDesktop";

import { navs } from "./lib/definitions";
import Footer from "./ui/Footer";
// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {
  const [cardStack, setCardStack] = useState([0, 1, 2, 3, 4]);
  const topCardIndex = cardStack[0];
  const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;

  const putSwipedCardBack = () => {
    const updatedStack = [...cardStack];
    const removedCard = updatedStack.splice(0, 1);
    const newStack = [...updatedStack, ...removedCard];
    setCardStack(newStack);
  };

  console.log(topCardIndex, cardStack);
  return (
    <motion.div
      variants={{
        pop: {
          scale: [0.5, 1],
          opacity: [0, 1],
        },
      }}
      initial="initial"
      animate={isMediumScreen ? "pop" : "initial"}
    >
      <ThemeProvider>
        <div className="mx-auto grid h-[100vh] max-w-screen-md place-items-center md:hidden">
          <div className="grid place-items-center">
            <TitleCard
              cardIndex={0}
              putSwipedCardBack={putSwipedCardBack}
              topCardIndex={topCardIndex}
            />
            <AboutCard
              cardIndex={1}
              putSwipedCardBack={putSwipedCardBack}
              topCardIndex={topCardIndex}
            />
            <ExperienceCard
              cardIndex={2}
              putSwipedCardBack={putSwipedCardBack}
              topCardIndex={topCardIndex}
            />
            <ProjectCard
              cardIndex={3}
              putSwipedCardBack={putSwipedCardBack}
              topCardIndex={topCardIndex}
            />
            <EducationCard
              cardIndex={4}
              putSwipedCardBack={putSwipedCardBack}
              topCardIndex={topCardIndex}
            />

            <Footer />
          </div>
        </div>

        <div className="mx-auto grid h-[100vh] max-w-screen-md place-items-center max-md:hidden md:block">
          <TitleCardDesktop />
          {/* <AboutCardDesktop />
            <ExperienceCardDesktop />
            <ProjectCardDesktop />
            <EducationCardDesktop /> */}
        </div>
      </ThemeProvider>
    </motion.div>
  );
}
