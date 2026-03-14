"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { useRouter } from "next/navigation"
import { FullScreen } from "../full-screen"
import Image from "next/image"

export const ComingSoonPage = ({ pageName }: { pageName?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()
  const router = useRouter()
  
  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <FullScreen className="flex-col">
      <Terminal>
        <TypingAnimation>&gt; yarn add locnv@portfolio --dev</TypingAnimation>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Design checks.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Setting up portfolio framework. Using Next.js.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Implementing responsive design with Tailwind CSS.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Creating component architecture.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Building project showcase section.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Adding skills and expertise section.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Implementing contact form functionality.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-green-500">
          <span>✔ Optimizing images and assets.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6500} className="text-green-500">
          <span>✔ Setting up animations and transitions.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={7000} className="text-blue-500">
          <span>ℹ {pageName}:</span>
          <span className="pl-2">- Coming Soon</span>
        </AnimatedSpan>

        <TypingAnimation delay={7500} className="text-muted-foreground">
          Success! Portfolio initialization completed.
        </TypingAnimation>
        <TypingAnimation delay={8000} className="text-muted-foreground">
          Launching soon at locnv.vercel.app
        </TypingAnimation>
        <TypingAnimation delay={8500} className="text-muted-foreground">
          Contact me at email: locnv14@gmail.com
        </TypingAnimation>
        <TypingAnimation delay={9000} className="text-muted-foreground">
          Contact me at phone: +84 981 898 375 / +84 582 070 987
        </TypingAnimation>
      </Terminal>

      <div className="flex mt-10 justify-center text-center ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={currentTheme === "light" ? "/images/logo-locnv-light.png" : "/images/logo-locnv.png"} alt="logo" width={20} height={20} />
          <span>Back to home</span>
        </HoverBorderGradient>
      </div>
    </FullScreen>
  )
}
