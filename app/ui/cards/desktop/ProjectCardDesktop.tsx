"use client";

import React from "react";
import { projects } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const ProjectCardDesktop = () => {
  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[60vh]">
      <header className="text-4xl font-bold">NOTABLE PROJECTS</header>

      <hr />

      <section className="flex flex-col gap-4  overflow-auto">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="grid grid-cols-3 gap-8 lg:grid-cols-4">
              <img
                className="mt-1 h-[85px] w-[120px] rounded-md object-cover shadow-lg"
                src="/projects/placeholder.png"
                alt={project.imageAlt}
              />
              <div className="col-span-2 flex flex-col lg:col-span-3">
                <span className="font-semibold">{project.title}</span>
                <p className="pr-2 text-justify opacity-50">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectCardDesktop;
