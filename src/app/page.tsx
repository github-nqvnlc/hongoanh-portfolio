'use client'

import { FullScreenV2 } from '@/components/full-screen-v2'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { MyUniverseV2 } from '@/containers/my-universe-v2'
import { SkeletonOne } from '@/containers/personal-interests'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconPoint, IconSquareRoundedNumber1, IconSquareRoundedNumber2, IconSquareRoundedNumber3, IconSquareRoundedNumber4 } from '@tabler/icons-react'
import Image from 'next/image'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { ExperienceTimelineV2 } from './experience/containers/experience-timeline-v2'
import { getPortfolioItems } from '@/data/portfolio-items'
import { getEventsData } from '@/data/event-data'
import { awardsData } from '@/data/awards-data'
import { EventsSection } from '@/components/event-section'
import { useI18n } from '@/lib/i18n'

function HomeH() {
  const { t } = useI18n()
  const portfolioItems = getPortfolioItems(t)
  const eventsData = getEventsData(t)

  return (
    <div>
      <div id="home" className="relative">
        <FullScreenV2 className="w-full container mx-auto">
          <div className="size-[500px] xl:size-[700px] px-3 py-2 hidden sm:block absolute -top-90 left-16 sm:-left-90 rotate-43 w-max animate-slow-spin duration-200">
            <Image src="/images/element/e3.png" alt="logo" width={700} height={700} />
          </div>
          <div className="px-3 py-2 hidden sm:block absolute bottom-0 right-16 sm:right-5 w-max animate-wiggle duration-2000">
            <Image src="/images/element/e8.png" alt="logo" width={200} height={200} />
          </div>
          <div className="hidden sm:block absolute bottom-0 -left-5 right-0 sm:right-0 w-screen duration-700 animate-float-x">
            <Image src="/images/element/wavy-line.png" alt="logo" width={1200} height={1200} />
          </div>
          <MyUniverseV2 />
        </FullScreenV2>
      </div>

      <VelocityScroll
        numRows={1}
        className="text-xl md:text-3xl opacity-50 my-6 font-normal"
      >
        {t("hero.velocityScroll")}
      </VelocityScroll>
      <FullScreenV2 id="about" className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative min-h-[calc(100vh-200px)] rounded-2xl border p-2 md:rounded-3xl md:p-3 w-full">
          <GlowingEffect
            blur={0}
            borderWidth={5}
            spread={120}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col gap-12">
              <div className="flex w-full flex-col gap-10 items-center justify-center">
                <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">{t("about.title")}</h1>
                <p className="text-base lg:text-xl text-justify">
                  {t("about.description.first")}
                  <br /><br />
                  {t("about.description.second")}
                </p>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
                <Image
                  src="/images/me/ho-ava-3.png"
                  alt="about"
                  width={500}
                  height={500}
                />
                <div className="space-y-10">
                  <div className="space-y-2">
                    <h3 className="lg:text-4xl text-2xl font-bold">{t("about.education.title")}</h3>
                    <div className="flex items-center lg:gap-4 gap-4 lg:pl-4">
                      <IconPoint className="lg:size-8 size-6" />
                      <p className="lg:text-2xl text-sm">
                        <span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">{t("about.education.years")}</span>
                        {t("about.education.school")}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 lg:pl-4">
                      <IconPoint className="lg:size-8 size-6" />
                      <p className="lg:text-2xl text-sm">
                        <span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">{t("about.education.majorLabel")}</span>
                        {t("about.education.major")}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 lg:pl-4">
                      <IconPoint className="lg:size-8 size-6" />
                      <p className="lg:text-2xl text-sm">
                        <span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">{t("about.education.gpaLabel")}</span>
                        {t("about.education.gpa")}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="lg:text-4xl text-2xl font-bold">{t("about.skills.title")}</h3>
                    <div className="items-center gap-4 lg:pl-4 grid grid-cols-6">
                      <Image className='border border-main/20 rounded-xl hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/adobephotoshop.svg" alt="about" width={60} height={60} />
                      <Image className='border border-main/20 rounded-xl hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/adobeillustrator.svg" alt="about" width={60} height={60} />
                      <Image className='border border-main/20 rounded-xl hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/capcut.webp" alt="about" width={60} height={60} />
                      <Image className='border border-main/20 rounded-full hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/canva.png" alt="about" width={60} height={60} />
                      <Image className='border border-transparent p-0.5 rounded-full hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/google.webp" alt="about" width={60} height={60} />
                      <Image className='border border-transparent p-0.5 hover:scale-120 transition-all duration-300 cursor-pointer' src="/images/skills/microsoft.ico" alt="about" width={60} height={60} />
                    </div>
                    <div className="flex items-center gap-4 lg:pl-4">
                      <IconPoint className="lg:size-8 size-6" />
                      <p className="lg:text-2xl text-sm font-bold">{t("about.skills.highlight")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullScreenV2>

      {/* GIỚI THIỆU KỸ NĂNG */}
      <div id="skills" className="mx-auto px-4 xl:px-40 mt-10">
        <div className="relative rounded-2xl w-full">
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* card 1 */}
            <div className='lg:min-h-100 min-h-80 border border-main/20 rounded-4xl p-4'>
              <div className='h-50'>
                <SkeletonOne src="/images/element/SEO.png" />
              </div>
              <div className='space-y-4 mt-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className="font-sans lg:text-xl font-bold text-neutral-600 dark:text-neutral-200">
                    {t("skills.cards.contentSeo.title")}
                  </div>
                </div>
                <div className="font-sans text-justify text-xs lg:text-base font-normal text-neutral-600 dark:text-neutral-300">
                  {t("skills.cards.contentSeo.description")}
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className='lg:min-h-100 min-h-80 border border-main/20 rounded-4xl p-4'>
              <div className='h-50'>
                <SkeletonOne src="/images/element/social-network.png" />
              </div>
              <div className='space-y-4 mt-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className="font-sans lg:text-xl font-bold text-neutral-600 dark:text-neutral-200">
                    {t("skills.cards.socialMedia.title")}
                  </div>
                </div>
                <div className="font-sans text-justify text-xs lg:text-base font-normal text-neutral-600 dark:text-neutral-300">
                  {t("skills.cards.socialMedia.description")}
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className='lg:min-h-100 min-h-80 border border-main/20 rounded-4xl p-4'>
              <div className='h-50'>
                <SkeletonOne src="/images/element/team.png" />
              </div>
              <div className='space-y-4 mt-4'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <div className="font-sans lg:text-xl font-bold text-neutral-600 dark:text-neutral-200">
                    {t("skills.cards.teamCoordination.title")}
                  </div>
                </div>
                <div className="font-sans text-justify text-xs lg:text-base font-normal text-neutral-600 dark:text-neutral-300">
                  {t("skills.cards.teamCoordination.description")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KINH NGHIỆM LÀM VIỆC */}
      <FullScreenV2 id="experience" className="mx-auto px-2 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 ">
            <div className="flex w-full flex-col gap-10 items-center justify-center">
              <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">{t("experience.title")}</h1>
              <ExperienceTimelineV2 />
            </div>
          </div>
        </div>
      </FullScreenV2>

      {/* Portfolio */}
      <FullScreenV2 id="portfolio" className="mx-auto xl:px-40 px-4 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 ">
            <div className="flex w-full flex-col gap-10 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">{t("portfolio.title")}</h1>
                <p className="text-base lg:text-xl text-justify">{t("portfolio.subtitle")}</p>
              </div>
              <PortfolioGallery portfolioItems={portfolioItems} />
            </div>
          </div>
        </div>
      </FullScreenV2>

      {/* Events */}
      <FullScreenV2 id="events" className="mx-auto xl:px-40 px-4 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 ">
            <div className="flex w-full flex-col gap-4 items-center justify-start text-center">
              <h1 className="text-6xl md:text-7xl text-main dark:text-sub cherry-bomb-one-regular">{t("events.title")}</h1>
              <p className="max-w-3xl text-sm md:text-base lg:text-lg">
                {t("events.subtitle")}
              </p>
            </div>

            <EventsSection events={eventsData} />

            <div className="rounded-3xl border border-main/10 bg-background/80 p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-semibold text-main dark:text-sub">{t("events.highlights.title")}</h2>
                <p className="text-xs text-main/60 dark:text-sub/70 md:text-sm">{t("events.highlights.count")}</p>
              </div>

              <ul className="mt-6 grid gap-4 text-sm text-main/80 dark:text-sub/80 grid-cols-1">
                {[
                  {
                    id: 1,
                    icon: <IconSquareRoundedNumber1 className="size-6 text-blue-500 dark:text-blue-500" />,
                    description: t("events.highlights.items.0.description"),
                    color: "blue-500",
                    animate: "animate-float",
                  },
                  {
                    id: 2,
                    icon: <IconSquareRoundedNumber2 className="size-6 text-green-500 dark:text-green-500" />,
                    description: t("events.highlights.items.1.description"),
                    color: "green-500",
                    animate: "animate-wiggle",
                  },
                  {
                    id: 3,
                    icon: <IconSquareRoundedNumber3 className="size-6 text-yellow-500 dark:text-yellow-500" />,
                    description: t("events.highlights.items.2.description"),
                    color: "yellow-500",
                    animate: "animate-float",
                  },
                  {
                    id: 4,
                    icon: <IconSquareRoundedNumber4 className="size-6 text-orange-500 dark:text-orange-500" />,
                    description: t("events.highlights.items.3.description"),
                    color: "orange-500",
                    animate: "animate-wiggle",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{ "--offset": `${item.id * 200}px` } as React.CSSProperties}
                    className={`group flex h-full flex-col rounded-2xl border border-${item.color} bg-${item.color}/5 p-4 w-full transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-${item.color}/70 hover:shadow-lg hover:shadow-${item.color}/20 xl:ml-(--offset) xl:w-fit ${item.animate}`}
                  >
                    <div className="flex items-start gap-3">
                      {item.icon}
                      <p className={`text-base font-semibold text-${item.color} transition-colors duration-300 group-hover:text-${item.color} dark:text-${item.color}`}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FullScreenV2>

      {/* Awards */}
      <FullScreenV2 id="awards" className="mx-auto xl:px-40 px-4 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 ">
            <div className="flex flex-col gap-4 items-center justify-start text-center">
              <h1 className="text-6xl md:text-7xl text-main dark:text-sub cherry-bomb-one-regular">Awards & Recognition</h1>
              <p className="max-w-3xl text-sm md:text-base lg:text-lg ">
                Những thành tựu nổi bật thể hiện tư duy chiến lược, khả năng sáng tạo và đóng góp bền bỉ.
              </p>
            </div>

            <EventsSection events={awardsData} />

            <div className="rounded-3xl border border-main/10 bg-background/80 p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-semibold text-main dark:text-sub">What these achievements represent</h2>
                <p className="text-xs text-main/60 dark:text-sub/70 md:text-sm">3 điểm nổi bật</p>
              </div>

              <ul className="mt-6 grid gap-4 text-sm text-main/80 dark:text-sub/80 grid-cols-1">
                {[
                  {
                    id: 1,
                    title: "Làm đến nơi đến chốn",
                    icon: <IconSquareRoundedNumber1 className="size-6 text-blue-500 dark:text-blue-500" />,
                    description: "Tôi không chỉ làm Marketing — tôi làm đến nơi đến chốn.",
                    color: "blue-500",
                  },
                  {
                    id: 2,
                    title: "Sáng tạo có chiến lược",
                    icon: <IconSquareRoundedNumber2 className="size-6 text-green-500 dark:text-green-500" />,
                    description: "Tôi không chỉ sáng tạo — tôi sáng tạo có chiến lược.",
                    color: "green-500",
                  },
                  {
                    id: 3,
                    title: "Tạo giá trị, được ghi nhận",
                    icon: <IconSquareRoundedNumber3 className="size-6 text-yellow-500 dark:text-yellow-500" />,
                    description: "Tôi không chỉ tham gia — tôi tạo ra giá trị và được ghi nhận.",
                    color: "yellow-500",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{ "--offset": `${item.id * 250}px` } as React.CSSProperties}
                    className={`group flex h-full flex-col rounded-2xl border border-${item.color} bg-${item.color}/5 p-4 w-full transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-${item.color}/70 hover:shadow-lg hover:shadow-${item.color}/20 xl:ml-(--offset) xl:w-fit`}
                  >
                    <div className="flex items-start gap-3">
                      {item.icon}
                      <p className={`text-base font-semibold text-${item.color} transition-colors duration-300 group-hover:text-${item.color} dark:text-${item.color}`}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FullScreenV2>

      {/* Contact */}
      <FullScreenV2 id="contact" className="mx-auto xl:px-40 px-4 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6">
            <div className="flex flex-col gap-4 items-center justify-start text-center">
              <h1 className="text-6xl md:text-7xl text-main dark:text-sub cherry-bomb-one-regular">Contact</h1>
              <p className="max-w-2xl text-sm md:text-base text-center">
                Nếu bạn muốn hợp tác hoặc trao đổi thêm về dự án, hãy để lại thông tin. <br />
                Mình sẽ phản hồi sớm nhất.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div className="rounded-3xl border border-main/10 bg-background/80 p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-main dark:text-sub">Gửi lời nhắn</h2>
                <p className="mt-2 text-sm text-main/60 dark:text-sub/70">
                  Điền nhanh thông tin, mình sẽ liên hệ lại qua email hoặc số điện thoại.
                </p>

                <form
                  action="https://formspree.io/f/xjgaeryo"
                  method="POST"
                  className="mt-6 grid gap-4"
                >
                  <div className="grid gap-2">
                    <label className="text-xs font-semibold uppercase text-main/60 dark:text-sub/70">Họ và tên</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nhập họ tên"
                      className="h-12 rounded-2xl border border-main/15 bg-transparent px-4 text-sm text-main placeholder:text-main/40 focus:outline-none focus:ring-2 focus:ring-main/20 dark:text-sub dark:placeholder:text-sub/40"
                    />
                  </div>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase text-main/60 dark:text-sub/70">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@email.com"
                        className="h-12 rounded-2xl border border-main/15 bg-transparent px-4 text-sm text-main placeholder:text-main/40 focus:outline-none focus:ring-2 focus:ring-main/20 dark:text-sub dark:placeholder:text-sub/40"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs font-semibold uppercase text-main/60 dark:text-sub/70">Số điện thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="0123 456 789"
                        className="h-12 rounded-2xl border border-main/15 bg-transparent px-4 text-sm text-main placeholder:text-main/40 focus:outline-none focus:ring-2 focus:ring-main/20 dark:text-sub dark:placeholder:text-sub/40"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-semibold uppercase text-main/60 dark:text-sub/70">Nội dung</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="Chia sẻ mong muốn hợp tác hoặc câu hỏi..."
                      className="rounded-2xl border border-main/15 bg-transparent px-4 py-3 text-sm text-main placeholder:text-main/40 focus:outline-none focus:ring-2 focus:ring-main/20 dark:text-sub dark:placeholder:text-sub/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-main/20 bg-main text-sm font-semibold uppercase tracking-wide text-background transition hover:bg-main/90 dark:text-white"
                  >
                    Gửi lời nhắn
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-3xl border border-main/10 bg-white dark:bg-black p-6 md:p-8">
                  <p className="text-xs uppercase text-main/60 dark:text-sub/70">Thông tin liên hệ</p>
                  <ul className="mt-4 space-y-3 text-sm text-main/80 dark:text-sub/80">
                    <li className="flex items-start justify-between gap-4">
                      <span className="text-main/60 dark:text-sub/70">Email</span>
                      <span className="font-semibold">nguyenthihongoanh03@gmail.com </span>
                    </li>
                    <li className="flex items-start justify-between gap-4">
                      <span className="text-main/60 dark:text-sub/70">Số điện thoại</span>
                      <span className="font-semibold">(+84) 916 513 203</span>
                    </li>
                    <li className="flex items-start justify-between gap-4">
                      <span className="text-main/60 dark:text-sub/70">Địa điểm</span>
                      <span className="font-semibold">Đà Nẵng, Việt Nam</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-main/10 bg-background/80 p-6 md:p-8">
                  <p className="text-xs uppercase text-main/60 dark:text-sub/70">Thời gian phản hồi</p>
                  <p className="mt-3 text-sm text-main/70 dark:text-sub/80">
                    Mình thường phản hồi trong vòng 24–48 giờ. Đừng ngại gửi tin nhắn nhé.
                  </p>

                  <div className="mt-6">
                    <p className="text-xs uppercase text-main/60 dark:text-sub/70">Liên hệ nhanh qua mạng xã hội</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.facebook.com/hihibb19"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-main/15 bg-background p-2 text-xs font-semibold uppercase text-main transition hover:border-main/40 hover:bg-main/5 dark:text-sub"
                      >
                        <IconBrandFacebook className="size-6" />
                      </a>
                      
                      <a
                        href="https://www.instagram.com/oryy._.stb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-main/15 bg-background p-2 text-xs font-semibold uppercase text-main transition hover:border-main/40 hover:bg-main/5 dark:text-sub"
                      >
                        <IconBrandInstagram className="size-6" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/hong-oanh-nguyen-thi-0868b5221/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-main/15 bg-background p-2 text-xs font-semibold uppercase text-main transition hover:border-main/40 hover:bg-main/5 dark:text-sub"
                      >
                        <IconBrandLinkedin className="size-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullScreenV2>
    </div>
  )
}

export default HomeH