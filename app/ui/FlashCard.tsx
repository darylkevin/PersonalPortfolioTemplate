"use client";

import React from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from "motion/react";

import TitleCard from "./cards/mobile/TitleCard";
import ExperienceCard from "./cards/mobile/ExperienceCard";
import ProjectCard from "./cards/mobile/ProjectCard";
import EducationCard from "./cards/mobile/EducationCard";
import AboutCard from "./cards/mobile/AboutCard";
import NavigationMobile from "./cards/mobile/NavigationMobile";

const FlashCard = ({
  cardIndex,
  putSwipedCardBack,
  topCardIndex,
  putSelectedCardOnTop,
}) => {
  const x = useMotionValue(0);
  const animation = useAnimationControls();
  const rotator = useTransform(x, [-100, 100], [-18, 18]);
  const scale = useTransform(x, [-100, 0, 100], [1.5, 1, 1.5]);
  const opacity = useTransform(
    x,
    [-100, 0, 100],
    topCardIndex === cardIndex ? [0.5, 1, 0.5] : [1, 0.5, 1],
  );

  const rotate = useTransform(() => {
    const a = `${rotator.get() + (cardIndex === topCardIndex ? 0.01 : cardIndex % 2 ? 3 : -3)}deg`;
    return a;
  });

  const handleCardSwipes = () => {
    if (Math.abs(x.get()) > 100) {
      // Cycle back cards
      // Example, if the order is [red, yellow, green, blue, violet] with violet as the top card shown in the UI
      // Then if the user swipes this card, the order would be [violet, red, yellow, green, blue] which means blue card is now the top card shown in the UI
      putSwipedCardBack();
    }
  };

  const handleNavClickForSwivel = () => {
    animation.start("swivel");
  };

  return (
    <motion.div
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "all 0.1s",
        x,
        rotate,
        scale,
        opacity,
      }}
      className={`mx-auto my-auto flex h-[300px] w-[300px] items-center justify-center xs:max-w-screen-xs ${cardIndex === topCardIndex && "z-10"}`}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      variants={{
        swivel: {
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      animate={animation}
      onDragEnd={() => handleCardSwipes()}
    >
      <div className="flex h-full w-full flex-col gap-2 p-4 max-md:rounded-xl max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
        <div className={`${cardIndex !== topCardIndex && "hidden"}`}>
          <header className="md:hidden">
            <NavigationMobile
              cardIndex={cardIndex}
              putSelectedCardOnTop={putSelectedCardOnTop}
              handleNavClickForSwivel={handleNavClickForSwivel}
            />
          </header>

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
    </motion.div>
  );
};

export default FlashCard;
