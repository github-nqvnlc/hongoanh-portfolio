# Plan đổi màu sắc dự án theo theme chủ đạo

## Mục tiêu

Xây dựng lại hệ màu (color system) nhất quán cho toàn bộ portfolio, giúp:
- Giao diện đồng bộ và chuyên nghiệp hơn
- Dễ bảo trì / đổi theme về sau
- Tăng độ nhận diện cá nhân/thương hiệu

---

## 1) Xác định bộ màu chủ đạo

### 1.1 Chọn 1 hướng theme
- **Option A – Professional Blue**: hiện đại, tin cậy
- **Option B – Creative Purple**: sáng tạo, nổi bật
- **Option C – Elegant Dark**: cao cấp, tối giản

### 1.2 Thiết lập bộ token màu
Mỗi theme cần có các nhóm màu sau:
- `primary`: màu thương hiệu chính
- `secondary`: màu phụ hỗ trợ
- `accent`: màu nhấn (CTA, icon, link hover)
- `bg`: màu nền chính
- `surface`: màu nền card/section
- `text`: màu chữ chính
- `muted`: màu chữ phụ
- `border`: màu đường viền
- `success`, `warning`, `danger`: màu trạng thái

> Kết quả: chốt palette đầy đủ (hex) cho light mode trước.

---

## 2) Khảo sát các vị trí đang dùng màu trong code

### 2.1 Nguồn màu hiện tại
- `public/assets/css/style.css`
- `public/assets/scss/scss/_color.scss`
- `public/assets/scss/scss/_variable.scss`
- Các class nút: `.px-btn`, `.px-btn-theme`, `.px-btn-theme2`
- Các section nền: `.bg-gray`, `.home-section`, `.footer`, `.feature-box-*`

### 2.2 Phân nhóm theo mức độ ưu tiên
- **P1 (quan trọng)**: header, button CTA, link, section title, form focus
- **P2**: card services, portfolio overlay, testimonial, icon
- **P3**: border, shadow tint, hover nhỏ

> Kết quả: danh sách class cần cập nhật theo thứ tự ưu tiên.

---

## 3) Chuẩn hóa kiến trúc style theo biến màu

### 3.1 Tạo biến màu trung tâm
Ưu tiên dùng CSS variables tại `:root` hoặc SCSS variables map:
- `--color-primary`
- `--color-primary-600`
- `--color-accent`
- `--color-bg`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-border`

### 3.2 Refactor style
- Thay các mã màu hard-code bằng biến
- Gom màu theo component/section để dễ kiểm soát
- Đảm bảo nút, hover, focus có tương phản đủ tốt

> Kết quả: style dễ đổi theme bằng cách chỉnh 1 nơi.

---

## 4) Áp dụng theme vào các khu vực chính

### 4.1 Header + Navigation
- Màu nền header (transparent/solid khi scroll)
- Màu link thường / active / hover

### 4.2 Hero + CTA
- Màu headline, subtext
- Nút `Let’s Talk`, `Contact Now`, `Hire me`, `Send Message`

### 4.3 Cards & Sections
- Services cards
- Skill cards
- Portfolio info + overlay
- Testimonial cards

### 4.4 Contact Form
- Input background/border/text
- Focus ring theo màu chủ đạo
- Error/success state

### 4.5 Footer
- Nền footer, màu icon social, hover states

---

## 5) Kiểm tra UI/UX và khả năng truy cập

- Kiểm tra độ tương phản (text vs background)
- Kiểm tra hover/focus trên desktop + mobile
- Kiểm tra sự nhất quán giữa các section
- Đảm bảo các trạng thái form dễ nhận biết

> Mục tiêu: đạt mức đọc tốt, không bị “cháy màu” hay thiếu tương phản.

---

## 6) Tối ưu quy trình mở rộng theme sau này

### 6.1 Chuẩn bị cho multi-theme
- Tạo thêm class theo theme, ví dụ:
  - `.theme-blue`
  - `.theme-purple`
  - `.theme-dark`
- Gán variables theo từng theme class

### 6.2 (Tùy chọn) Theme switcher
- Tạo toggle đổi theme ở Header
- Lưu lựa chọn bằng `localStorage`

---

## 7) Lộ trình thực hiện đề xuất

### Phase 1 – Define
1. Chốt mood/theme
2. Chốt bảng màu token
3. Chốt tiêu chuẩn contrast tối thiểu

### Phase 2 – Refactor
1. Tạo biến màu trung tâm
2. Thay màu hard-code ở các khu vực P1
3. Mở rộng ra P2/P3

### Phase 3 – Validate
1. Soát toàn trang ở desktop/mobile
2. Soát form states và hover/focus
3. Chỉnh fine-tuning

### Phase 4 – Optional
1. Tạo 2–3 preset theme
2. Thêm theme switcher

---

## 8) Deliverables

- Một file token màu trung tâm (SCSS/CSS variables)
- Bộ style đã refactor theo biến màu
- Một theme mặc định mới áp dụng toàn site
- (Tùy chọn) 2 preset theme bổ sung + switcher

---

## 9) Gợi ý bước tiếp theo

Nếu bạn muốn, bước kế tiếp mình sẽ làm ngay:
1. Đề xuất **3 palette cụ thể** (mã màu hex đầy đủ)
2. Bạn chọn 1 theme
3. Mình tiến hành refactor style trực tiếp trong code theo plan này
