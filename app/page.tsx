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
import TitleCard from "./ui/TitleCard";
import AboutCard from "./ui/AboutCard";
import ExperienceCard from "./ui/ExperienceCard";
// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {
  const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <motion.div 
    variants={{
      pop: {
        scale: [0.5, 1],
        opacity: [0, 1],
      },
    }}
    initial="initial"
    animate={isMediumScreen ? 'pop' : 'initial'}>
      <ThemeProvider>
        <TitleCard />
        <AboutCard />
        <ExperienceCard />
      </ThemeProvider>
    </motion.div>
  );
}
