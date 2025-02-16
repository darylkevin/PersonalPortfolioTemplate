"use client";

import React from "react";
import { projects } from "../../../lib/definitions";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <section className="sticky top-0 z-10 bg-white pb-2 pt-[2px] text-3xl font-bold dark:bg-black">
        PROJECTS
      </section>
      <div className="flex flex-col gap-2 text-xs">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className="grid grid-cols-3 gap-1">
              <img
                className="mt-1 rounded-md shadow-lg"
                src="/projects/placeholder.png"
                alt={project.imageAlt}
                width={80}
                height={80}
              />
              <div className="col-span-2 flex flex-col">

                <span className="font-semibold">{project.title}</span>
                  <div>
                    <p className="pt-2 text-justify font-normal opacity-50">{project.description}</p>

                    <div className="flex gap-2 py-2 flex-wrap">
                      {project.skills.map((skill, i) => (
                        <div key={i} className="rounded-xl bg-black text-white dark:bg-white dark:text-black p-1">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
