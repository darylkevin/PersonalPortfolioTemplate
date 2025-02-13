"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

import TitleCard from "./cards/mobile/TitleCard";
import ExperienceCard from "./cards/mobile/ExperienceCard";
import ProjectCard from "./cards/mobile/ProjectCard";
import EducationCard from "./cards/mobile/EducationCard";
import AboutCard from "./cards/mobile/AboutCard";
import NavigationMobile from "./cards/mobile/NavigationMobile";

const FlashCard = ({
  cardIndex,
  cardStack,
  cardIsSwiped,
  setCardIsSwiped,
  setCardStack,
  topCardIndex,
}) => {
  const x = useMotionValue(0);
  const rotator = useTransform(x, [-35, 35], [-18, 18]);
  const scale = useTransform(x, [-35, 0, 35], [1.5, 1, 1.5]);
  const opacity = useTransform(
    x,
    [-35, -0.01, 0, 0.01, 35],
    topCardIndex === cardIndex ? [0.5, 0.5, 1, 0.5, 0.5] : [0, 0, 0.2, 0,  0],
  );

  const rotate = useTransform(() => {
    const a = `${rotator.get() + (cardIndex === topCardIndex ? 0.01 : cardIndex % 2 ? 3 : -3)}deg`;
    return a;
  });

  const [allowScroll, setAllowScroll] = useState(false);

  // By default, scrolling will be prioritized if there is a slight y-axis differences why a touch move is detected.
  // Hence, almost everytime scrolling will take over swiping.
  // Therefore, a workaround is to calculate whether x-axis differences are more than the y-axis.
  // From this we can detect whether the user intends to swipe or scroll.
  // If the x-axis is more dominant, meaning the user wants to swipe, then we need to stop the event propagation of the touch move.
  // Setting passive to false allow us to manually stop event propagation, as by default event propagation cannot be prevented.
  // Hence since the propagation is stopped now, the next immediate touch move will be swiping, within this time swiping is triggered.
  // Once the user's finger left the screen, there is no longer any event and hence we need to make sure event propagation goes back to normal.
  // This is done by removing the event listener.

  // Solution provided by thebuilder (Oct 17, 2019) - https://github.com/motiondivision/motion/issues/185#issuecomment-542829562

  // useEffect(() => {
  //   if (!allowScroll) {
  //     const handleTouch = (event) => {
  //       event.stopPropagation();
  //     };
  //     document.documentElement.addEventListener("touchmove", handleTouch, { passive: false });

  //     return () => {
  //       document.documentElement.removeEventListener("touchmove", handleTouch);
  //     };
  //   }
  // }, [allowScroll]);

  const handleCardSwipes = () => {
    if (Math.abs(x.get()) > 35) {
      const updatedStack = [...cardStack];
      const removedCard = updatedStack.splice(0, 1);
      const newStack = [...updatedStack, ...removedCard];
      setCardIsSwiped(true);
      setCardStack(newStack);

      // Reset motion values
      // x.set(0);
      // x.stop();
      // scale.set(1);
      // scale.stop();
      // opacity.set(1);
      // opacity.stop();
    }
  };

  const putSelectedCardOnTop = (cardIndex) => {
    setCardIsSwiped(false);
    const newStack = [
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 0],
      [2, 3, 4, 0, 1],
      [3, 4, 0, 1, 2],
      [4, 0, 1, 2, 3],
    ][cardIndex];
    setCardStack(newStack);
  };

  return (
    <motion.div
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "transform 0.2s",
        x,
        rotate: rotate,
        scale,
        opacity,
      }}
      className={`mx-auto my-auto flex h-[320px] w-[320px] items-center justify-center xs:max-w-screen-xs ${
        cardIndex === topCardIndex && "z-10"
      }`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      initial="initial"
      variants={{
        swivel: {
          rotate: [0, 9, -9, 0],
          transition: { duration: 1, ease: "anticipate" },
        },
      }}
      animate={!cardIsSwiped && cardIndex === topCardIndex ? "swivel" : "initial"}
      onDragStart={(event, info) => {
        setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x)); // Check which direction is the touch move more dominant
      }}
      onDragEnd={handleCardSwipes}
    >
      <div className="h-full w-full gap-2 p-4 max-md:rounded-xl max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
        <div className={`flex h-full flex-col ${cardIndex !== topCardIndex && "hidden"}`}>
          <header className="sticky top-0 md:hidden">
            <NavigationMobile cardIndex={cardIndex} putSelectedCardOnTop={putSelectedCardOnTop} />
          </header>

          <div
            className="h-full overflow-y-auto"
            style={{
              touchAction: allowScroll ? "auto" : "none", // Solution provided by Miloshinjo (Jun 22, 2023) - https://github.com/motiondivision/motion/issues/1506#issuecomment-1602394298
            }}
          >
            {(() => {
              switch (cardIndex) {
                case 0:
                  return <TitleCard />;
                case 1:
                  return <AboutCard />;
                case 2:
                  return <ExperienceCard />;
                case 3:
                  return <ProjectCard />;
                case 4:
                  return <EducationCard />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;