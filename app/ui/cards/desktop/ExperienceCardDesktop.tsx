"use client";

import React, { useState } from "react";
import { experiences } from "@/app/lib/definitions";
import Link from "next/link";

const ExperienceCardDesktop = () => {
  const [experienceHovered, setExperienceHovered] = useState<number | null>(
    null,
  );

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[50vh]">
      <header className="text-4xl font-bold">PROFESSIONAL EXPERIENCES</header>

      <hr />

      <section className="overflow-auto">
        {experiences.map((experience, i) => (
          <Link
            href={experience.link}
            className={`grid grid-cols-4 gap-8 pr-4 pt-8 transition-all lg:grid-cols-5 ${experienceHovered !== null && (i === experienceHovered ? "cursor-pointer" : "opacity-30")}`}
            key={i}
            onMouseEnter={() => setExperienceHovered(i)}
            onMouseLeave={() => setExperienceHovered(null)}
          >
            <p className="opacity-50">{experience.period}</p>
            <div className="col-span-3 lg:col-span-4">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {experience.title} · {experience.company}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`transition-all ${i === experienceHovered ? "size-5" : "size-3"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
              <div>
                <p className="pt-2 text-justify font-normal opacity-50">{experience.description}</p>

                <div className="flex gap-2 pt-4">
                  {experience.skills.map((skill, i) => (
                    <div key={i} className="">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ExperienceCardDesktop;
