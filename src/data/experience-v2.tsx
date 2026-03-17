import ButtonVisit from "@/components/button-visit"
import { BlurImage } from "@/components/ui/apple-cards-carousel"
import {
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconLocationCheck,
  IconSquareCheck,
} from "@tabler/icons-react"

export const getExperienceTimelineV2 = (t: (key: string) => string) => [
  {
    title: t("experience.timeline.0.title"),
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-pink-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            {t("experience.timeline.0.orgTitle")}
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            {t("experience.timeline.0.orgSubtitle")}
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.0.section1.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section1.items.0")}
              </p>
            </div>
            <div className=" grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section1.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section1.items.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.0.section2.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section2.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section2.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.0.section2.items.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-8 pl-1">
          <ButtonVisit href="https://www.facebook.com/bandoanvu.dhkt">
            {t("experience.timeline.0.cta")}
          </ButtonVisit>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <BlurImage
            src="/images/bdv/bdv-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/bdv/bdv-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover object-center h-full md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/bdv/bdv-3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: t("experience.timeline.1.title"),
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-orange-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            {t("experience.timeline.1.orgTitle")}
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            {t("experience.timeline.1.orgSubtitle")}
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.1.section1.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section1.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section1.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section1.items.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.1.section2.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section2.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="size-4 text-green-500" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section2.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.1.section2.items.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BlurImage
            src="/images/brando/brando-2.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
          />
          <BlurImage
            src="/images/brando/brando-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: t("experience.timeline.2.title"),
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-yellow-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            {t("experience.timeline.2.orgTitle")}
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            {t("experience.timeline.2.orgSubtitle")}
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.2.section1.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.2")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.3")}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5 -ml-4">
              <IconLocationCheck className="md:size-4 size-3.5 text-blue-500" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
                {t("experience.timeline.2.section1.highlight")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.4")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section1.items.5")}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-3 text-center">
              <a href="https://www.facebook.com/danawatch.vn.cn2" target="_blank" rel="noopener noreferrer">
                <BlurImage
                  src="/images/danawatch/danawatch-page-1.png"
                  alt="Danawatch CN2"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </a>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-semibold">
                {t("experience.timeline.2.section1.pages.0")}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-center">
              <a href="https://www.facebook.com/danawatchbaohanh10nam" target="_blank" rel="noopener noreferrer">
                <BlurImage
                  src="/images/danawatch/danawatch-page-2.png"
                  alt="Danawatch Hội An"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </a>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base lg:text-lg font-semibold">
                {t("experience.timeline.2.section1.pages.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.2.section2.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="flex items-center gap-2">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section2.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section2.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section2.items.2")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section2.items.3")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.2.section3.title")}
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section3.items.0")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section3.items.1")}
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                {t("experience.timeline.2.section3.items.2")}
              </p>
            </div>
          </div>

          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            {t("experience.timeline.2.section3.highlight")}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BlurImage
            src="/images/danawatch/danawatch-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          
          <BlurImage
            src="/images/danawatch/danawatch-5.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: t("experience.timeline.3.title"),
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber1 className="md:size-10 size-4 text-blue-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              {t("experience.timeline.3.items.0")}
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber2 className="md:size-10 size-4 text-green-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              {t("experience.timeline.3.items.1")}
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber3 className="md:size-10 size-4 text-yellow-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              {t("experience.timeline.3.items.2")}
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber4 className="md:size-10 size-4 text-purple-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              {t("experience.timeline.3.items.3")}
            </h3>
          </div>
        </div>
      </div>
    ),
  },
]
