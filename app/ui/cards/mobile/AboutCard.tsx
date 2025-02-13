"use client";

import React, { useContext, useEffect, useState } from "react";
import { about } from "../../../lib/definitions";
import ThemeContext from "../../contexts/ThemeContext";

const AboutCard = () => {
  return (
    <div className="hover:cursor-pointer">
      <div className="sticky top-0 bg-white pb-1 pt-2  text-3xl font-bold dark:bg-black">
        ABOUT
      </div>
      <div className="pt-2 text-justify text-sm font-normal text-zinc-400">
        {about.description}
      </div>
    </div>
  );
};

export default AboutCard;
