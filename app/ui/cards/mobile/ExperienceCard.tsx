"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const ExperienceCard = ({ cardIndex, putSwipedCardBack, topCardIndex }) => {
  const x = useMotionValue(0);
  const rotator = useTransform(x, [-150, 150], [-18, 18]);
  const scale = useTransform(x, [-150, 0, 150], [2, 1, 2]);
  const opacity = useTransform(
    x,
    [-150, 0, 150],
    topCardIndex === cardIndex ? [0.5, 1, 0.5] : [0.5, 0.5, 0.5],
  );

  const rotate = useTransform(() => {
    const a = `${rotator.get() + (cardIndex === topCardIndex ? 0.01 : cardIndex % 2 ? 3 : -3)}deg`;
    return a;
  });

  const handleCardSwipes = () => {
    if (Math.abs(x.get()) > 150) {
      // Cycle back cards
      // Example, if the order is [red, yellow, green, blue, violet] with violet as the top card shown in the UI
      // Then if the user swipes this card, the order would be [violet, red, yellow, green, blue] which means blue card is now the top card shown in the UI
      putSwipedCardBack();
    }
  };

  return (
    <motion.div
      style={{
        gridRow: 1,
        gridColumn: 1,
        transition: "all 0.2s",
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
      onDragEnd={() => handleCardSwipes(cardIndex)}
    >
      <div className="flex h-full w-full flex-col gap-2 p-4 max-md:rounded-xl max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
        <div className={`${cardIndex !== topCardIndex && "hidden"}`}>hi</div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
