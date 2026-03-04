"use client";

import { motion } from "motion/react";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MY_NETWORKS } from "@/data/my-networks";
import { Code, Layers, UserRound, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { MyResume } from "../my-resume";

export function MyInformation() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {/* <Card className="col-span-1 md:col-span-1 lg:col-span-2 dark:bg-black/50 bg-white/50 p-0 order-2 md:order-1">
            <CardContent className="!p-0 h-full">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/images/Subject4.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 hidden dark:block"
                />

                <Image
                  src="/images/Subject5.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 dark:hidden"
                />
                <Ripple className="" />
              </div>
            </CardContent>
          </Card> */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 dark:bg-black/50 bg-white/50 p-0 order-2 md:order-1">
            <MyResume />
          </div>

          <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 col-span-1 md:col-span-2 lg:col-span-3 order-1 md:order-2">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative flex flex-1 flex-col gap-6">
                <div className="flex w-full md:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg border border-gray-600 p-2">
                      {/* {icon} */}
                      <UserRound className="h-4 w-4 text-black dark:text-neutral-400" />
                    </div>

                    <div>
                      <p className="text-lg sm:text-xl relative z-20 mt-2 font-medium">
                        Van Loc Nguyen
                      </p>
                      <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                        Windify Co., Ltd.
                      </p>
                      <p className="relative z-20 text-sm sm:text-base text-neutral-500 font-medium uppercase">
                        Frontend Developer
                      </p>
                    </div>
                  </div>

                  <SocialNetwork />
                </div>
                <div className="space-y-6 flex-1 flex flex-col items-center justify-center">
                  <h3 className="pt-0.5 text-lg font-bold text-balance text-black md:text-4xl dark:text-white">
                    Frontend isn&#39;t just code — it&#39;s my craft, my calling, and my
                    contribution to the future of technology.
                  </h3>
                  <h2 className="text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  Every challenge is a chance to lead, to grow, and to build something better — not just for me, but for the team and the people we create for.
                  </h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Expertise</h3>
                  <KeySkills />
                </div>

                <KeyAchievements />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6"
      >
        ⭐ Van Loc Nguyen ⭐ Louis JirasR ⭐ Personal Portfolio ⭐ Frontend Developer
      </VelocityScroll>
    </>
  );
}

const SocialNetwork = () => {
  return (
    <div className="relative z-20 mt-4 sm:mt-0">
      <div className="flex flex-wrap items-center gap-2">
        {MY_NETWORKS.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-5 sm:size-6 md:size-7 lg:size-8" />
          </a>
        ))}
      </div>
    </div>
  );
};

const KeyAchievements = () => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
      key={currentTheme}
    >
      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(167, 139, 250, 0.2)"
              : "rgb(243 232 255)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Code className="h-8 w-8 text-purple-500 dark:text-purple-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Clean Code
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Crafting maintainable, elegant solutions
        </p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(96, 165, 250, 0.2)"
              : "rgb(219 234 254)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            y: [0, -8, 0],
            transition: { duration: 0.6, repeat: 0 },
          }}
        >
          <Layers className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Component Architecture
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Building scalable, reusable systems
        </p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(251, 191, 36, 0.2)"
              : "rgb(254 243 199)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 },
          }}
        >
          <Zap className="h-8 w-8 text-amber-500 dark:text-amber-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Performance
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Optimizing for speed and efficiency
        </p>
      </motion.div>
    </div>
  );
};

const KeySkills = () => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  // Array of skills with their colors for hover effects
  const skills = [
    // Core Web Technologies
    {
      name: "HTML",
      color: "rgb(254 237 230)", // HTML Orange #E34F26
      darkColor: "rgba(227, 79, 38, 0.2)",
    },
    {
      name: "CSS",
      color: "rgb(230 242 253)", // CSS Blue #1572B6
      darkColor: "rgba(21, 114, 182, 0.2)",
    },
    {
      name: "SCSS",
      color: "rgb(252 237 248)", // SCSS Pink #CF649A
      darkColor: "rgba(207, 100, 154, 0.2)",
    },
    {
      name: "jQuery",
      color: "rgb(230 241 253)", // jQuery Blue #0769AD
      darkColor: "rgba(7, 105, 173, 0.2)",
    },
    // Programming Languages
    {
      name: "JavaScript",
      color: "rgb(255 251 235)", // JavaScript Yellow #F7DF1E
      darkColor: "rgba(247, 223, 30, 0.2)",
    },
    {
      name: "TypeScript",
      color: "rgb(235 244 255)", // TypeScript Blue #3178C6
      darkColor: "rgba(49, 120, 198, 0.2)",
    },
    // CSS Frameworks
    {
      name: "Tailwind CSS",
      color: "rgb(235 251 255)", // Tailwind Cyan #06B6D4
      darkColor: "rgba(6, 182, 212, 0.2)",
    },
    // {
    //   name: "Bootstrap",
    //   color: "rgb(244 240 254)", // Bootstrap Purple #7952B3
    //   darkColor: "rgba(121, 82, 179, 0.2)",
    // },
    {
      name: "Material UI",
      color: "rgb(235 248 255)", // Material UI Blue #007FFF
      darkColor: "rgba(0, 127, 255, 0.2)",
    },
    {
      name: "Ant Design",
      color: "rgb(236 248 255)", // Ant Design Blue #1890FF
      darkColor: "rgba(24, 144, 255, 0.2)",
    },
    {
      name: "Shadcn",
      color: "rgb(248 250 252)", // Shadcn Neutral
      darkColor: "rgba(71, 85, 105, 0.2)",
    },
    // Frontend Frameworks
    {
      name: "ReactJS",
      color: "rgb(235 251 255)", // React Cyan #61DAFB
      darkColor: "rgba(97, 218, 251, 0.2)",
    },
    {
      name: "Next.js",
      color: "rgb(248 250 252)", // Next.js Black/White
      darkColor: "rgba(15, 23, 42, 0.2)",
    },
    {
      name: "React Native",
      color: "rgb(235 251 255)", // React Native Cyan #61DAFB
      darkColor: "rgba(97, 218, 251, 0.2)",
    },
    {
      name: "Redux",
      color: "rgb(244 240 255)", // Redux Purple #764ABC
      darkColor: "rgba(118, 74, 188, 0.2)",
    },
    {
      name: "Svelte Kit",
      color: "rgb(255 235 235)", // Svelte Orange/Red #FF3E00
      darkColor: "rgba(255, 62, 0, 0.2)",
    },
    {
      name: "React Remix",
      color: "rgb(237 246 255)", // Remix Blue #3992FF
      darkColor: "rgba(57, 146, 255, 0.2)",
    },
    // Backend Technologies
    {
      name: "Node.js",
      color: "rgb(236 252 239)", // Node.js Green #339933
      darkColor: "rgba(51, 153, 51, 0.2)",
    },
    {
      name: "Express",
      color: "rgb(248 250 252)", // Express Neutral
      darkColor: "rgba(64, 64, 64, 0.2)",
    },
    {
      name: "RESTful APIs",
      color: "rgb(240 253 244)", // API Green
      darkColor: "rgba(34, 197, 94, 0.2)",
    },
    // Databases & Query Languages
    {
      name: "MongoDB",
      color: "rgb(236 253 240)", // MongoDB Green #47A248
      darkColor: "rgba(71, 162, 72, 0.2)",
    },
    {
      name: "MySQL",
      color: "rgb(235 244 254)", // MySQL Blue #4479A1
      darkColor: "rgba(68, 121, 161, 0.2)",
    },
    {
      name: "GraphQL",
      color: "rgb(253 236 250)", // GraphQL Pink #E10098
      darkColor: "rgba(225, 0, 152, 0.2)",
    },
    // E-commerce & Templating
    {
      name: "Liquid",
      color: "rgb(235 248 255)", // Liquid Blue (Shopify related)
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Shopify",
      color: "rgb(244 252 247)", // Shopify Green #95BF47
      darkColor: "rgba(149, 191, 71, 0.2)",
    },
  ];
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={badgeVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor:
              currentTheme === "dark" ? skill.darkColor : skill.color,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1 cursor-pointer dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};
