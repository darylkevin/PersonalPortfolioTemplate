"use client";

import React from "react";
import { experiences } from "../../../lib/definitions";
import Link from "next/link";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-1 pt-[2px] text-3xl font-bold dark:bg-black">
        EXPERIENCE
      </section>
      <div className="text-xs">
        {experiences.map((experience, i) => (
          <Link href={experience.link} className="flex gap-4 pt-2" key={i}>
            <p className="min-w-10 max-w-10 opacity-50">{experience.period}</p>
            <div>
              <span className="font-semibold">
                {experience.title} · {experience.company}
              </span>
              <p className="pt-2 text-justify font-normal opacity-50">
                {experience.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
