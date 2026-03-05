"use client"

import { cn } from "@/lib/utils"
import {
  IconArrowUp,
  // IconBrandGithub,
  // IconMenu2,
  // IconX,
} from "@tabler/icons-react"
// import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
// import { useTheme } from "next-themes"
import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"
// import {
//   Drawer, 
//   DrawerClose,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "../ui/drawer"
// import { Separator } from "@radix-ui/react-dropdown-menu"
// import Image from "next/image"

// const links = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Experience",
//     href: "/experience",
//   },
//   {
//     title: "Projects",
//     href: "/projects",
//   },
//   {
//     title: "About",
//     href: "/about",
//     isComingSoon: true,
//   },
//   // {
//   //   title: "Sponsors",
//   //   href: "/sponsors",
//   // },
// ]

const pathNameDisableHeaderScroll = [""]

export const HeaderV2 = () => {
  // const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // const { theme, systemTheme } = useTheme()

  const pathname = usePathname()

  const isDisableHeaderScroll = pathNameDisableHeaderScroll.includes(pathname)
  
  // Determine current theme
  // const currentTheme = theme === "system" ? systemTheme : theme

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (isDisableHeaderScroll) {
      // setIsScrolled(false)
      return
    }

    if (currentScrollY === 0) {
      // setIsScrolled(false)
    } else if (currentScrollY > 0) {
      // setIsScrolled(true)
    }

    lastScrollY.current = currentScrollY
  }, [isDisableHeaderScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll, isDisableHeaderScroll])

  return (
    <>
      <header
        className={cn(
          "z-50 fixed top-0 left-0 right-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex justify-between gap-10 items-center transition-all duration-300 p-4 z-50 w-full xl:w-[90%]",
          )}
        >
          <div className="flex items-center gap-2">
            
          </div>
          <div className="flex-1 items-center gap-3 justify-center hidden sm:flex">
            
          </div>
          <div className="flex items-center gap-2 py-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      {isDisableHeaderScroll && <ScrollToTopButton />}
    </>
  )
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-10 !bg-zinc-900/80 backdrop-blur-md rounded-xl p-2 hover:scale-110 duration-300 fixed bottom-4 right-8 md:right-20 z-[9999]"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }}
    >
      <IconArrowUp className="text-white" />
    </Button>
  )
}

// const HeaderLink = ({ title, href }: { title: string; href: string }) => {
//   const pathname = usePathname() || "/"
//   const isActive = href === pathname
//   return (
//     <div
//       className={cn(
//         "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
//         isActive
//           ? "dark:bg-white dark:text-black bg-zinc-900 text-white"
//           : "dark:hover:bg-zinc-800 hover:bg-zinc-100"
//       )}
//     >
//       <Link href={href}>{title}</Link>
//     </div>
//   )
// }
