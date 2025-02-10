"use client";

import React from "react";

import Navigation from "../../Navigation";
import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const TitleCardDesktop = () => {
  return (
    <div className="mx-auto h-[100vh] md:max-w-screen-sm lg:max-w-screen-md">
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col justify-center gap-2 p-4">
          <main className="grid grid-cols-4 lg:grid-cols-5">
            <div className="col-span-3 grid lg:col-span-4">
              <Hero />
              <Profiles />
            </div>

            <div>
              <Navigation shortHand={false} flex={false} />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TitleCardDesktop;
