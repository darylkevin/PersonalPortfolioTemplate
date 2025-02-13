"use client";

import React from "react";
import { experiences } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const ExperienceCardDesktop = () => {
  return (
    <div className="h-[80vh] lg:h-[50vh] flex flex-col gap-8 justify-between">

      <header className="text-4xl font-bold">
        PROFESSIONAL EXPERIENCES
      </header>

      <hr /> 

      <section>
          {experiences.map((experience, i) => (
            <div className="grid grid-cols-4 lg:grid-cols-5 gap-8 pt-2" key={i}>
              <p className="opacity-50">{experience.period}</p>
              <div className="col-span-3 lg:col-span-4">
                <span className="font-semibold">
                  {experience.title} · {experience.company}
                </span>
                <p className="pt-2 text-justify font-normal opacity-50">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ExperienceCardDesktop;
