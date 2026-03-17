import { PortfolioItem } from "@/components/portfolio-gallery";

type Translator = (key: string) => string


export const getPortfolioItems = (t: Translator): PortfolioItem[] => [
  // Bài SEO
  {
    src: '/images/portfolio/p30.webp',
    link: 'https://danawatch.vn/tao-an-tuong-voi-phu-kien-dong-ho-di-du-tiec',
    title: 'Tạo ấn tượng với phụ kiện đồng hồ đi dự tiệc',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p31.webp',
    link: 'https://danawatch.vn/tang-tuoi-tho-dong-ho-voi-bi-quyet-tu-cham-soc',
    title: 'Tăng tuổi thọ đồng hồ với bí quyết tự chăm sóc',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p32.webp',
    link: 'https://danawatch.vn/bi-quyet-cham-soc-dong-ho-dung-hang-tuan-qua-tien-bo',
    title: 'Bí quyết chăm sóc đồng hồ dễ dàng hàng tuần qua tiện bộ',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p33.webp',
    link: 'https://danawatch.vn/kham-pha-cong-nghe-pin-10-nam-cho-dong-ho',
    title: 'Khám Phá Công Nghệ Pin 10 Năm Cho Đồng Hồ – Hoạt Động Hiệu Quả, Bền Bỉ',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p34.webp',
    link: 'https://danawatch.vn/bo-tui-bi-quyet-su-dung-num-xoay-chinh-gio-don-gian-hieu-qua',
    title: 'Bỏ Túi Bí Quyết Sử Dụng Núm Xoay Chỉnh Giờ Đơn Giản & Hiệu Quả',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p35.webp',
    link: 'https://danawatch.vn/cac-loai-lich-ngay-thang-tren-dong-ho',
    title: 'Khám Phá Các Loại Lịch Ngày Tháng Trên Đồng Hồ: Đa Dạng & Tiện Lợi',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p36.webp',
    link: 'https://danawatch.vn/meo-phan-biet-dong-ho-chinh-hang',
    title: 'Bảo Vệ Ví Tiền: Nắm Vững Mẹo Phân Biệt Đồng Hồ Chính Hãng',
    tag: t('portfolio.tags.seoPosts')
  },

  // -----------------------------------------------------------------
  {
    src: '/images/portfolio/p17.webp',
    link: 'https://danawatch.vn/tim-hieu-tu-a-z-cac-ki-hieu-tren-dong-ho-casio',
    title: 'Tìm hiểu từ A-Z các kí hiệu trên đồng hồ Casio',
    tag: t('portfolio.tags.seoPosts')
  },
  // {
  //   src: '/images/portfolio/p18.webp',
  //   link: 'https://danawatch.vn/huong-dan-cach-hoan-thanh-ho-so-tra-gop-ngay-tren-website-danawatch',
  //   title: 'Hướng dẫn cách hoàn thành hồ sơ trả góp ngay trên Website Danawatch',
  //   tag: t('portfolio.tags.seoPosts')
  // },
  {
    src: '/images/portfolio/p19.webp',
    link: 'https://danawatch.vn/dong-ho-va-phong-cach-ca-nhan-bieu-tuong-thoi-trang-doc-dao',
    title: 'Đồng hồ và Phong cách Cá nhân – Biểu tượng thời trang độc đáo',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p20.webp',
    link: 'https://danawatch.vn/dong-ho-qua-lac-bieu-tuong-thoi-gian-trai-qua-lich-su',
    title: 'Đồng Hồ Quả Lắc: Biểu Tượng Thời Gian Trải Qua Lịch Sử',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p21.webp',
    link: 'https://danawatch.vn/bts-dong-ho-hang-tram-ty-cua-cuu-thu-tuong-thai-lan-thaksin-shinawatra',
    title: 'BTS đồng hồ hàng trăm tỷ của Cựu Thủ tướng Thái Lan Thaksin Shinawatra',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p22.webp',
    link: 'https://danawatch.vn/kham-pha-top-5-thuong-hieu-dong-ho-cua-my-noi-tieng-toan-cau',
    title: 'Khám Phá Top 5 Thương Hiệu Đồng Hồ của Mỹ Nổi Tiếng Toàn Cầu',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p23.webp',
    link: 'https://danawatch.vn/dong-ho-day-kim-loai-bi-di-ung',
    title: 'Đeo đồng hồ dây kim loại bị dị ứng: Nguyên nhân và cách khắc phục',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p24.webp',
    link: 'https://danawatch.vn/so-sanh-dong-ho-rolex-va-patek-philippe',
    title: 'So Sánh Đồng Hồ Rolex Và Patek Philippe: Cuộc Chiến Của Những “Ông Hoàng”',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p25.webp',
    link: 'https://danawatch.vn/citizen-x-pantone-dong-ho-thoi-trang-ke-ve-hoi-uc-va-hoai-co-cua-tuoi-tre',
    title: 'Citizen x Pantone – Đồng hồ thời trang kể về hồi ức và hoài cổ của tuổi trẻ',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p27.webp',
    link: 'https://danawatch.vn/tuan-le-vang-mung-khai-truong-danawatch-cn5-sieu-sale-off-20-ap-dung-cho-tat-ca-san-pham',
    title: 'Tuần lễ vàng “Mừng khai trương DANAWATCH CN5” – Siêu sale off 20% (Áp dụng cho tất cả sản phẩm)',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p28.webp',
    link: 'https://danawatch.vn/san-deal-cuc-hot-dong-ho-senaro-giam-den-26-tai-danawatch',
    title: 'Săn Deal Cực Hot – Đồng Hồ SENARO Giảm Đến 26% Tại Danawatch!',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p29.webp',
    link: 'https://danawatch.vn/cap-nhat-uu-dai-cong-don-toi-45-moi-nhat-chi-co-tai-danawatch',
    title: 'CẬP NHẬT ƯU ĐÃI CỘNG DỒN TỚI 45% MỚI NHẤT – CHỈ CÓ TẠI DANAWATCH',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p37.webp',
    link: 'https://danawatch.vn/tao-net-doc-dao-voi-thu-cong-lam-dong-ho-sang-tao-nghe-thuat-tinh-hoa',
    title: 'Tạo Nét Độc Đáo Với Thủ Công Làm Đồng Hồ – Sáng Tạo Nghệ Thuật Tinh Hoa',
    tag: t('portfolio.tags.seoPosts')
  },
  {
    src: '/images/portfolio/p26.webp',
    link: 'https://danawatch.vn/mua-dong-ho-tang-dong-ho',
    title: 'Mua Đồng Hồ – Tặng Đồng Hồ: Cơ Hội Sở Hữu Đồng Hồ Pindows Hoàn Toàn Miễn Phí!',
    tag: t('portfolio.tags.seoPosts')
  },

  // -----------------------------------------------------------------
  {
    src: '/images/portfolio/p1.png',
    link: 'https://www.facebook.com/share/p/1HDSRfopLo/',
    title: '⚡ BST #STARKE NAM – ĐEO GỌN, CHƠI TẾT CHẤT ⚡ GIẢM ĐẾN 45% - FREESHIP TOÀN QUỐC ✅🌸',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p2.png',
    link: 'https://www.facebook.com/share/p/1BPsJXQrA4/',
    title: '🌸 ƯU ĐÃI GIẢM ĐẾN 45% 🧧 BST #ORIENT NỮ – ĐẸP THANH LỊCH, SANG TRỌN NĂM MỚI 🧧',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p3.png',
    link: 'https://www.facebook.com/share/p/1Dzgo6TtCS/',
    title: '🧧 BST ĐỒNG HỒ #SENARO ĐÔI – CÙNG NHAU ĐÚNG GIỜ, CÙNG NHAU CẢ NĂM 🧧 GIẢM THẲNG 26% - ƯU ĐÃI SỐC CHO CÁC CẶP ĐÔI 🔥',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p4.png',
    link: 'https://www.facebook.com/share/p/14d5b4BejYm/',
    title: '🧧 BST #SUNRISE NỮ – ĐÓN TẾT AN YÊN, ĐẸP XUYÊN NĂM THÌ 🧧',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p5.png',
    link: 'https://www.facebook.com/share/p/1HmsTcof5D/',
    title: '🌸 BST #SENARO NỮ – ĐẸP NHẸ NHƯ KHÍ CHẤT, SANG VỪA ĐỦ ĐỂ NỔI BẬT 🌸 GIẢM THẲNG 21% - 26% 😮',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p6.png',
    link: 'https://www.facebook.com/share/p/18R7CZQvVZ/',
    title: '🎉 KHAI XUÂN RỰC RỠ – BST SEIKO NAM GIẢM ĐẾN 45% 🎉',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p7.png',
    link: 'https://www.facebook.com/share/p/18Ay9CEEv8/',
    title: '⌚ BST #CITIZEN NAM – ĐỒNG HỒ CỦA NGƯỜI ĐÀN ÔNG BIẾT GIÁ TRỊ THỜI GIAN 💓 GIẢM CỘNG ĐỒN LÊN ĐẾN 45% 😍',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p8.png',
    link: 'https://www.facebook.com/share/p/1AJ7dPuAkc/',
    title: '⌚ BST #SEIKO NAM – GIÁ TRỊ ĐƯỢC KIỂM CHỨNG BẰNG THỜI GIAN 😍 BẢO HÀNH 10 NĂM TẠI #DANAWATCH ✅',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p9.png',
    link: 'https://www.facebook.com/share/p/1CVwnmUNxj/',
    title: '⌚ BST FREDERIQUE CONSTANT NAM – PHONG THÁI CỦA NGƯỜI ĐỨNG ĐẦU 💪 ƯU ĐÃI CỰC TỐT - GIẢM ĐẾN 45% ✅',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p10.png',
    link: 'https://www.facebook.com/share/p/1BM6q4rtVF/',
    title: '✨🌸 BST #DANIEL WELLINGTON NỮ – THANH LỊCH & SANG TRỌNG TRONG TỪNG KHOẢNH KHẮC 🌸✨',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p12.png',
    link: 'https://www.facebook.com/share/p/1C5wv7Hm4n/',
    title: '💖 BST #SAGA NỮ  – NỮ TÍNH, QUÝ PHÁI, VÀ LUÔN RỰC RỠ 💖',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p13.png',
    link: 'https://www.facebook.com/share/p/17NUqAUXaQ/',
    title: '🌟 BST DANIEL WELLINGTON NỮ – CÀNG ĐƠN GIẢN, CÀNG SANG ❗',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p14.png',
    link: 'https://www.facebook.com/share/p/1DRgPYUNpY/',
    title: '🌷 8/3 SẮP ĐẾN – TRAO NÀNG MỘT CHIẾC #STARKE, TRAO NÀNG SỰ TRÂN TRỌNG 🌷 GIẢM CỘNG DỒN ĐẾN 45% ✅',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p15.png',
    link: 'https://www.facebook.com/share/p/1DiHmbuG6A/',
    title: '🎉 TẾT ĐẾN LÊN TAY #SENARO – GIẢM THẲNG 21% 🎉',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p16.png',
    link: 'https://www.facebook.com/share/p/1KPEx6ssBn/',
    title: '✨ BST #SENARO DÂY KIM LOẠI – PHONG CÁCH TRẺ TRUNG, LỊCH LÃM MỌI LÚC MỌI NƠI ✨',
    tag: t('portfolio.tags.adsPosts')
  },
  {
    src: '/images/portfolio/p11.png',
    link: 'https://www.facebook.com/share/p/185vgSkUma/',
    title: '⌚  BST #CANDINO – ĐẲNG CẤP ĐẾN TỪ SỰ TINH TẾ ⌚',
    tag: t('portfolio.tags.adsPosts')
  },

  // ấn phẩm
  {
    src: '/images/portfolio/p30.png',
    title: 'Christmas Sale',
    tag: t('portfolio.tags.publications')
  },
  {
    src: '/images/portfolio/p31.png',
    title: 'Đến sớm 5 phút được coi là đúng giờ',
    tag: t('portfolio.tags.publications')
  },
  {
    src: '/images/portfolio/p32.png',
    title: 'Đến sớm 5 phút được coi là đúng giờ',
    tag: t('portfolio.tags.publications')
  },
  {
    src: '/images/portfolio/p33.png',
    title: 'Giảm cộng dồn 45%',
    tag: t('portfolio.tags.publications')
  },
  {
    src: '/images/portfolio/p34.png',
    title: 'Backdrop Year End Party 2026',
    tag: t('portfolio.tags.publications')
  },
  {
    src: '/images/portfolio/p35.png',
    title: 'Băng rôn quảng cáo',
    tag: t('portfolio.tags.publications'),
    column: 3
  },
  {
    src: '/images/portfolio/p36.png',
    title: 'Giấy chứng nhận',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p40.png',
    title: 'Giấy chứng nhận',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p41.png',
    title: 'Giấy chứng nhận',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p42.png',
    title: 'Giấy chứng nhận',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p37.png',
    title: 'Sale tưng bừng - mừng đại lễ 30/4',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p38.png',
    title: 'Sale tưng bừng - mừng quốc khánh 2/9',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p39.png',
    title: 'Black Friday Sale 50%',
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p43.png',
    title: "Happy Women's Day",
    tag: t('portfolio.tags.publications'),
  },
  {
    src: '/images/portfolio/p44.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p45.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p46.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p47.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p48.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p49.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p50.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p51.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p52.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p53.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p54.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p55.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p56.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p57.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p58.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p59.png',
    tag: t('portfolio.tags.publicationPoster'),
  },
  {
    src: '/images/portfolio/p60.png',
    tag: t('portfolio.tags.publicationPoster'),
    column: 2
  },
  {
    src: '/images/portfolio/p61.png',
    tag: t('portfolio.tags.publicationPoster'),
    column: 2
  },
  {
    tag: "Video",
    videoUrl: "https://player.vimeo.com/video/1172455693",
    column: 1,
    aspect: "9/16"
  },
  {
    tag: "Video",
    videoUrl: "https://player.vimeo.com/video/1172468312",
    column: 1,
    aspect: "9/16"
  },
  {
    tag: "Video",
    videoUrl: "https://player.vimeo.com/video/1174306739",
    column: 1,
    aspect: "9/16"
  },
  {
    tag: "Video",
    videoUrl: "https://player.vimeo.com/video/1172468312",
    column: 1,
    aspect: "9/16"
  },
]
