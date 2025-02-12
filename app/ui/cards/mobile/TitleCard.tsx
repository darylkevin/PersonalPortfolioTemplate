import React, { useContext } from "react";
import { motion } from "motion/react";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Image from "next/image";

import ThemeContext from "../../contexts/ThemeContext";

const TitleCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className="flex h-full flex-col justify-between">
        <Hero />
        <div className="flex w-full justify-end p-2 opacity-80">
          <motion.div
            animate={{
              rotate: [0, 35, -35, 0],
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            whileTap={{
              rotate: [0, 35, -35, 0],
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src={
                theme === "light"
                  ? "/icons/swipe-black.png"
                  : "/icons/swipe-white.png"
              }
              alt="swipe"
              width={25}
              height={25}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default TitleCard;
