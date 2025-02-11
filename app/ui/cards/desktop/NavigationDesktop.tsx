"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { navs } from "../../../lib/definitions";

const NavigationDesktop = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleDesktopClick = (i: number) => {
    // scroll to the card, minus half the screen height
    const card = document.getElementById(`card-${i}`);
    card?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(i);
  }

  return (
    <nav
      className="font-normal p-4"
    >
      {navs.map((nav, i) => (
        <div key={i} className="pb-1">
          <motion.p
            className={`${activeTab === i && 'bg-black dark:bg-white dark:text-black text-white rounded'} cursor-pointer px-1`}
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
