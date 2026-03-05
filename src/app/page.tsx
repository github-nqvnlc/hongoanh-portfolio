import { FullScreenV2 } from '@/components/full-screen-v2'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { MyUniverseV2 } from '@/containers/my-universe-v2'
import { SkeletonOne } from '@/containers/personal-interests'
import { cn } from '@/lib/utils'
import { IconPoint } from '@tabler/icons-react'
import Image from 'next/image'
import { ExperienceTimelineV2 } from './experience/containers/experience-timeline-v2'

function HomeH() {
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
          <MyUniverseV2 />
        </FullScreenV2>
      </div>

      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6"
      >
        ⭐ Hồng Oanh ⭐ SEO Specialist ⭐ Content Writing ⭐ Canva Designer
      </VelocityScroll>
      <div id="about-me" className="relative">
        <FullScreenV2 className="max-w-7xl mx-auto p-2">
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
                  <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">Về tôi</h1>
                  <p className="text-base lg:text-xl text-justify">Tôi tốt nghiệp chuyên ngành Digital Marketing và có hơn 3 năm kinh nghiệm thực tế trong mảng viết content, thiết kế Canva và quản lý các kênh mạng xã hội. Điểm mạnh của tôi là xây dựng ý tưởng nội dung theo từng mục tiêu truyền thông, thiết kế ấn phẩm đồng bộ nhận diện thương hiệu, đồng thời theo dõi hiệu quả để tối ưu chất lượng bài đăng theo từng giai đoạn. <br /><br />
                    Tôi cũng có kinh nghiệm trực tiếp quản lý fanpage, lập kế hoạch nội dung theo tuần/tháng, lên lịch bài đăng đều đặn và phối hợp linh hoạt với các bộ phận liên quan để đảm bảo tiến độ. Ngoài ra, tôi có nền tảng SEO cơ bản đến khá, đặc biệt ở tối ưu nội dung chuẩn SEO, nghiên cứu từ khóa và cải thiện khả năng hiển thị tự nhiên cho bài viết. Bên cạnh đó, tôi làm việc độc lập tốt, quản lý thời gian hiệu quả và thích nghi nhanh với cả môi trường làm việc trực tiếp lẫn trực tuyến.
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
                      <h3 className="lg:text-4xl text-2xl font-bold">HỌC VẤN:</h3>
                      <div className="flex items-center lg:gap-4 gap-4 lg:pl-4">
                        <IconPoint className="lg:size-8 size-6" />
                        <p className="lg:text-2xl text-sm"><span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">2021 - 2025:</span>Đại học Kinh tế - Đại học Đà Nẵng</p>
                      </div>
                      <div className="flex items-center gap-4 lg:pl-4">
                        <IconPoint className="lg:size-8 size-6" />
                        <p className="lg:text-2xl text-sm"><span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">Chuyên ngành:</span>Digital Marketing</p>
                      </div>
                      <div className="flex items-center gap-4 lg:pl-4">
                        <IconPoint className="lg:size-8 size-6" />
                        <p className="lg:text-2xl text-sm"><span className="lg:text-2xl text-sm font-bold lg:pr-4 pr-2">GPA:</span>3.4/4.0</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="lg:text-4xl text-2xl font-bold">KỸ NĂNG:</h3>
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
                        <p className="lg:text-2xl text-sm font-bold">Làm việc nhóm, quản lý thời gian</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreenV2>
      </div>

      {/* GIỚI THIỆU KỸ NĂNG */}
      <div className="max-w-7xl mx-auto p-2 mt-10">
        <div className="relative rounded-2xl w-full">
          <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
            <BentoGridItem
              title="Content SEO & Website Management"
              description="Có khả năng xây dựng outline, viết và tối ưu bài viết chuẩn SEO trên WordPress, góp phần tăng traffic và hỗ trợ mục tiêu chuyển đổi cho website."
              header={
                <SkeletonOne src="/images/element/seo.png" />
              }
              className={cn("[&>p:text-lg] text-center")}
            />
            <BentoGridItem
              title="Social Media & Campaign Planning"
              description="Lập kế hoạch và triển khai nội dung cho nhiều fanpage (từ 5.000–13.000+ followers), đảm bảo thông điệp nhất quán theo từng chiến dịch và chương trình khuyến mãi."
              header={
                <SkeletonOne src="/images/element/social-network.png" />
              }
              className={cn("[&>p:text-lg] text-center")}
            />
            <BentoGridItem
              title="Team Coordination & Project Execution"
              description="Điều phối và quản lý đội nhóm part-time, phân công công việc, theo dõi tiến độ và đảm bảo chất lượng trong môi trường làm việc trực tiếp lẫn từ xa."
              header={
                <SkeletonOne src="/images/element/team.png" />
              }
              className={cn("[&>p:text-lg] text-center")}
            />
          </BentoGrid>
        </div>
      </div>

      <FullScreenV2 className="mx-auto p-2 mt-10">
        <div className="relative min-h-[calc(100vh-100px)] rounded-2xl p-2 md:rounded-3xl md:p-3 w-full">
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl lg:p-6 p-2 md:p-6 ">
            <div className="flex w-full flex-col gap-10 items-center justify-center">
              <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">Kinh nghiệm làm việc</h1>
              <ExperienceTimelineV2 />
            </div>
          </div>
        </div>
      </FullScreenV2>
    </div>
  )
}

export default HomeH