"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
// xs: 320
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

import { ThemeProvider } from "./ui/contexts/ThemeContext";
import { navs } from "./lib/definitions";

import Footer from "./ui/Footer";
import FlashCard from "./ui/FlashCard";
import CinemaCard from "./ui/CinemaCard";
import NavigationDesktop from "./ui/cards/desktop/NavigationDesktop";

export default function Home() {
  const [cardStack, setCardStack] = useState(
    Array.from({ length: navs.length }, (_, i) => i),
  );
  const [cardIsSwiped, setCardIsSwiped] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsMediumScreen(window.matchMedia("(max-width: 768px)").matches);
    setIsInitialLoad(false);
  }, []);

  const topCardIndex = cardStack[0];

  return (
    <motion.div
      className={`${isInitialLoad && "opacity-0"}`}
      variants={{
        pop: {
          scale: [0.5, 1],
          opacity: [0, 1],
        },
      }}
      initial="initial"
      animate={isMediumScreen ? "pop" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <ThemeProvider>
        <div className="mx-auto grid h-[100vh] max-w-screen-md place-items-center md:hidden">
          <div className="grid place-items-center">
            {cardStack.map((cardIndex) => (
              <FlashCard
                key={cardIndex}
                cardIndex={cardIndex}
                cardStack={cardStack}
                cardIsSwiped={cardIsSwiped}
                setCardIsSwiped={setCardIsSwiped}
                setCardStack={setCardStack}
                topCardIndex={topCardIndex}
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
