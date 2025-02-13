"use client";

import React from "react";
import { about } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const AboutCardDesktop = () => {
  return (
    <div className="h-[50vh] lg:h-[33vh] flex flex-col gap-8 justify-between">

      <header className="text-4xl font-bold">
        ABOUT ME
      </header>

      <hr /> 

      <section className="flex flex-col gap-4">
        <div className="flex gap-8 text-md">
          <img
              className="mt-1 h-[135px] w-[135px] rounded-md object-cover shadow-lg"
              src="/about/placeholder.png"
              alt={about.photoAlt}
            />
            <p className="text-justify opacity-50">
              {about.longDescription}
            </p>

        </div>

          <span className="text-lg w-full italic">Ready to connect?</span>

        </section>
    </div>
  );
};

export default AboutCardDesktop;
