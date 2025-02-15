"use client";

import React from "react";
import { about } from "../../../lib/definitions";

const AboutCard = () => {
  return (
    <div className="hover:cursor-pointer">
      <div className="sticky top-0 bg-white pb-1 pt-[2px] text-3xl font-bold dark:bg-black">
        ABOUT
      </div>
      <div className="pt-2 text-justify text-sm font-normal opacity-50">
        {about.longDescription}
      </div>
    </div>
  );
};

export default AboutCard;
