'use client'

import { useCallback } from "react"

export default function Footer() {
  const handleAnchorClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    event.preventDefault()
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0
    const extraOffset = window.innerWidth < 768 ? 4 : 12
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" })
  }, [])
  return (
    <footer className="mt-12 border-t border-main/10 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-main dark:text-sub">Hồng Oanh</p>
          <p className="text-sm text-main/60 dark:text-sub/70">Marketing & Creative Strategy</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-main/70 dark:text-sub/80">
          <a href="#about" onClick={(event) => handleAnchorClick(event, "#about")} className="transition hover:text-main dark:hover:text-sub">About</a>
          <a href="#experience" onClick={(event) => handleAnchorClick(event, "#experience")} className="transition hover:text-main dark:hover:text-sub">Experience</a>
          <a href="#skills" onClick={(event) => handleAnchorClick(event, "#skills")} className="transition hover:text-main dark:hover:text-sub">Skills</a>
          <a href="#portfolio" onClick={(event) => handleAnchorClick(event, "#portfolio")} className="transition hover:text-main dark:hover:text-sub">Portfolio</a>
          <a href="#events" onClick={(event) => handleAnchorClick(event, "#events")} className="transition hover:text-main dark:hover:text-sub">Events</a>
          <a href="#awards" onClick={(event) => handleAnchorClick(event, "#awards")} className="transition hover:text-main dark:hover:text-sub">Awards</a>
          <a href="#contact" onClick={(event) => handleAnchorClick(event, "#contact")} className="transition hover:text-main dark:hover:text-sub">Contact</a>
        </div>

        <div className="text-xs text-main/50 dark:text-sub/60">
          © {new Date().getFullYear()} Hồng Oanh. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
