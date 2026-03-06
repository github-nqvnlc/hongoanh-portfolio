import ButtonVisit from "@/components/button-visit";
import { BlurImage } from "@/components/ui/apple-cards-carousel";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconLocationCheck,
  IconSquareCheck,
} from "@tabler/icons-react";

export const EXPERIENCE_TIMELINE_V2 = [
  {
    title: "T10/2021 – T8/2024",
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-pink-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            Ban Đoàn vụ – Đoàn Trường Đại học Kinh tế – ĐHĐN
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            Tôi bắt đầu hành trình marketing bằng việc xây nền tảng truyền thông chính thống cho một tổ chức sinh viên quy mô lớn.
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            Tôi đã làm gì?
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Viết & biên tập nội dung cho các hoạt động Đoàn – Hội quy mô toàn trường.
              </p>
            </div>
            <div className=" grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Trực tiếp hỗ trợ media tại sự kiện, cập nhật nội dung realtime.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Đề xuất ý tưởng nội dung giúp fanpage tăng tương tác và duy trì sự chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            Dấu ấn để lại:
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Góp phần đưa fanpage đạt 10.000+ lượt thích.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Duy trì nội dung đều đặn, chuẩn mực suốt 3 năm.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Trở thành thành viên nòng cốt của đội truyền thông.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-8 pl-1">
          <ButtonVisit href="https://www.facebook.com/bandoanvu.dhkt">
            Truy cập fanpage
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
    title: "T2/2022 – T1/2023",
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-orange-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            BRANDO Agency
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            Đây là nơi tôi rèn tư duy SEO và khả năng viết theo mục tiêu chuyển đổi.
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            Kinh nghiệm thực chiến:
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Viết bài chuẩn SEO đa lĩnh vực: du lịch, F&B, giáo dục, phần mềm, xây dựng…
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Thành thạo các format: Toplist, Báo giá dịch vụ, Bài chia sẻ kiến thức.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Phối hợp tối ưu heading, meta description, internal link cùng Leader
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            Kết quả:
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                100% bài viết được duyệt & đăng tải.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="size-4 text-green-500" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Đảm bảo chuẩn SEO – đúng deadline – đúng intent tìm kiếm.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Được đánh giá cao về thái độ và chất lượng nội dung.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <BlurImage
            src="/images/brando/brando-2.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/brando/brando-1.jpg"
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
    title: "T3/2023 – Nay",
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <span className="text-yellow-400 text-xl lg:text-2xl xl:text-4xl font-extrabold">
            Marketing Executive (Part-time → Full-time) DANAWATCH
          </span>
          <span className="text-slate-700 dark:text-slate-300 text-xs md:text-base lg:text-lg xl:text-2xl mb-1 block">
            Tại đây, tôi không chỉ viết content — tôi vận hành hệ thống marketing online & offline cho thương hiệu
          </span>
        </h1>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            1️⃣ Fanpage Management & Campaign Execution
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Lên kế hoạch nội dung theo từng BST (Casio, Seiko, Orient…) và chiến dịch theo mùa (Tết, 8/3, Trung Thu…).
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Viết caption theo insight khách hàng, kết hợp storytelling & CTA thúc đẩy chuyển đổi.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Viết Facebook Ads đa thông điệp.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Thiết kế bài đăng bằng Canva & Photoshop.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5 -ml-4">
              <IconLocationCheck className="md:size-4 size-3.5 text-blue-500" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
                Hiện tại phụ trách 2 fanpage, trung bình:
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Đăng tải 12-16 bài/ngày
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Duy trì tương tác ổn định và đồng đều giữa các kênh.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <BentoGridItem
              title="Danawatch CN2 - 294 Lý Thường Kiệt, Hội An"
              header={
                <a href="https://www.facebook.com/danawatch.vn.cn2" target="_blank" rel="noopener noreferrer">
                  <BlurImage
                    src="/images/danawatch/danawatch-page-1.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </a>
              }
              className={cn("[&>p:text-lg] text-center")}
            />
            <BentoGridItem
              title="Danawatch Hội An - 294 Lý Thường Kiệt"
              header={
                <a href="https://www.facebook.com/danawatchbaohanh10nam" target="_blank" rel="noopener noreferrer">
                  <BlurImage
                    src="/images/danawatch/danawatch-page-2.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </a>
              }
              className={cn("[&>p:text-lg] text-center")}
            />
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            2️⃣ Website & SEO Growth
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="flex items-center gap-2">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Nghiên cứu từ khóa, xây dựng kế hoạch SEO.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Viết & tối ưu bài cho danh mục sản phẩm và blog kiến thức.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Tối ưu Onpage: heading, meta, internal link, cấu trúc nội dung.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Đóng góp <span className="font-bold">100+ bài SEO chất lượng</span>, giúp tăng trưởng traffic organic đáng kể.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            3️⃣ Team Leadership & Offline Branding
          </h3>

          <div className="space-y-2 md:pl-4 pl-1">
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Quản lý đội SEO 3 CTV: giao keyword, brief, kiểm soát chất lượng & deadline.
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Thiết kế & triển khai ấn phẩm offline: poster, banner, standee, bảng quote…
              </p>
            </div>
            <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
              <IconSquareCheck className="md:size-4 size-3.5 text-green-500 mt-1" />
              <p className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Làm việc trực tiếp với bộ phận in ấn đảm bảo đúng kích thước – màu sắc – tiến độ.
              </p>
            </div>
          </div>

          <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base xl:text-2xl font-bold">
            Từ một nhân viên part-time, tôi được tin tưởng trở thành full-time và mở rộng vai trò quản lý đội nhóm.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <BlurImage
            src="/images/danawatch/danawatch-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/danawatch/danawatch-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/danawatch/danawatch-3.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-full w-fit shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/images/danawatch/danawatch-4.jpg"
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
          <BlurImage
            src="/images/danawatch/danawatch-6.jpg"
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
    title: "WHAT DEFINES ME AS A MARKETER?",
    content: (
      <div className="space-y-4 lg:space-y-6 xl:space-y-8">
        <div className="space-y-2 lg:space-y-4 md:pl-4 pl-1">
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber1 className="md:size-10 size-4 text-blue-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              Tư duy hệ thống: không làm rời rạc từng bài viết, mà xây dựng quy trình.
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber2 className="md:size-10 size-4 text-green-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              Kỷ luật & quản lý thời gian tốt trong môi trường nhiều đầu việc.
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber3 className="md:size-10 size-4 text-yellow-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              Có khả năng làm việc độc lập nhưng vẫn tối ưu hiệu suất đội nhóm.
            </h3>
          </div>
          <div className="grid grid-cols-12 md:flex md:gap-2 items-start md:items-center justify-center md:justify-start">
            <IconHexagonNumber4 className="md:size-10 size-4 text-purple-500" />
            <h3 className="col-span-11 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-bold">
              Kết hợp tốt giữa Content – SEO – Fanpage – Thiết kế – Vận hành thực tế.
            </h3>
          </div>
        </div>
      </div>
    ),
  },
];
