"use client"

import {
  type AnimationVariant,
  TextAnimate,
} from "@/components/magicui/text-animate"
import { Compare } from "@/components/ui/compare"
import { Cover } from "@/components/ui/cover"
import { getRoleTitlesV2 } from "@/data/role-titles-v2"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { memo, useEffect, useMemo, useState } from "react"
import { MY_NETWORKS_V2 } from "@/data/my-networks"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
]

const SocialNetworkV2 = () => {
  return (
    <div className="relative z-20 mt-4 sm:mt-0">
      <div className="flex flex-wrap items-center gap-2">
        {MY_NETWORKS_V2.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-5 sm:size-6 md:size-7 lg:size-8 text-main" />
          </a>
        ))}
        <a
          href="https://zalo.me/0916513203"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
        >
          <Image src="/images/icon/zalo.svg" className="size-5 sm:size-6 md:size-7 lg:size-8" alt="Zalo" width={30} height={30} />
        </a>
      </div>
    </div>
  );
};

export const MyUniverseV2 = () => {
  const { t } = useI18n()
  const roleTitles = useMemo(() => getRoleTitlesV2(t), [t])
  const [currentText, setCurrentText] = useState(roleTitles[0] ?? "")
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0])

  useEffect(() => {
    setCurrentText(roleTitles[0] ?? "")
  }, [roleTitles])

  useEffect(() => {
    if (!roleTitles.length) {
      return
    }

    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const textIndex = roleTitles.indexOf(prev)
        if (textIndex === -1 || textIndex === roleTitles.length - 1) {
          return roleTitles[0]
        }

        return roleTitles[textIndex + 1]
      })
      setCurrentAnimation(
        animationTypes[Math.floor(Math.random() * animationTypes.length)]
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [roleTitles])

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-0 px-2 md:px-6">
      <div className="flex-1 w-full lg:w-auto">
        <div className="flex-1 relative w-full lg:w-auto">
          {/* Responsive positioning for floating elements */}
          <div className="pacifico-regular px-3 py-2 sm:block absolute -top-10 sm:-top-2 left-2 sm:left-20 md:left-10 lg:left-20 xl:left-50 bg-teal-500/20 rounded-[6px] w-max font-medium dark:text-teal-300 text-teal-500 border border-teal-500/20 animate-wiggle duration-1000">
            SEO Specialist
          </div>

          <div className="pacifico-regular px-3 py-2 sm:block absolute -top-12 sm:-top-6 -right-12 sm:-right-15 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-ripple duration-1000">
            Content Writing
          </div>

          <div className="pacifico-regular px-3 py-2 sm:block absolute bottom-16 right-2 sm:right-40 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-float-x duration-1000">
            Canva Designer
          </div>

          <div className="flex flex-row gap-4 items-center justify-center my-4 lg:my-0">
            <Title />
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <motion.div
              layout
              className={cn(
                "md:w-fit w-full text-2xl md:text-3xl font-bold my-5 rounded-lg text-center text-[#ff90c2] dark:text-white",
              )}
            >
              <TextAnimate
                duration={1.5}
                animation={currentAnimation}
                by="character"
                startOnView={false}
                className="wrap-break-word cursor-pointer"
              >
                {currentText}
              </TextAnimate>
            </motion.div>
          </div>
        </div>
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center sm:gap-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-500 dark:text-zinc-400"></p>
          <SocialNetworkV2 />
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full mt-8 lg:mt-0">
          <Image src="/images/me/ho-ava-1.png" alt="Me" width={600} height={600} />
      </div>
    </div>
  )
}

export function CompareDemo() {
  return (
    <div className="w-full border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
      <Compare
        firstImage="https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/me/3.png"
        secondImage="https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/me/3.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[700px] w-full"
        slideMode="hover"
      />
    </div>
  )
}

export const Title = memo(() => {
  return (
    <h1 className="text-[calc(100vw*0.15)] lg:text-7xl xl:text-8xl 2xl:text-[150px] font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700 cursor-pointer">
      <Cover className="text-main dark:text-sub cherry-bomb-one-regular hover:text-sub hover:dark:text-main">Hồng Oanh</Cover>
    </h1>
  )
})

Title.displayName = "Title"
