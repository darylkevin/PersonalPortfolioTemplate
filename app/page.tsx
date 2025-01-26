import { useEffect, useState } from "react";
// xs: 320
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

import { navs, hero } from "./lib/definitions"
import { M_PLUS_1 } from "next/font/google";

// mobile-phones: 320px-480px
// tablets: 768px-1024px
// laptops: 1024px-1440px
// monitors: 1440px-2560px

export default function Home() {


  return (
    <div className="mx-auto max-w-screen-xl h-[100vh]">
      <div className="mx-auto my-auto h-full flex flex-col justify-center px-2 xs:max-w-screen-xs md:max-w-screen-md xl:max-w-screen-xl">
        <div className="flex flex-col border h-fit border-red-700 rounded-xl p-2">
          <header className="md:hidden flex flex-wrap justify-between gap-2">
            {navs.map((nav, i) => 
              <div key={i}>
                {nav.shortPart}
              </div>
            )}
          </header>
          <main className="grid grid-cols-2 xl:grid-cols-3">
            <div className="grid xl:col-span-2">
              <div>
                Hero
              </div>
              <div>
                Profession
              </div>
              <div>
                Footer
              </div>
            </div>

            <div className="hidden md:block">
              {navs.map((nav, i) => 
                <div key={i}>
                  {nav.longPart}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
