# Phân tích dự án `hong-oanh`

## 1) Tổng quan

Đây là một dự án **Portfolio/One-page website** xây dựng bằng **Next.js (Pages Router)** và **React**.

Mục tiêu chính của dự án:
- Giới thiệu bản thân/dịch vụ
- Trưng bày kỹ năng và dự án
- Hiển thị testimonial
- Cung cấp form liên hệ gửi email

---

## 2) Công nghệ sử dụng

Từ `package.json`, dự án dùng:
- `next@13.2.4`
- `react@18.2.0`, `react-dom@18.2.0`
- `react-bootstrap`
- `swiper`
- `emailjs-com`

Scripts chính:
- `npm run dev`: chạy môi trường development
- `npm run build`: build production
- `npm run start`: chạy bản production
- `npm run lint`: kiểm tra lint

---

## 3) Cấu trúc thư mục chính

- `pages/`: định tuyến theo Pages Router của Next.js
  - `_app.js`: import global styles + hiển thị preloader lúc đầu
  - `_document.js`: khai báo HTML khung, meta, CSS theme
  - `index.js`: trang chính, ghép các section
- `src/components/`: các section UI (Header, Home, Services, Skill, Portfolio, Testimonial, Contact, Footer...)
- `src/utils.js`: các hàm xử lý DOM (active menu khi scroll, convert img.svg)
- `src/sliderProps.js`: cấu hình slider Swiper
- `public/assets/`: ảnh, css/scss, vendor libraries
- `styles/globals.css`: CSS global

---

## 4) Luồng hoạt động của trang

1. **App khởi tạo** ở `pages/_app.js`
   - Hiển thị `Preloader` khoảng 1.5 giây
   - Sau đó render nội dung trang

2. **Trang chính** ở `pages/index.js`
   - Gọi `boston.scrollToActiveNav()` để active menu theo section đang xem
   - Gọi `boston.imgToSvg()` để thay ảnh `.svg` thành inline SVG
   - Render lần lượt:
     - `Header`
     - `Home`
     - `Services`
     - `Skill`
     - `Portfolio`
     - `Testimonial`
     - `Contact`
     - `Footer`

3. **Contact Form** trong `src/components/Contact.js`
   - Quản lý input bằng `useState`
   - Validate cơ bản (không được rỗng)
   - Gửi email qua `emailjs.send(...)`

---

## 5) Các component nổi bật

- `Header.js`
  - Navbar one-page, có menu mobile bằng `Accordion` từ `react-bootstrap`

- `Home.js`
  - Hero section (headline + mô tả + CTA)

- `Services.js`
  - Render danh sách dịch vụ từ mảng `serviceData`

- `Skill.js`
  - Render skill cards + danh sách experience

- `Portfolio.js`
  - Grid dự án từ `portfolioData`

- `Testimonial.js`
  - Slider Swiper cho đánh giá khách hàng

- `Contact.js`
  - Form gửi mail + thông tin liên hệ

- `Footer.js`
  - Social icons + copyright

---

## 6) Điểm mạnh

- Cấu trúc component rõ ràng, dễ chỉnh sửa từng section
- Dùng data arrays để render danh sách, thuận tiện thay nội dung
- Có responsive layout (Bootstrap) + slider testimonial
- Có preloader và hiệu ứng active nav giúp UX trực quan

---

## 7) Hạn chế và đề xuất cải tiến

### Hạn chế
- `Contact.js` đang để các thông tin EmailJS trực tiếp trong frontend
- Một số xử lý DOM thuần (`querySelector`, `addEventListener`) chưa cleanup khi unmount
- SEO metadata còn mang tính template (chưa cá nhân hóa)
- Nhiều nội dung vẫn là lorem ipsum/template text

### Đề xuất cải tiến
1. **Bảo mật**
   - Chuyển gửi mail qua API route (`pages/api/contact.js`)
   - Đưa key vào biến môi trường (`.env.local`)

2. **Hiệu năng/React chuẩn hơn**
   - Cleanup listener trong `useEffect`
   - Cân nhắc thay `img` bằng `next/image` ở nơi phù hợp

3. **SEO + Branding**
   - Cập nhật `title`, `description`, keywords đúng thương hiệu cá nhân
   - Tối ưu alt text ảnh và liên kết social thật

4. **Nội dung**
   - Thay toàn bộ dữ liệu mẫu thành thông tin thực tế của bạn

---

## 8) Kết luận

Dự án hiện tại là một **portfolio template Next.js hoàn chỉnh**, chạy tốt cho mục đích giới thiệu cá nhân/doanh nghiệp nhỏ.

Nếu tiếp tục phát triển, nên ưu tiên:
1) bảo mật form liên hệ,
2) cá nhân hóa nội dung,
3) tối ưu SEO và hiệu năng.
