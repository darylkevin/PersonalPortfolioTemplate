"use client";

import React from "react";
import { experiences } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const ExperienceCardDesktop = () => {
  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[50vh]">
      <header className="text-4xl font-bold">PROFESSIONAL EXPERIENCES</header>

      <hr />

      <section className="overflow-auto">
        {experiences.map((experience, i) => (
          <div className="grid grid-cols-4 gap-8 pt-2 lg:grid-cols-5" key={i}>
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
