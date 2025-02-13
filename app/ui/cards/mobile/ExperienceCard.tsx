"use client";

import React, { useContext, useEffect, useState } from "react";
import { experiences } from "../../../lib/definitions";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 pt-2 z-10 bg-white pb-1 text-3xl font-bold dark:bg-black">
        EXPERIENCE
      </section>
      <div className="text-xs">
        {experiences.map((experience, i) => (
          <div className="flex gap-4 pt-2" key={i}>
            <p className="min-w-10 max-w-10 opacity-50">{experience.period}</p>
            <div>
              <span className="font-semibold">
                {experience.title} · {experience.company}
              </span>
              <p className="pt-2 text-justify font-normal opacity-50">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
