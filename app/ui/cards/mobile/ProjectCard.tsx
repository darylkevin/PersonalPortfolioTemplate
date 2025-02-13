"use client";

import React, { useContext, useEffect, useState } from "react";
import { projects } from "../../../lib/definitions";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-2 text-3xl font-bold dark:bg-black">
        PROJECTS
      </section>
      <div className="flex flex-col gap-2 text-xs">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="grid grid-cols-3 gap-1">
              <Image
                className="mt-1 rounded-md shadow-lg"
                src="/projects/placeholder.png"
                alt={project.imageAlt}
                width={80}
                height={80}
              />
              <div className="col-span-2 flex flex-col">
                <span>{project.title}</span>
                <p className="pr-2 text-justify opacity-50">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
