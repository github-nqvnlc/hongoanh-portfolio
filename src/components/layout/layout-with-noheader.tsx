import React from "react"
import { HeroBackground } from "./hero-background"
import { HeaderV3 } from "./header-v3"
import Footer from "../footer"

export const LayoutWithNoHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="font-(family-name:--font-exo2) font-medium w-screen">
      <HeroBackground>
        {/* Header */}
        <HeaderV3 />
        <main className="overflow-auto overflow-x-hidden flex-1">
          {children}
        </main>
        <Footer />
        {/* <footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 p-4">
          © {new Date().getFullYear()} Van Loc. All rights reserved.
        </footer> */}
      </HeroBackground>
    </div>
  )
}
