"use client";

import React from "react";
import { navs } from "../../../lib/definitions";

const NavigationMobile = ({
  cardIndex,
  putSelectedCardOnTop,
  handleNavClickForSwivel,
}) => {

  const handleCardTap = (i: number) => {
    putSelectedCardOnTop(i);
    handleNavClickForSwivel();
  };

  return (
    <nav
      className="font-normal flex justify-between gap-2 pb-4"
    >
      {navs.map((nav, i) => (
        <div key={i} className="">
          <p
            className={`${cardIndex === i && "rounded-xl bg-zinc-800 text-white dark:bg-white dark:text-black"} cursor-pointer max-md:p-1`}
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
