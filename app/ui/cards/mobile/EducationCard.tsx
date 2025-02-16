"use client";

import React from "react";
import { education } from "../../../lib/definitions";

const EducationCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-2 pt-[2px] text-3xl font-bold dark:bg-black">
        EDUCATION
      </section>
      <div className="flex flex-col gap-2 text-xs">
        {education.map((education, index) => (
          <div key={index}>
            <img
              className="mb-2 h-[50px] w-full rounded-md object-cover shadow-lg"
              src="/education/placeholder.png"
              alt={education.imageAlt}
            />

            <span className="font-semibold">{education.institution}</span>
            <p className="pr-2 text-justify font-semibold opacity-50">
              {education.degree} ({education.period})
            </p>

            <div className="col-span-2 flex flex-col">
              <p className="pr-2 py-2 text-justify opacity-50">
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
