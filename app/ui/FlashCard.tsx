"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

import TitleCard from "./cards/mobile/TitleCard";
import ExperienceCard from "./cards/mobile/ExperienceCard";
import ProjectCard from "./cards/mobile/ProjectCard";
import EducationCard from "./cards/mobile/EducationCard";
import AboutCard from "./cards/mobile/AboutCard";
import NavigationMobile from "./cards/mobile/NavigationMobile";

const FlashCard = ({ cardIndex, cardStack, cardIsSwiped, setCardStack, topCardIndex }) => {

  const x = useMotionValue(0);
  const rotator = useTransform(x, [-35, 35], [-18, 18]);
  const scale = useTransform(x, [-35, 0, 35], [1.5, 1, 1.5]);
  const opacity = useTransform(
    x,
    [-35, 0, 35],
    topCardIndex === cardIndex ? [0.5, 1, 0.5] : [1, 0.2, 1]
  );
  const rotate = useTransform(() => {
    const a = `${rotator.get() + (cardIndex === topCardIndex ? 0.01 : cardIndex % 2 ? 3 : -3)}deg`;
    return a;
  });

  const handleCardSwipes = () => {
    if (Math.abs(x.get()) > 35) {

      const updatedStack = [...cardStack];
      const removedCard = updatedStack.splice(0, 1);
      const newStack = [...updatedStack, ...removedCard];
      cardIsSwiped.current = true;
      setCardStack(newStack);

      // Reset motion values
      x.set(0);
      x.stop();
      rotate.set("0deg");
      rotate.stop();
      scale.set(1);
      scale.stop();
      opacity.set(1);
      opacity.stop();
    }
  };

  const putSelectedCardOnTop = (cardIndex) => {

    cardIsSwiped.current = false;

    switch (cardIndex) {
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
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "transform 0.2s",
        x,
        rotate,
        scale,
        opacity,
      }}
      className={`mx-auto my-auto flex h-[320px] w-[320px] items-center justify-center xs:max-w-screen-xs ${cardIndex === topCardIndex && "z-10"}`}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      initial="initial"
      variants={{
        swivel: {
          rotate: [0, 9, -9, 0],
          transition: {
            duration: 1,
            ease: "anticipate",
          },
        },
      }}
      animate={!cardIsSwiped.current && cardIndex === topCardIndex ? "swivel" : "initial" }
      onDragEnd={() => handleCardSwipes()}
    >
      <div className="h-full w-full gap-2 p-4 max-md:rounded-xl max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
        <div className={`flex h-full flex-col ${cardIndex !== topCardIndex && "hidden"}`}>
          <header className="md:hidden">
            <NavigationMobile cardIndex={cardIndex} putSelectedCardOnTop={putSelectedCardOnTop} />
          </header>

          <div className="h-full">
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