import { useEffect, useState } from "react";
// xs: 320
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

import { navs, hero } from "./lib/definitions"
import { M_PLUS_1 } from "next/font/google";
import Hero from "./ui/Hero";
import Profiles from "./ui/Profiles";
import Navigation from "./ui/Navigation";
import { ThemeProvider } from "./ui/contexts/ThemeContext";
import Footer from "./ui/Footer";

// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {

  return (
    <ThemeProvider>
      <div className="mx-auto max-w-screen-md h-[100vh]">
        <div className="mx-auto my-auto h-full flex flex-col justify-center px-2 xs:max-w-screen-xs md:max-w-screen-md">
          <div className="flex flex-col gap-2 h-fit rounded-xl p-4 shadow-xl dark:shadow-lg dark:shadow-green-400/75">
            <header className="md:hidden">
              <Navigation />
            </header>

            <main className="grid md:grid-cols-2 xl:grid-cols-3">
              <div className="grid xl:col-span-2">
                <Hero />
                <Profiles />
              </div>

              <div className="hidden md:block">
                <Navigation shortHand={false} flex={false}/>
              </div>
            </main>
          </div>

          <footer>
              <Footer />
          </footer>

        </div>
      </div>
    </ThemeProvider>
  );
}
