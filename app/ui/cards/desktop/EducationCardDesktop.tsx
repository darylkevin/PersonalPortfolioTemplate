"use client";

import React, { useState } from "react";
import { education } from "@/app/lib/definitions";

const EducationCardDesktop = () => {

  const [ educationHovered, setEducationHovered ] = useState(null);

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[60vh]">
      <header className="text-4xl font-bold">EDUCATION HISTORY</header>

      <hr />

      <section className="flex flex-col gap-4 overflow-auto">
        {education.map((education, i) => (
          <div key={i} className={`pt-8 pr-4 transition-all ${educationHovered !== null && (i === educationHovered ? 'cursor-pointer' : 'opacity-30')}`}  onMouseEnter={() => setEducationHovered(i)} onMouseLeave={() => setEducationHovered(null)}>
            <img
              className="mb-2 h-[80px] w-full rounded-md object-cover shadow-lg lg:h-[100px]"
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
