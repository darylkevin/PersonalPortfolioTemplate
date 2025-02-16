"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navs } from "../../../lib/definitions";

const NavigationDesktop = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allowMotionValueEvent, setAllowMotionValueEvent] = useState(true);
  const { scrollYProgress } = useScroll();

  const handleDesktopClick = (i: number) => {
    setAllowMotionValueEvent(false);

    const card = document.getElementById(`card-${i}`);
    card?.scrollIntoView({ behavior: "smooth" });

    setActiveTab(i);

    setTimeout(() => {
      setAllowMotionValueEvent(true);
    }, 1000);
  };

  useMotionValueEvent(scrollYProgress, "change", (yAxisScrollProgress) => {
    if (!allowMotionValueEvent) return;

    if (yAxisScrollProgress <= 0.125) {
      setActiveTab(0);
    } else if (yAxisScrollProgress <= 0.375) {
      setActiveTab(1);
    } else if (yAxisScrollProgress <= 0.625) {
      setActiveTab(2);
    } else if (yAxisScrollProgress <= 0.875) {
      setActiveTab(3);
    } else {
      setActiveTab(4);
    }
  });

  return (
    <nav className="ml-12 w-full font-normal">
      {navs.map((nav, i) => (
        <div key={i} className="pb-1">
          <motion.p
            className={`${
              activeTab === i ? "font-bold" : "opacity-50"
            } cursor-pointer`}
            initial={{ x: 0 }}
            whileHover={{ x: 10, scale: 1.05 }}
            onClick={() => handleDesktopClick(i)}
          >
            {nav.longPart}
          </motion.p>
        </div>
      ))}
    </nav>
  );
};

export default NavigationDesktop;
