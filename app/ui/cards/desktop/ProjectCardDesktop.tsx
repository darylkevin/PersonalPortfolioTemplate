"use client";

import React, { useState } from "react";
import { projects } from "@/app/lib/definitions";

const ProjectCardDesktop = () => {

  const [projectCardHovered, setProjectCardHovered] = useState(null);

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[60vh]">
      <header className="text-4xl font-bold">NOTABLE PROJECTS</header>

      <hr />

      <section className="flex flex-col gap-4  overflow-auto">
        {projects.map((project, i) => (
            <div key={i} className={`grid grid-cols-3 gap-8 pt-8 pr-4 lg:grid-cols-4 transition-all ${projectCardHovered !== null && (i === projectCardHovered ? 'cursor-pointer' : 'opacity-30')}`}  onMouseEnter={() => setProjectCardHovered(i)} onMouseLeave={() => setProjectCardHovered(null)}>
              <img
                className="mt-1 h-[85px] w-[120px] rounded-md object-cover shadow-lg"
                src="/projects/placeholder.png"
                alt={project.imageAlt}
              />
              <div className="col-span-2 flex flex-col lg:col-span-3">
                <div className="flex justify-between">
                  <span className="font-semibold">{project.title}</span>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`transition-all ${i === projectCardHovered ? 'size-5' : 'size-3'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                <p className="pr-2 text-justify opacity-50">
                  {project.description}
                </p>
              </div>
            </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectCardDesktop;
