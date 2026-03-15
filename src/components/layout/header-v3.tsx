"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ModeToggle } from "../mode-toggle"
import { IconMenu2 } from "@tabler/icons-react"
import { Button } from "../ui/button"
import Image from "next/image"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Events", href: "#events" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
]

export const HeaderV3 = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleAnchorClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    event.preventDefault()
    setIsMobileMenuOpen(false)
    const headerHeight = headerRef.current?.offsetHeight ?? 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY - 60

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${isScrolled || isMobileMenuOpen ? "border-b border-main/10 bg-background/80 backdrop-blur" : "border-b border-transparent bg-transparent"}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="#home"
          onClick={(event) => handleAnchorClick(event, "#home")}
          className="flex items-center gap-2 text-main dark:text-sub"
        >
          <Image src="/images/logo.png" alt="Logo" width={1000} height={1000} className="w-fit h-12" />
        </Link>

        <nav className="hidden items-center gap-6 text-base font-semibold uppercase tracking-wider text-main/70 dark:text-sub/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="transition hover:text-main dark:hover:text-sub"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            variant="outline"
            size="icon"
            className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 md:hidden"
          >
            <IconMenu2 className="h-5 w-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-main/10 bg-background/95 px-6 py-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-main/70 dark:text-sub/70">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="rounded-xl border border-transparent px-3 py-2 transition hover:border-main/20 hover:bg-main/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
