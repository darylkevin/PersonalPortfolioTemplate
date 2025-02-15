"use client";

import React, { useContext } from "react";
import { hero } from "../lib/definitions";
import Link from "next/link";
import ThemeContext from "./contexts/ThemeContext";

const Hero = () => {
  const { toggleTheme } =
    useContext(ThemeContext) ??
    (() => {
      throw new Error("Hero must be used within a ThemeContextProvider");
    })();

  return (
    <Link href="#" className="hover:cursor-pointer">
      <article className="text-5xl font-bold" onClick={() => toggleTheme()}>
        {hero.name}
      </article>
      <section className="pt-2 text-lg font-normal text-zinc-400">
        {hero.title}
      </section>
    </Link>
  );
};

export default Hero;
