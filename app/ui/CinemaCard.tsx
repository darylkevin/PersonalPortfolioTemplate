"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import TitleCardDesktop from "./cards/desktop/TitleCardDesktop";
import AboutCardDesktop from "./cards/desktop/AboutCardDesktop";
import ExperienceCardDesktop from "./cards/desktop/ExperienceCardDesktop";
import ProjectCardDesktop from "./cards/desktop/ProjectCardDesktop";
import EducationCardDesktop from "./cards/desktop/EducationCardDesktop";

const CinemaCard = ({ cardIndex }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Define scroll positions dynamically based on viewport height
  const startFadeIn = 0.25; // x/4
  const fullVisible = 0.5; // x/2
  const startFadeOut = 0.75; // 3x/4

  // Transform opacity based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [0, startFadeIn, fullVisible, startFadeOut, 1],
    [1, 0.5, 0, 0.5, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, startFadeIn, fullVisible, startFadeOut, 1],
    [1, 0.5, 0, 0.5, 1]
  );

  return (
    <motion.main
      id={`card-${cardIndex}`}
      ref={container}
      className="flex h-[100vh] flex-col justify-center"
      style={{
        scale,
        opacity 
      }}
    >
      <div>
        {(() => {
          switch (cardIndex) {
            case 0:
              return <TitleCardDesktop />;
            case 1:
              return <AboutCardDesktop />;
            case 2:
              return <ExperienceCardDesktop />;
            case 3:
              return <ProjectCardDesktop />;
            case 4:
              return <EducationCardDesktop />;
            default:
              return null;
          }
        })()}
      </div>
    </motion.main>
  );
};

export default CinemaCard;