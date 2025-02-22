"use client";

import React from "react";
import { about, resumeFilename } from "../../../lib/definitions";

const AboutCard = () => {
  return (
    <div className="hover:cursor-pointer">
      <div className="sticky top-0 bg-white pb-2 text-3xl font-bold dark:bg-black">
        ABOUT
      </div>
      <div className="flex flex-col gap-6 pt-2 text-justify text-sm font-normal">
        <span className="opacity-50">{about.longDescription}</span>

        <a
          className="flex w-fit items-center gap-2"
          download
          href={`${resumeFilename}`}
          target="_blank"
        >
          <span>Full Résumé</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
