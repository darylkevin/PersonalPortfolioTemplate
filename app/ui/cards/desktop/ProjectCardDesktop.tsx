"use client";

import React, { useState } from "react";
import { projects } from "../../../lib/definitions";
import Link from "next/link";

const ProjectCardDesktop = () => {
  const [projectCardHovered, setProjectCardHovered] = useState<number | null>(
    null,
  );

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[60vh]">
      <header className="text-4xl font-bold">NOTABLE PROJECTS</header>

      <hr />

      <section className="flex flex-col gap-4 overflow-auto">
        {projects.map((project, i) => (
          <Link
            href={project.link}
            key={i}
            className={`grid grid-cols-3 gap-8 pr-4 pt-8 transition-all lg:grid-cols-4 ${projectCardHovered !== null && (i === projectCardHovered ? "cursor-pointer" : "opacity-30")}`}
            onMouseEnter={() => setProjectCardHovered(i)}
            onMouseLeave={() => setProjectCardHovered(null)}
          >
            <img
              className="mt-1 h-[85px] w-[120px] rounded-md object-cover shadow-lg"
              src="/projects/placeholder.png"
              alt={project.imageAlt}
            />
            <div className="col-span-2 flex flex-col lg:col-span-3">
              <div className="flex justify-between">
                <span className="font-semibold">{project.title}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`transition-all ${i === projectCardHovered ? "size-5" : "size-3"}`}
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
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.skills.map((skill, i) => (
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
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ProjectCardDesktop;
