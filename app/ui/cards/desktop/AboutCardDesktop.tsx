"use client";

import React, { useState } from "react";
import { about, resumeFilename } from "../../../lib/definitions";

const AboutCardDesktop = () => {

  const [resumeHovered, setResumeHovered] = useState<boolean | null>(false);

  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[33vh]">
      <header className="text-4xl font-bold">ABOUT ME</header>

      <hr />

      <section className="flex flex-col gap-4 pr-4">
        <span className="mt-4 w-full text-lg italic">
          hi there 👋, welcome to my website
        </span>

        <div className="text-md flex gap-8">
          <img
            className="mt-1 h-[135px] w-[135px] rounded-md object-cover shadow-lg"
            src="/about/placeholder.png"
            alt={about.photoAlt}
          />
          <p className="text-justify opacity-50">{about.longDescription}</p>
        </div>

        <a
          className="flex w-fit items-center gap-2 pt-2"
          download
          href={`${resumeFilename}`}
          target="_blank"
          onMouseEnter={() => setResumeHovered(true)}
          onMouseLeave={() => setResumeHovered(false)}
        >
          <span>Full Résumé</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-4 ${resumeHovered && "translate-x-2"} transition-all`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </section>
    </div>
  );
};

export default AboutCardDesktop;
