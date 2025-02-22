"use client";

import React, { useState } from "react";
import { experiences, resumeFilename } from "../../../lib/definitions";
import { CardProps } from "../../interfaces/interfaces";
import Link from "next/link";

const ExperienceCard: React.FC<CardProps> = ({ selected, setSelected }) => {
  const maxPage = experiences.length;

  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-2 text-3xl font-bold dark:bg-black">
        EXPERIENCE
      </section>
      <div className="flex flex-col text-xs">
        <div className="max-h-44 min-h-44 overflow-hidden">
          <div className="flex flex-col gap-2">
            <p className="opacity-50">{experiences[selected].period}</p>
            <div>
              <div className="flex gap-2 font-semibold">
                <Link href={experiences[selected].link}>
                  {experiences[selected].title} ·{" "}
                  {experiences[selected].company}
                </Link>
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
              <div className="flex flex-col justify-between">
                <p className="text-justify font-normal opacity-50">
                  {experiences[selected].description}
                </p>

                <div className="flex flex-wrap gap-2 py-3">
                  {experiences[selected].skills.map((skill, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-zinc-500 px-4 text-white"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5">
          {Array.from({ length: maxPage }).map((_, i) => (
            <div
              key={i}
              className={`${selected === i ? "scale-150" : "opacity-50"} transition-all`}
              onClick={() => {
                setSelected(i);
              }}
            >
              •
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
