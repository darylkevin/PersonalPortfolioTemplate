import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

import TitleCard from "./cards/mobile/TitleCard";
import ExperienceCard from "./cards/mobile/ExperienceCard";
import ProjectCard from "./cards/mobile/ProjectCard";
import EducationCard from "./cards/mobile/EducationCard";
import AboutCard from "./cards/mobile/AboutCard";
import NavigationMobile from "./cards/mobile/NavigationMobile";

import { FlashCardProps } from "./interfaces/interfaces";

const FlashCard: React.FC<FlashCardProps> = ({
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
    topCardIndex === cardIndex ? [0.5, 0.5, 1, 0.5, 0.5] : [0, 0, 0.2, 0, 0],
  );

  const rotate = useTransform(() => {
    return `${rotator.get() + (cardIndex === topCardIndex ? 0.01 : cardIndex % 2 ? 3 : -3)}deg`;
  });

  const handleCardSwipes = () => {
    if (Math.abs(x.get()) > 35) {
      const updatedStack = [...cardStack];
      const removedCard = updatedStack.splice(0, 1);
      const newStack = [...updatedStack, ...removedCard];
      setCardIsSwiped(true);
      setCardStack(newStack);
    }
  };

  const putSelectedCardOnTop = (cardIndex: number) => {
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

  const [selectedExperience, setSelectedExperience] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedEducation, setSelectedEducation] = useState(0);

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
      dragDirectionLock={true}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      initial="initial"
      variants={{
        swivel: {
          rotate: [9, -9, 0],
          transition: { duration: 1, ease: "easeInOut" },
        },
      }}
      animate={
        !cardIsSwiped && cardIndex === topCardIndex ? "swivel" : "initial"
      }
      onDragEnd={handleCardSwipes}
    >
      <div className="h-full w-full gap-2 p-4 max-md:rounded-xl max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
        <div
          className={`flex h-full flex-col ${cardIndex !== topCardIndex && "hidden"}`}
        >
          <header className="sticky top-0 md:hidden">
            <NavigationMobile
              cardIndex={cardIndex}
              putSelectedCardOnTop={putSelectedCardOnTop}
              setSelectedExperience={setSelectedExperience}
              setSelectedProject={setSelectedProject}
              setSelectedEducation={setSelectedEducation}
            />
          </header>

          <div className="h-full">
            {(() => {
              switch (cardIndex) {
                case 0:
                  return <TitleCard />;
                case 1:
                  return <AboutCard />;
                case 2:
                  return (
                    <ExperienceCard
                      selected={selectedExperience}
                      setSelected={setSelectedExperience}
                    />
                  );
                case 3:
                  return (
                    <ProjectCard
                      selected={selectedProject}
                      setSelected={setSelectedProject}
                    />
                  );
                case 4:
                  return (
                    <EducationCard
                      selected={selectedEducation}
                      setSelected={setSelectedEducation}
                    />
                  );
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
