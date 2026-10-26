# Website CLB Môi trường ECO Trần Đại Nghĩa

Trang web một trang, chạy bằng GitHub Pages: https://ecotrandainghia.github.io/

Trang không hiện trên Google (đã chặn bằng `robots.txt` và thẻ `noindex`), chỉ vào được qua link trên fanpage.

## Sửa nội dung

Gần như mọi nội dung hay đổi đều nằm trong **một file**: `js/data.js`.

- **Ngày tuyển thành viên:** sửa dòng `ECO_RECRUIT_DATE` (dạng năm-tháng-ngày, ví dụ `"2027-02-01"`).
- **Câu mô tả mỗi Gen:** sửa trong `ECO_DESC`, mỗi dòng một Gen.
- **Hoạt động trên dòng thời gian:** sửa trong `ECO_TL`. Mỗi hoạt động là một dòng:
  `["Tên hoạt động", "tháng/năm", "đơn vị collab hoặc để trống", "tên-file-anh.jpg"]`

Khi sửa, giữ nguyên dấu ngoặc `[ ]`, dấu phẩy và dấu nháy `" "`.

Chữ ở các phần khác (Giới thiệu, Hỏi đáp, chân trang) nằm trong `index.html`.

## Thêm ảnh

1. Thu nhỏ ảnh còn khoảng 1400px chiều dài, lưu dạng `.jpg`.
2. Đặt tên file không dấu, không khoảng trắng, ví dụ `g12-202709-bonding-1.jpg`.
3. Bỏ ảnh vào thư mục `img/`.
4. Thêm một dòng vào `ECO_TL` trong `js/data.js` với đúng tên file đó.

Ưu tiên ảnh tập thể, tránh ảnh cận mặt một người.

## Thêm Gen mới

Trong `js/data.js`: thêm một câu vào cuối `ECO_DESC` và thêm một nhóm `[ ... ]` mới vào cuối `ECO_TL`.

## Bật GitHub Pages (chỉ làm một lần)

Settings → Pages → Source: **Deploy from a branch** → Branch: **main**, thư mục **/ (root)** → Save.
Đợi 1–2 phút là web lên.

## Ghi chú kỹ thuật

- HTML, CSS, JavaScript thuần, không thư viện, không máy chủ, không gọi dịch vụ bên ngoài.
- Phông chữ Be Vietnam Pro, Fraunces, JetBrains Mono được lưu sẵn trong `fonts/` (giấy phép SIL Open Font License 1.1).
