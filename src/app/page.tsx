import { FullScreenV2 } from '@/components/full-screen-v2'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { MyUniverseV2 } from '@/containers/my-universe-v2'
import { IconPoint } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

function HomeH() {
  return (
    <div>
      <FullScreenV2 className="w-full container mx-auto">
        <div className="px-3 py-2 hidden sm:block absolute -top-70 left-16 sm:-left-60 rotate-43 w-max animate-slow-spin duration-200">
          <Image src="/images/element/e3.png" alt="logo" width={700} height={700} />
        </div>
        <div className="px-3 py-2 hidden sm:block absolute bottom-0 right-16 sm:right-5 w-max animate-wiggle duration-2000">
          <Image src="/images/element/e8.png" alt="logo" width={300} height={300} />
        </div>
        <MyUniverseV2 />
      </FullScreenV2>
      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6"
      >
        ❤️ Hồng Oanh 💕 SEO Specialist 💖 Content Writing 💝 Canva Designer
      </VelocityScroll>
      <FullScreenV2 className="max-w-7xl  mx-auto p-2">
        <div className="relative min-h-[calc(100vh-200px)] rounded-2xl border p-2 md:rounded-3xl md:p-3 w-full">
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
            <div className="relative flex flex-1 flex-col gap-12">
              <div className="flex w-full flex-col gap-10 items-center justify-center">
                <h1 className="text-7xl text-main dark:text-sub cherry-bomb-one-regular">Về tôi</h1>
                <p className="text-base lg:text-2xl text-justify">Tôi tốt nghiệp chuyên ngành Digital Marketing và có hơn 3 năm kinh nghiệm thực tế trong mảng viết content, thiết kế Canva và quản lý các kênh mạng xã hội. Điểm mạnh của tôi là xây dựng ý tưởng nội dung theo từng mục tiêu truyền thông, thiết kế ấn phẩm đồng bộ nhận diện thương hiệu, đồng thời theo dõi hiệu quả để tối ưu chất lượng bài đăng theo từng giai đoạn. <br /><br />
                  Tôi cũng có kinh nghiệm trực tiếp quản lý fanpage, lập kế hoạch nội dung theo tuần/tháng, lên lịch bài đăng đều đặn và phối hợp linh hoạt với các bộ phận liên quan để đảm bảo tiến độ. Ngoài ra, tôi có nền tảng SEO cơ bản đến khá, đặc biệt ở tối ưu nội dung chuẩn SEO, nghiên cứu từ khóa và cải thiện khả năng hiển thị tự nhiên cho bài viết. Bên cạnh đó, tôi làm việc độc lập tốt, quản lý thời gian hiệu quả và thích nghi nhanh với cả môi trường làm việc trực tiếp lẫn trực tuyến.
                </p>
              </div>
              <div className="w-full grid grid-cols-3 gap-8 items-center justify-center">
                <div className="flex-1/2">
                  <Image
                    src="/images/me/ho-ava-2.png"
                    alt="about"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="col-span-2 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold">HỌC VẤN:</h3>
                    <div className="flex items-center gap-4 pl-4">
                      <IconPoint className="size-8" />
                      <p className="text-2xl"><span className="text-2xl font-bold pr-4">2021 - 2025:</span>Đại học Kinh tế - Đại học Đà Nẵng</p>
                    </div>
                    <div className="flex items-center gap-4 pl-4">
                      <IconPoint className="size-8" />
                      <p className="text-2xl font-bold">Chuyên ngành Digital Marketing</p>
                    </div>
                    <div className="flex items-center gap-4 pl-4">
                      <IconPoint className="size-8" />
                      <p className="text-2xl"><span className="text-2xl font-bold pr-4">GPA:</span>3.4/4.0</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold">KỸ NĂNG:</h3>
                    <div className="flex items-center gap-4 pl-4">
                      <Image src="/images/skills/adobephotoshop.svg" alt="about" width={80} height={80} />
                      <Image src="/images/skills/adobeillustrator.svg" alt="about" width={80} height={80} />
                      <Image src="/images/skills/capcut.svg" alt="about" width={80} height={80} />

                    </div>
                    <div className="flex items-center gap-4 pl-4">
                      <IconPoint className="size-8" />
                      <p className="text-2xl font-bold">Chuyên ngành Digital Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullScreenV2>
      <FullScreenV2 className="max-w-7xl mx-auto p-2">
        page
      </FullScreenV2>
    </div>
  )
}

export default HomeH