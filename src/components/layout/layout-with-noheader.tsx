import React from "react"
import { HeroBackground } from "./hero-background"
// import { HeaderV2 } from "./header-v2";

export const LayoutWithNoHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="font-[family-name:var(--font-exo2)] font-medium w-screen">
      <HeroBackground>
        {/* <HeaderV2 /> */}
        <main className="overflow-auto overflow-x-hidden container mx-auto flex-1 p-4">
          {children}
        </main>
        {/* <footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 p-4">
          © {new Date().getFullYear()} Van Loc. All rights reserved.
        </footer> */}
      </HeroBackground>
    </div>
  );
};
