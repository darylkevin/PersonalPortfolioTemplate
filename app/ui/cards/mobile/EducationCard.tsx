"use client";

import React, { useState } from "react";
import { education } from "../../../lib/definitions";
import { CardProps } from "../../interfaces/interfaces";

const EducationCard: React.FC<CardProps> = ({ selected, setSelected }) => {
  const maxPage = education.length;

  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-2 text-3xl font-bold dark:bg-black">
        EDUCATION
      </section>
      <div className="flex flex-col text-xs">
        <div className="max-h-44 min-h-44 overflow-hidden">
          <div>
            <img
              className="mb-2 h-[75px] w-full rounded-md object-cover shadow-lg"
              src="/education/placeholder.png"
              alt={education[selected].imageAlt}
            />

            <span className="font-semibold">
              {education[selected].institution}
            </span>
            <p className="pr-2 text-justify font-semibold opacity-50">
              {education[selected].degree} ({education[selected].period})
            </p>

            <div className="col-span-2 flex flex-col">
              <p className="py-2 pr-2 text-justify opacity-50">
                {education[selected].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          {Array.from({ length: maxPage }).map((_, i) => (
            <div
              key={i}
              className={`${
                selected === i ? "scale-150" : "opacity-50"
              } transition-all`}
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

export default EducationCard;
