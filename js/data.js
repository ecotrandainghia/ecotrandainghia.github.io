/* ==========================================================
   DỮ LIỆU CỦA WEBSITE — muốn sửa nội dung thì sửa ở file này.
   Giữ nguyên dấu ngoặc, dấu phẩy và dấu nháy " " khi sửa.
   ========================================================== */

/* Ngày bắt đầu tuyển thành viên (đồng hồ đếm ngược tới ngày này). Viết theo dạng năm-tháng-ngày. */
var ECO_RECRUIT_DATE = "2027-02-01";

/* Các cụm chữ tự đổi ở trang đầu (sau chữ "Mười năm"). Nên giữ ngắn, dài gần bằng nhau. */
var ECO_WORDS = ["gieo mầm xanh", "cùng lớn lên", "nuôi ý tưởng", "sống xanh hơn"];

/* Một câu mô tả ngắn cho mỗi Gen, theo thứ tự Gen 1, Gen 2, ... */
var ECO_DESC = [
  "Những ngày đầu: chai nhựa, giấy báo cũ và rất nhiều háo hức.",   // Gen 1
  "Ba buổi bonding liền nhau, ECO bắt đầu thành một nhà.",   // Gen 2
  "Từ hành lang tới lớp học, những workshop xanh đầu tiên ra đời.",   // Gen 3
  "Lần đầu dựng gian hàng, lần đầu bắt tay cùng một đơn vị đồng hành.",   // Gen 4
  "Sân trường rực áo xanh, ECO có mặt ở mọi ngày hội.",   // Gen 5
  "Gặp nhau qua màn hình vẫn chẳng làm ECO bớt gắn kết.",   // Gen 6
  "Một năm của đôi tay khéo: tái chế, handmade và những gian hàng rực rỡ.",   // Gen 7
  "Từ xưởng giấy tới gian hàng phủ xanh, ý tưởng nào cũng thành hình.",   // Gen 8
  "Năm nhiều dấu chân nhất: ra phố nhặt rác, ghé nhà tình thương, gian hàng nối tiếp gian hàng.",   // Gen 9
  "Khép lại mười năm đầu bằng hoa, cây tri ân và những lời cảm ơn.",   // Gen 10
  "Trang đầu của thập kỷ thứ hai, vẫn đang được viết tiếp."   // Gen 11
];

/* Các hoạt động của từng Gen. Mỗi dòng là một hoạt động:
   [ "Tên hoạt động", "tháng/năm", "đơn vị collab (để trống nếu không có)", "tên file ảnh trong thư mục img" ]
   Thêm hoạt động mới: chép một dòng, sửa nội dung, rồi bỏ ảnh vào thư mục img. */
var ECO_TL = [
  // ----- Gen 1 · 2016–2017 -----
  [
    ["Bonding 2: chủ đề Nguồn nước", "9/2016", "", "g01-201609-bonding-2-chu-de-nguon-nuoc.jpg"],
    ["Ngày hội Tái chế", "2/2017", "Mỹ thuật x Handmade", "g01-201702-eco-x-my-thuat-x-handmade-ngay-hoi-tai-che.jpg"],
    ["Event Mát", "7/2017", "", "g01-201707-event-mat.jpg"]
  ],
  // ----- Gen 2 · 2017–2018 -----
  [
    ["Bonding 1", "8/2017", "", "g02-201708-bonding-1.jpg"],
    ["Bonding 2", "9/2017", "", "g02-201709-bonding-2.jpg"],
    ["Bonding 3", "10/2017", "", "g02-201710-bonding-3.jpg"]
  ],
  // ----- Gen 3 · 2018–2019 -----
  [
    ["Bonding 1", "9/2018", "", "g03-201809-bonding-1.jpg"],
    ["Bonding 2", "10/2018", "", "g03-201810-bonding-2.jpg"],
    ["Workshop Xanh", "11/2018", "", "g03-201811-workshop-xanh.jpg"],
    ["Minigame Pờ-lát-tích", "1/2019", "", "g03-201901-mini-game-po-lat-tich.jpg"]
  ],
  // ----- Gen 4 · 2019–2020 -----
  [
    ["5/9: Gian hàng Treasure of the Ocean", "9/2019", "", "g04-201909-gian-hang-59-treasure-of-the-ocean.jpg"],
    ["Bonding 1", "10/2019", "", "g04-201910-bonding-1.jpg"],
    ["Bonding 2", "1/2020", "", "g04-202001-bonding-2.jpg"],
    ["Hội Xuân 16/1: Xuân Thủy Liên Thanh", "1/2020", "Amica", "g04-202001-eco-x-amica-hoi-xuan-161-xuan-thuy-lien-thanh.jpg"],
    ["Event ECO EPOCH", "1/2020", "", "g04-202001-event-eco-epoch.jpg"],
    ["Gian hàng Hội trại 26/3", "6/2020", "", "g04-202006-gian-hang-hoi-trai-276.jpg"]
  ],
  // ----- Gen 5 · 2020–2021 -----
  [
    ["Bonding 1", "9/2020", "", "g05-202009-bonding-1.jpg"],
    ["Gian hàng 5/9", "9/2020", "", "g05-202009-gian-hang-59.jpg"],
    ["Bonding 2", "10/2020", "", "g05-202010-bonding-2.jpg"],
    ["#20withECO", "11/2020", "", "g05-202011-20witheco.jpg"],
    ["Gian hàng Lễ hội Âm nhạc", "3/2021", "Plasbit", "g05-202103-eco-x-plasbit-gian-hang-le-hoi-am-nhac.jpg"]
  ],
  // ----- Gen 6 · 2021–2022 -----
  [
    ["Bonding 1", "10/2021", "", "g06-202110-bonding-1.jpg"],
    ["Bonding 2", "11/2021", "", "g06-202111-bonding-2.jpg"],
    ["Hợp tác truyền thông Youth For Impact", "11/2021", "AIESEC", "g06-202111-eco-x-aiesec-hop-tac-truyen-thong.jpg"],
    ["Cuộc thi Enlight: Viết vì môi trường", "11/2021", "Figo", "g06-202111-eco-x-figo-enlight-viet-vi-moi-truong.jpg"],
    ["Sinh hoạt cộng đồng: Gian hàng REpsycho", "3/2022", "Plasbit", "g06-202203-eco-x-plasbit-gian-hang-repsycho-sinh-hoat-cong-dong.jpg"],
    ["Gian hàng Greenie 23/5", "5/2022", "", "g06-202205-gian-hang-greenie-235.jpg"],
    ["Bonding 4", "6/2022", "", "g06-202206-bonding-4.jpg"],
    ["Event Tình bạn diệu kỳ", "", "NGỌT LAB", "g06-000-eco-x-ngot-lab-event-tinh-ban-dieu-ky.jpg"]
  ],
  // ----- Gen 7 · 2022–2023 -----
  [
    ["5/9: Gian hàng Frestation", "9/2022", "", "g07-202209-gian-hang-59-frestation.jpg"],
    ["Bonding 1", "10/2022", "", "g07-202210-bonding-1.jpg"],
    ["Event Emocean", "2/2023", "", "g07-202302-event-emocean.jpg"],
    ["Bonding 2", "3/2023", "", "g07-202303-bonding-2.jpg"],
    ["Ngày hội CLB/DA: Gian hàng Vạn Hoa", "3/2023", "", "g07-202303-van-hoa-gian-hang-ngay-hoi-clbda-203.jpg"],
    ["Han.de.collect", "5/2023", "Handmade", "g07-202305-eco-x-handmade-han-de-collect.jpg"],
    ["Workshop Handecor", "5/2023", "Handmade", "g07-202305-eco-x-handmade-workshop-handecor.jpg"],
    ["Bonding Farewell", "7/2023", "", "g07-202307-bonding-farewell.jpg"]
  ],
  // ----- Gen 8 · 2023–2024 -----
  [
    ["Bonding 1", "10/2023", "", "g08-202310-bonding-1.jpg"],
    ["Chúc mừng 20/11", "11/2023", "", "g08-202311-chuc-mung-2011.jpg"],
    ["Minigame What's Your ECO System", "11/2023", "", "g08-202311-minigame-whats-your-eco-systerm.jpg"],
    ["Finneas & Furb", "12/2023", "", "g08-202312-finneas-furb.jpg"],
    ["Bonding 2", "3/2024", "", "g08-202403-bonding-2.jpg"],
    ["Gian hàng Phủ Xanh", "3/2024", "", "g08-202403-gian-hang-phu-xanh.jpg"],
    ["Ngày hội CLB/DA: Gian hàng MERSEECO", "4/2024", "The Mersy Act", "g08-202404-eco-x-the-mersy-act-merseeco-gian-hang-ngay-hoi-clbda-14.jpg"],
    ["Workshop nội bộ & Bonding 3", "6/2024", "", "g08-202406-workshop-noi-boi-bonding-3.jpg"],
    ["Event Xưởng Giấy", "8/2024", "", "g08-202408-event-xuong-giay.jpg"]
  ],
  // ----- Gen 9 · 2024–2025 -----
  [
    ["O-Day: Gian hàng E-Core", "9/2024", "", "g09-202409-gian-hang-e-core-o-day-289.jpg"],
    ["Bonding 1", "10/2024", "", "g09-202410-bonding-1.jpg"],
    ["Bảng tương tác Gấp gáp - Gỡ rối", "11/2024", "", "g09-202411-bang-tuong-tac-gap-gap-go-roi.jpg"],
    ["Gian hàng Chuyến Xe Xuân Xanh", "1/2025", "CHESS", "g09-202501-eco-x-chess-gian-hang-xe-xuan-xanh.jpg"],
    ["Gian hàng Nắng Xuân", "1/2025", "", "g09-202501-gian-hang-nang-xuan.jpg"],
    ["Bonding 2", "3/2025", "", "g09-202503-bonding-2.jpg"],
    ["Gian hàng Cà phê Sinh tố", "4/2025", "Plasbit", "g09-202504-eco-x-plasbit-gian-hang-ca-phe-sinh-to.jpg"],
    ["Ghé thăm Nhà tình thương Diệu Giác", "4/2025", "", "g09-202504-ghe-tham-nha-tinh-thuong-dieu-giac.jpg"],
    ["Bảng tương tác AI? - Think Twice", "6/2025", "", "g09-202506-bang-tuong-tac-ai-think-twice.jpg"],
    ["Clean Up Việt Nam 2025", "6/2025", "", "g09-202506-clean-up-2025.jpg"],
    ["Event Terranie", "6/2025", "", "g09-202506-event-terranie.jpg"],
    ["Bonding Farewell", "8/2025", "", "g09-202508-bonding-farewell.jpg"]
  ],
  // ----- Gen 10 · 2025–2026 -----
  [
    ["O-Day: Gian hàng Flourious", "8/2025", "", "g10-202508-gian-hang-flourious-o-day.jpg"],
    ["Bonding 1", "10/2025", "", "g10-202510-bonding-1.jpg"],
    ["Bảng tương tác Wash Over - Gỡ Filter", "10/2025", "", "g10-202510-bang-tuong-tac-wash-over-go-filter.jpg"],
    ["Cây tri ân 20/11", "11/2025", "", "g10-202511-cay-tri-an-2011.jpg"],
    ["Diên Hoa: booth thu đồ đổi cây", "1/2026", "", "g10-202601-dien-hoa-booth-thu-do-doi-cay.jpg"],
    ["Bonding 2", "4/2026", "", "g10-202604-bonding-2.jpg"],
    ["Gian hàng The Green Gambit", "5/2026", "CHESS", "g10-202605-eco-x-chess-gian-hang-the-green-gambit.jpg"],
    ["Thăm mái ấm Hướng Dương", "5/2026", "", "g10-202605-tham-mai-am-huong-duong.jpg"],
    ["Bonding Farewell", "7/2026", "", "g10-202607-bonding-farewell.jpg"],
    ["Event Éclore", "7/2026", "", "g10-202607-event-eclore.jpg"]
  ],
  // ----- Gen 11 · 2026–2027 -----
  [
    ["Gian hàng O-Day", "8/2026", "", "g11-202608-gian-hang-o-day.jpg"]
  ]
];
