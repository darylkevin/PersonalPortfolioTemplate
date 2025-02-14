"use client";

import React from "react";
import { about } from "@/app/lib/definitions";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const AboutCardDesktop = () => {
  return (
    <div className="flex h-[80vh] flex-col justify-between gap-8 lg:h-[33vh]">
      <header className="text-4xl font-bold">ABOUT ME</header>

      <hr />

      <section className="flex flex-col gap-4 overflow-auto">
        <div className="text-md flex gap-8">
          <img
            className="mt-1 h-[135px] w-[135px] rounded-md object-cover shadow-lg"
            src="/about/placeholder.png"
            alt={about.photoAlt}
          />
          <p className="text-justify opacity-50">{about.longDescription}</p>
        </div>

        <span className="mt-4 w-full text-lg italic">Ready to connect?</span>
      </section>
    </div>
  );
};

export default AboutCardDesktop;
