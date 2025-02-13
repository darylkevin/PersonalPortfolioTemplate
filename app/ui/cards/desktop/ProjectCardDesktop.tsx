"use client";

import React from "react";
import { projects } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const ProjectCardDesktop = () => {
  return (
    <div className="h-[80vh] lg:h-[60vh] flex flex-col gap-8 justify-between">

      <header className="text-4xl font-bold">
        NOTABLE PROJECTS
      </header>

      <hr /> 

      <section className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
              <img
                className="mt-1 rounded-md shadow-lg w-[120px] h-[85px] object-cover"
                src="/projects/placeholder.png"
                alt={project.imageAlt}
              />
              <div className="col-span-2 lg:col-span-3 flex flex-col">
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
