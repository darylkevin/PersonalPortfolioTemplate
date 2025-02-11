import React from "react";

import Hero from "../../Hero";
import Profiles from "../../Profiles";

const TitleCard = () => {
  return (
    <>
      <main className="max-md:h-full">
        <div className="max-md:flex max-md:h-full max-md:flex-col max-md:justify-between">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default TitleCard;
