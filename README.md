# COLORA JD Library

Website nội bộ để lưu trữ, chỉnh sửa và xuất Job Description theo brand COLORA.

## Chức năng
- Lưu nhiều JD và tìm kiếm theo tên / phòng ban.
- Tự động lưu vào Local Storage của trình duyệt.
- Tạo mới, nhân bản, xóa JD.
- Chỉnh sửa role overview, responsibility groups, requirements, KPI, career development và EVP.
- Brand Settings để đổi website, email, location, brand story, hiring promise.
- Xuất / nhập toàn bộ dữ liệu bằng JSON để backup hoặc chuyển máy.
- Nút **Xuất PDF** mở print dialog tối ưu A4; chọn **Save as PDF** trên macOS/Chrome.
- Thiết kế theo palette COLORA: #F4EDE1, #002451, #B08A5B, #8E2F2A, #0F6857, #DBC9B4, #4A2E23.
- Heading ưu tiên Didot; body ưu tiên Open Sans với fallback hệ thống.

## Chạy trên máy
Cách đơn giản: mở `index.html` bằng Chrome/Safari.

Khuyến nghị dùng local web server để tránh hạn chế trình duyệt:

```bash
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Publish
Đây là static website, có thể deploy nguyên folder lên GitHub Pages, Netlify, Cloudflare Pages, Vercel hoặc Railway static hosting.

## Lưu ý dữ liệu
Phiên bản này là V1 không cần backend. Dữ liệu JD nằm trên chính trình duyệt đang dùng. Hãy dùng **Xuất dữ liệu JSON** để backup định kỳ.

Nếu cần nhiều nhân sự cùng dùng / đăng nhập / đồng bộ cloud, bước tiếp theo nên chuyển storage sang Supabase/PostgreSQL và thêm authentication + role-based access.

## V2 visual update
- Slogan mặc định: **COLORA - COLOR YOUR AURA**.
- Full COLORA logo được dùng với nền trong suốt và khoảng thở an toàn để tránh bị crop.
- Có sẵn JD **Customer Experience Executive** theo mô hình D2C jewelry startup, bao gồm customer service, online sales, order support, after-sales, CRM, Voice of Customer và process improvement.
- Giao diện editor / preview được refined theo hướng premium, editorial và dễ scan hơn.
