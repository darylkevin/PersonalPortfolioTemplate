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
import FlashCard from "./ui/FlashCard";
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
import CinemaCard from "./ui/CinemaCard";
import NavigationDesktop from "./ui/cards/desktop/NavigationDesktop";
// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {
  const [cardStack, setCardStack] = useState(
    Array.from({ length: navs.length }, (_, i) => i),
  );
  const topCardIndex = cardStack[0];
  const isMediumScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  const putSwipedCardBack = () => {
    const updatedStack = [...cardStack];
    const removedCard = updatedStack.splice(0, 1);
    const newStack = [...updatedStack, ...removedCard];
    setCardStack(newStack);
  };

  const putSelectedCardOnTop = (selectedCardIndex) => {
    switch (selectedCardIndex) {
      case 0:
        setCardStack([0, 1, 2, 3, 4]);
        break;
      case 1:
        setCardStack([1, 2, 3, 4, 0]);
        break;
      case 2:
        setCardStack([2, 3, 4, 0, 1]);
        break;
      case 3:
        setCardStack([3, 4, 0, 1, 2]);
        break;
      case 4:
        setCardStack([4, 0, 1, 2, 3]);
        break;
      default:
        break;
    }
  };

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
            {cardStack.map((cardIndex) => (
              <FlashCard
                key={cardIndex}
                cardIndex={cardIndex}
                putSwipedCardBack={putSwipedCardBack}
                topCardIndex={topCardIndex}
                putSelectedCardOnTop={putSelectedCardOnTop}
              />
            ))}
              <Footer />
          </div>
        </div>

        <div className="mx-auto grid h-[100vh] place-items-center max-md:hidden md:block md:max-w-screen-sm lg:max-w-screen-md">
          <div className="grid grid-cols-3 gap-12 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-3">
              {cardStack.map((cardIndex) => (
                <CinemaCard key={cardIndex} cardIndex={cardIndex} />
              ))}
              {/* <TitleCardDesktop />
              <AboutCardDesktop />
              <ExperienceCardDesktop />
              <ProjectCardDesktop />
              <EducationCardDesktop /> */}
            </div>

            <div className="sticky top-0 grid h-[100vh] place-items-center">
              <NavigationDesktop />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
}
