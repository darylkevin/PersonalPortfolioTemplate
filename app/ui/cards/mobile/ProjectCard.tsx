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
                <div className="flex gap-2 font-semibold">
                  <span>{project.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-3 pr-1"
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

                  <div className="flex flex-wrap gap-2 py-2">
                    {project.skills.map((skill, i) => (
                      <div
                        key={i}
                      className="rounded-full px-4 text-white  bg-zinc-500"
                      >
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
