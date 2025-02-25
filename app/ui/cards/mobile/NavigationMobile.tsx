"use client";

import React from "react";
import { navs } from "../../../lib/definitions";

import { NavigationMobileProps } from "../../interfaces/interfaces";

const NavigationMobile = ({
  cardIndex,
  putSelectedCardOnTop,
  setSelectedExperience,
  setSelectedProject,
  setSelectedEducation,
}: NavigationMobileProps) => {
  const handleCardTap = (i: number) => {
    putSelectedCardOnTop(i);

    setSelectedExperience(0);
    setSelectedProject(0);
    setSelectedEducation(0);
  };

  return (
    <nav className="flex justify-between gap-2 pb-4 font-normal">
      {navs.map((nav, i) => (
        <div key={i}>
          <p
            className={`${cardIndex === i && "rounded-full bg-black text-white dark:bg-white dark:text-black"} cursor-pointer max-md:p-1`}
            onClick={() => handleCardTap(i)}
          >
            {nav.shortPart}
          </p>
        </div>
      ))}
    </nav>
  );
};

export default NavigationMobile;
