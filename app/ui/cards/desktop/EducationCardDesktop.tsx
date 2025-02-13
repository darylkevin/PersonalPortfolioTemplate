"use client";

import React from "react";
import { education } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const EducationCardDesktop = () => {
  return (
    <div className="h-[70vh] lg:h-[60vh] flex flex-col gap-8 justify-between">

      <header className="text-4xl font-bold">
        EDUCATION HISTORY
      </header>

      <hr /> 

      <section className="flex flex-col gap-4">
        {education.map((education, index) => (
          <div key={index}>
            <img
              className="mb-2 h-[80px] lg:h-[100px] w-full rounded-md object-cover shadow-lg"
              src="/education/placeholder.png"
              alt={education.imageAlt}
            />

            <span className="font-semibold">{education.institution}</span>
            <p className="pr-2 text-justify font-semibold opacity-50">
              {education.degree} ({education.period})
            </p>

            <div className="col-span-2 flex flex-col">
              <p className="pr-2 text-justify opacity-50">
                {education.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EducationCardDesktop;
