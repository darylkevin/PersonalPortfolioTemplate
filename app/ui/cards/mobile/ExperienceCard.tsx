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
              <div>
                <p className="pt-2 text-justify font-normal opacity-50">
                  {experience.description}
                </p>

                <div className="flex gap-2 py-2">
                  {experience.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-black p-1 text-white dark:bg-white dark:text-black"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
