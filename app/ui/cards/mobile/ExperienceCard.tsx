"use client";

import React from "react";
import { experiences, resumeFilename } from "../../../lib/definitions";
import Link from "next/link";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-1 pt-[2px] text-3xl font-bold dark:bg-black">
        EXPERIENCE
      </section>
      <div className="text-xs flex flex-col gap-4">
        <div>
        {experiences.map((experience, i) => (
          <Link href={experience.link} className="flex gap-4 pt-2" key={i}>
            <p className="min-w-10 max-w-10 opacity-50">{experience.period}</p>
            <div>
              <div className="flex gap-2 font-semibold">
                <span>
                  {experience.title} · {experience.company}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-3 pr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
              <div>
                <p className="pt-2 text-justify font-normal opacity-50">
                  {experience.description}
                </p>

                <div className="flex gap-2 py-2 flex-wrap">
                  {experience.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="rounded-full px-4 text-white  bg-zinc-500"
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


        <a className="flex gap-2 items-center" download href={`${resumeFilename}`} target="_blank">
          <span>Full Résumé</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
