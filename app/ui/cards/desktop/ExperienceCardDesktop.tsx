"use client";

import React, { useState } from "react";
import { experiences } from "@/app/lib/definitions";


const ExperienceCardDesktop = () => {

  const [ experienceHovered, setExperienceHovered ] = useState(null);

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[50vh]">
      <header className="text-4xl font-bold">PROFESSIONAL EXPERIENCES</header>

      <hr />

      <section className="overflow-auto">
        {experiences.map((experience, i) => (
          <div className={`grid grid-cols-4 gap-8 pt-8 pr-4 lg:grid-cols-5 transition-all ${experienceHovered !== null && (i === experienceHovered ? 'cursor-pointer' : 'opacity-30')}`} key={i} onMouseEnter={() => setExperienceHovered(i)} onMouseLeave={() => setExperienceHovered(null)}>
            <p className="opacity-50">{experience.period}</p>
            <div className="col-span-3 lg:col-span-4">
              <div className="flex justify-between">
              <span className="font-semibold">
                {experience.title} · {experience.company}
              </span>
              {/* <svg 
              className={`text-black dark:text-white transition-all ${i === experienceHovered ? 'size-5' : 'pt-1 pr-1 size-5'}`} 
              viewBox="0 0 1024 1024" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"/>
              <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"/>
            </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`transition-all ${i === experienceHovered ? 'size-5' : 'size-3'}`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>

              </div>
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
