import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as eva from "@eva-design/eva"
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import styles from './StudenNewsScreenStyle';
import { MarkFormat } from '@libs/mark-format/react-native';

const listNews = [
  {
    id: '1',
    title: `\n**### DANH SÁCH SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI ỨNG DỤNG CNTT TRÌNH ĐỘ CƠ BẢN NGÀY THI 14/4/2023**`,
    day: '12',
    monthyear: '04/2023',
    content:`\n#### DANH SÁCH SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI ỨNG DỤNG CNTT TRÌNH ĐỘ CƠ BẢN NGÀY THI 14/4/2023
    Phòng Đào tạo - Khảo thí thông báo Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ cơ bản ngày thi 14/4/2023:
    **[Sinh viên xem "Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ cơ bản ngày thi 14/4/2023 CA 16H30 và 18h30"](https://qldt.dntu.edu.vn//Files/648/file/AB%2031_3/14_4_2023.pdf)**
    Sinh viên truy cập vào trang website https://sv.dntu.edu.vn -> Tên đăng nhập (mã sv) -> mật khẩu -> chọn mục Lịch thi -> Xem lịch thi -> xem lịch thi trong giao diện.
**#### LƯU Ý:**
- ==Sinh viên thi ca 1 có mặt lúc 16h30 tại phòng thi ;==
- ==Sinh viên thi ca 2 có mặt lúc 17h30 tại phòng thi ;==
- ==Thi bằng laptop của Nhà trường, sinh viên chỉ mang theo **CHUỘT** ;==
- Sinh viên không mang theo latop, balo, túi xách ... và các vật dụng cá nhân khác
- Đến chậm 15 phút sau khi bóc đề thi thì không được dự thi;
- Chỉ được mang vào phòng thi: Bút viết, thẻ sinh viên (rõ,nét), căn cước công dân, các giấy tờ tùy thân khác
- ==Sinh viên phải xuất trình thẻ sinh viên (rõ, nét) hoặc căn cước để vào phòng thi, nếu không có thẻ sinh viên hoặc căn cước sinh viên sẽ không được dự thi==
- Sinh viên mang tài liệu, vật dụng trái phép vào phòng thi, dù chưa sử dụng cũng bị đình chỉ thi.
**Cần hỗ trợ thêm thông tin sinh viên liên hệ:**
Văn phòng Bộ phận Một cửa, Trường Đại học Công nghệ Đồng Nai.
Đường Nguyễn Khuyến, KP5, P. Trảng Dài, Tp.  Biên Hòa, tỉnh Đồng Nai.
Điện thoại : 02512.211.852
\n
Trân trọng.
    `,
  },
  {
id: '2',
title: `\n**### DANH SÁCH SINH VIÊN CHƯA NỘP BẢN SAO BẰNG TỐT NGHIỆP THPT**`,
day: '11',
monthyear: '04/2023',
content: `\n
Để thuận tiện trong việc nhận hồ sơ xét tốt nghiệp khi sinh viên hoàn tất chương trình học.
Phòng TT-QLSV-ĐBCLGD thông báo sinh viên khóa 13 (2017-2021), khóa 14 (2018-2022), khóa 15 (2019-2023), khóa 16 (2020-2024) có tên trong danh sách bên dưới chưa nộp bản sao bằng tốt nghiệp.
Đính kèm file:**[DANH SÁCH SINH VIÊN CHƯA NỘP BẢN SAO BẰNG TỐT NGHIỆP THPT](https://qldt.dntu.edu.vn//Files/648/file/AB%2031_3/DS%20SV%20CHUA%20NOP%20BANG%20TN%20THPT%20update%2011_4_2023.pdf)**
Đề nghị sinh viên nộp ==“01 Bản sao hoặc bản photo công chứng bằng tốt nghiệp THPT”== về phòng TT-QLSV-ĐBCLGD.
Thời gian nộp: ==Từ ngày ra thông báo đến hết ngày 28/04/2023==
Địa điểm nộp: **==Bộ phận một cửa Tầng trệt Nhà G -> Quầy số 5 và số 6==** Thông tin ghi trên “Bản sao hoặc bản photo công chứng bằng tốt nghiệp THPT” (ghi bằng bút chì) bao gồm: mã số sinh viên và lớp học danh nghĩa. Cần hỗ trợ thêm thông tin sinh viên liên hệ trực tiếp Phòng TT-QLSV-ĐBCLGD hoặc qua sđt (02516 297733).
* Sinh viên lưu ý: Sinh viên không nộp Bản sao hoặc bản photo công chứng bằng tốt nghiệp THPT đúng hạn thì sẽ không đủ hồ sơ khi xét tốt nghiệp bậc Đại học. Mọi sự chậm trễ sinh viên hoàn toàn chịu trách nhiệm trước Nhà trường.
\n
Trân trọng!
    `,
  },
  {
    id: '3',
    title: `\n**### Thông báo về việc mở lớp tiếng Anh chuẩn đầu ra tháng 4/2023**`,
    day: '08',
    monthyear: '04/2023',
    content: `\n
    **Khoa ngoại ngữ thông báo mở các lớp tiếng Anh chuẩn đầu ra như sau:**

I. **Đối tượng đăng ký:** Sinh viên chưa hoàn thành học phần Tiếng Anh chuẩn đầu ra.
II. **Đăng ký học và thi:**\n

- Sinh viên vào website [sv.dntu.edu.vn](https://sv.dntu.edu.vn).
- Đăng nhập theo mã sinh viên và mật khẩu.
- Click mục **Đăng ký HP**
- Tại mục “Những môn bắt buộc” click vào tên môn “Tiếng Anh chuẩn đầu ra”
click “Đăng ký” vào lớp mình chọn.
- Đóng học phí trực tiếp tại phòng TCKT hoặc qua tài khoản ngân hàng theo thông báo ngày 10/3/2023 của Trường Đại học Công nghệ Đồng Nai.

a. Đơn vị hưởng: Trường Đại học Công nghệ Đồng Nai
Số tài khoản: ==113000018996==
Tại Ngân hàng: Ngân hàng TMCP Công thương Việt Nam Chi nhánh Đồng Nai
b. Đơn vị hưởng: Trường Đại học Công nghệ Đồng Nai
Số tài khoản: ==5900201006856==
Tại Ngân hàng: Ngân hàng Nông nghiệp và Phát triển nông thôn Chi nhánh Đồng Nai
==Nội dung chuyển tiền: NTKSV  Mã sinh viên  Họ tên==
==Ví dụ: NTKSV 1100706  Nguyễn Thu Hà==
\n

III. ==**Ngày bắt đầu đăng ký:** 10h ngày 12/4/2023==
IV. **Ngày hết hạn đăng ký:** 16/4/2023
V. **Ngày hết hạn hủy học phần:** 16/4/2023
VI. **Ngày hết hạn đóng học phí:** 16/4/2023
VII. **Ngày thi dự kiến:** Sau khi hoàn thành lớp ôn

**~Lưu ý:~**

- **Sinh viên tự trang bị thiết bị (máy tính, sạc, tai nghe,…) để dự thi.**
- Nếu sĩ số sinh viên đăng ký vào các lớp học phần mở ra đầy trước thời hạn, Nhà trường sẽ không giải quyết việc ĐKHP thêm cho sinh viên vào các lớp theo quy định, sinh viên sẽ chờ mở lớp và ĐKHP vào các đợt kế tiếp.
- **==Sau ngày 16/4/2023 sinh viên chưa đóng học phí sẽ không có tên trong danh sách dự thi theo quy định của Nhà trường.==**
- Sinh viên vào website sv.dntu.edu.vn tại mục “**Cá nhân**” chọn mục “**Thông tin cá nhân**” kiểm tra lại thông tin (họ tên, giới tính, ngày sinh, nơi sinh, dân tộc, lớp). Nếu thông tin sai sinh viên tự điều chỉnh đồng thời liên hệ Đào tạo để được xác nhận. Nhà trường sẽ căn cứ thông tin trên website để cấp chứng chỉ, mọi sai sót sinh viên tự chịu trách nhiệm.

**Mọi chi tiết xin vui lòng liên hệ:**
Văn phòng Khoa Ngoại ngữ, Trường Đại học Công nghệ Đồng Nai.
Đường Nguyễn Khuyến, KP5, P. Trảng Dài, Tp.  Biên Hòa, tỉnh Đồng Nai.
Điện thoại : 02512 211 218
\n
Trân trọng.
    `,
  },
  {
    id: '4',
    title: `\n**### DANH SÁCH SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI ỨNG DỤNG CNTT TRÌNH ĐỘ CƠ BẢN NGÀY THI 14/4/2023**`,
    day: '06',
    monthyear: '04/2023',
    content: `\n
    **Hội đồng Thi Tin học, Trường Đại học Công nghệ Đồng Nai Thông báo lịch thi Ứng dụng CNTT trình độ cơ bản ngày thi 14/4/2023 như sau:**
==Đề nghị sinh viên đã ĐKHP mã lớp Thi - Ứng dụng CNTT trình độ cơ bản "3107.60629 và 3107.60628" hoàn thành học phí trước ngày 8/4/2023.
Sau ngày 8/4/2023 sinh viên chưa hoàn thành học phí sẽ bị cấm thi theo quy định
**Ngày 9/4/2023 xét tư cách dự thi**
Sinh viên cập nhật danh sách SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI vào thông báo tiếp theo==
Sinh viên xem lịch thi tại -> sv.dntu.edu.vn -> Lịch thi ->Xem lịch thi
Cần hỗ trợ thêm thông tin sinh viên liên hệ trực tiếp tại Bộ phận một cửa hoặc qua sdt 0251.2211.852
\n
Trân trọng thông báo.
`,
  },
  {
    id: '5',
    title: `\n**### Thông báo về việc cài đặt sử dụng định danh điện tử qua “Ứng dụng VNeID”**`,
    day: '05',
    monthyear: '04/2023',
    content: `\n
    Ứng dụng VNeID được ra đời nhằm thay thế những giấy tờ truyền thống định danh công dân trong nền tảng kỹ thuật số. Bên cạnh đó, app đem lại thêm những tiện ích về chính phủ số, xã hội số, phát triển dân số và hỗ trợ công dân có thể khai báo y tế cũng như khai báo di chuyển nội địa một cách đơn giản và nhanh chóng nhất.
-  Trường Đại học Công nghệ Đồng Nai thông báo đến toàn thể sinh viên Nhà trường phải thực hiện tải phần mềm VneID về điện thoại và hoàn thành mức độ 1. (Thời gian hoàn thành: Từ 06/04/2023 đến hết ngày 16/04/2023).
- Sau khi hoàn thành mức độ 1 Sinh viên đăng ký hoàn thành **mức độ 2** vui lòng đăng ký Link: [https://forms.gle/KEWPGA2Hs5MDD9JD9](https://docs.google.com/forms/d/e/1FAIpQLScCF9SV4T3Bydoadcht8Eh5pCxDZhQ4DwsDDYkHR5gUBDHfVg/viewform)     (Lưu ý đăng nhập Link phải đuôi Gmail dntu nhé)
-  Địa điểm tổ chức hoàn thành **mức độ 2** tại Trường (sẽ có thông báo cụ thể sau)
\n
Lưu ý: 100% Sinh viên phải thực hiện nghĩa vụ này 
`,
  },
  {
    id: '6',
    title: `\n**### Khảo sát về việc học Ứng dụng CNTT năm 2023**`,
    day: '03',
    monthyear: '04/2023',
    content: `\n
    Nhằm lắng nghe và khảo sát nhu cầu học thực tế các học phần Ứng dụng CNTT năm 2023,
Nay Phòng Đào tạo - Khảo thí gửi Phiếu khảo sát tình hình thực tế về việc học online hoặc trực tiếp,
Sinh viên hoàn thành các nội dung trong phiếu khảo sát theo link sau => [PHIẾU KHẢO SÁT](https://docs.google.com/forms/d/e/1FAIpQLSeRj4wUR_QF9kba2Ois93srNRxUlWqOWOBExVie6gavHbLp8Q/viewform) 
Phòng Đào tạo - Khảo thí sẽ căn cứ vào tình hình khảo sát thực tế để mở các học phần phù hợp cho sinh viên trong các đợt kế tiếp.
\n
Trân trọng!
`,
  },
  {
    id: '7',
    title: `\n**### Thông báo về việc nhận đồng phục bơi Khóa 18**`,
    day: '03',
    monthyear: '04/2023',
    content: `\n
Nhằm đảm bảo cho việc học bơi được thực hiện đúng nội quy,
Nhà trường thông báo đến toàn thể sinh viên khóa 18 về việc nhận đồng phục bơi như sau:
- ==Thời gian nhận: Từ ngày 03/4/2023 đến hết ngày 15/04/2023==
- Địa điểm: Quầy thông tin - Tầng trệt Thư viện
- ==Đối tượng: Sinh viên khóa 18 chưa nhận đồng phục bơi==
- Sau thời gian trên, Nhà trường sẽ không giải quyết mọi thắc mắc và các vấn đề phát sinh.
\n
Trân trọng thông báo.
`,
  },
{
  id: '8',
  title: `\n**### THÔNG BÁO ĐĂNG KÝ CUỘC THI MISS & MR DNTU 2023 - NÉT ĐẸP SINH VIÊN DNTU**`,
  day: '31',
  monthyear: '03/2023',
  content: `\n
DNTU Thông báo !
CHÍNH THỨC PHÁT ĐỘNG CUỘC THI **MISS & MR DNTU 2023** - NÉT ĐẸP SINH VIÊN DNTU 
Đăng ký dự thi Miss & Mr DNTU:[https://docs.google.com/.../1FAIpQLSeEOMHK3WH2OB.../viewform](https://docs.google.com/forms/d/e/1FAIpQLSeEOMHK3WH2OBGMJK2n5dAM9OQ5TX_cz7TPKj1DVNY3KI1sXA/closedform)
**các bạn đăng nhập vào mail trường để đăng kí**
Hạn chót đăng ký: 23h59ph ngày 06/04/2023
NÉT ĐẸP SINH VIÊN DNTU - Miss & Mr DNTU 2023 là cuộc thi nhằm tôn vinh sắc đẹp, trí tuệ và tài năng của sinh viên Trường Đại học Công nghệ Đồng Nai. Cuộc thi hứa hẹn tìm ra những gương mặt sẵn sàng trở thành "Đại sứ sinh viên DNTU" có sắc đẹp, tài năng, tri thức và đạo đức, xứng với tên gọi sinh viên Trường Đại học Công nghệ Đồng Nai.
**Thông tin cuộc thiMISS & MR DNTU 2023**
I. Đối tượng tham gia:
- Sinh viên đang theo học tại Trường Đại học Công nghệ Đồng Nai
II. Điều kiện dự thi:
- Chiều cao tối thiểu: 1m60 (đối với nữ) và 1m65 (đối với nam);
- Có tư cách đạo đức tốt và không vi phạm pháp luật Việt Nam.
III. Các vòng thi:
1. Nhận hồ sơ dự thi: Từ ngày ra thông báo đến hết ngày 06/04/2023
1. Vòng sơ loại:
Thời gian: ngày 11/04/2023
Địa điểm: Trung tâm Thông tin Thư viện DNTU
1. Vòng bán kết:
Ngày 1: ngày 14/04/2023
Địa điểm: Trường quay DNTU
Hình thức: chụp ảnh phần thi "Bình chọn"
Ngày 2: ngày 26/04/2023
Địa điểm: Hội trường G - Tòa nhà Trung tâm tích hợp DNTU
Phần thi: trình diễn trang phục và thi tài năng

1. Đêm chung kết:
- Thời gian: ngày 05/05/2023
- Địa điểm: Trung tâm Tổ chức sự kiện và Giải trí DNTU
IV. Danh hiệu và Giải thưởng:
Miss & Mr DNTU (Quán quân)
02 giải Nhì (Á Quân)
02 giải Ba
Ngoài ra, Miss DNTU 2023 (Quán quân nữ) sẽ được tiến thẳng vào Vòng Chung kết Cuộc thi Đại sứ Du lịch Đồng Nai 2023
Đây chính là cơ hội để các bạn sinh viên bứt phá giới hạn bản thân và viết nên những dấu ấn riêng biệt của mình.
`,
},
{
  id: '9',
  title: `\n**### Thông báo về việc mở các lớp học phần Ứng dụng CNTT cơ bản và nâng cao khóa 2**`,
  day: '30',
  monthyear: '03/2023',
  content: `\n
Phòng Đào tạo - Khảo thí thông báo về việc mở các lớp học phần Ứng dụng CNTT cơ bản và nâng cao khóa 2 như sau:
- Lớp Ứng dụng CNTT cơ bản: dự kiến 10 lớp ==(mỗi lần mở 02 lớp, nếu lớp đầy Nhà trường sẽ mở các lớp tiếp theo)==.
- ==Đăng ký học phần: 9h ngày 15/4/2023==
\n
- Lớp Ứng dụng CNTT nâng cao: dự kiến 10 lớp ==(mỗi lần mở 02 lớp, nếu lớp đầy Nhà trường sẽ mở các lớp tiếp theo)==.
- ==Đăng ký học phần: 9h ngày 17/4/2023==
\n
- ==Ngày hết hạn hủy học phần: 20/4/2023==
- ==Ngày hết hạn đóng học phí: 20/4/2023==
- ==**Thời gian học: tháng 6/2023**==
\n 
Trân trọng thông báo.
`,
},
{
  id: '10',
  title: `\n**### Thông báo lịch nghỉ Ngày Giỗ tổ Hùng Vương (10/3 Âm lịch), Ngày Chiến thắng 30/4 và Ngày Quốc tế lao động 01/5 năm 2023**`,
  day: '29',
  monthyear: '03/2023',
  content: `\n
Phòng Đào tạo - Khảo thí Thông báo lịch nghỉ Ngày Giỗ tổ Hùng Vương (10/3 Âm lịch), Ngày Chiến thắng 30/4 và Ngày Quốc tế lao động 01/5 năm 2023 như sau:
- Sinh viên toàn trường được nghỉ học từ ngày 29/04 đến hết ngày 02/5/2022.
- Ngày 03/5/2022 sinh viên trở lại học tập bình thường theo thời khóa biểu.
\n
Trân trọng thông báo !
`,
},
{
  id: '11',
  title: `\n**### DANH SÁCH SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI ỨNG DỤNG CNTT TRÌNH ĐỘ NÂNG CAO NGÀY THI 04/4/2023**`,
  day: '28',
  monthyear: '03/2023',
  content: `\n
Phòng Đào tạo - Khảo thí thông báo Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ nâng cao ngày thi 04/4/2023:
\n
**[Sinh viên xem "Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ nâng cao ngày thi 04/4/2023 CA 16H30 và 18h30"](https://qldt.dntu.edu.vn//Files/648/file/AB%2031_3/1_201-%C4%91%C3%A3%20g%E1%BB%99p.pdf)**
==(SINH VIÊN ĐÃ ĐĂNG KÝ DỰ THI CÒN LẠI SẼ CẬP NHẬT THÔNG BÁO ->DANH SÁCH THI -> LỊCH THI -> VÀO ĐỢT KẾ TIẾP)==
\n
Sinh viên truy cập vào trang website https://sv.dntu.edu.vn -> Tên đăng nhập (mã sv) -> mật khẩu -> chọn mục Lịch thi -> Xem lịch thi -> xem lịch thi trong giao diện.
\n
**LƯU Ý:**
- ==Sinh viên có mặt lúc 16h30 tại phòng thi==
-  Đến chậm 15 phút sau khi bóc đề thi thì không được dự thi
- Chỉ được mang vào phòng thi: Bút viết, thẻ sinh viên, các giấy tờ tùy thân khác. Ngoài các vật dụng và giấy tờ trên, không được mang bất kỳ tài liệu, vật dụng nào khác vào khu vực thi và phòng thi.
- Sinh viên phải xuất trình thẻ sinh viên để vào phòng thi, nếu không có thẻ sinh viên, sinh viên sẽ không được dự thi
- Sinh viên mang tài liệu, vật dụng trái phép vào phòng thi, dù chưa sử dụng cũng bị đình chỉ thi.
**Cần hỗ trợ thêm thông tin sinh viên liên hệ:**
Văn phòng Bộ phận Một cửa, Trường Đại học Công nghệ Đồng Nai.
Đường Nguyễn Khuyến, KP5, P. Trảng Dài, Tp.  Biên Hòa, tỉnh Đồng Nai.
Điện thoại : 02512.211.852
Trân trọng.
`,
},
{
  id: '12',
  title: `\n**### DANH SÁCH SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI ỨNG DỤNG CNTT TRÌNH ĐỘ CƠ BẢN NGÀY THI 31/3/2023**`,
  day: '27',
  monthyear: '03/2023',
  content: `\n
Phòng Đào tạo - Khảo thí thông báo Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ cơ bản ngày thi 31/3/2023:
\n
**[Sinh viên xem "Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ cơ bản ngày thi 31/3/2023 CA 16H30"](https://qldt.dntu.edu.vn//Files/648/file/AB%2031_3/DSSVDuthi%20201-%C4%91%C3%A3%20g%E1%BB%99p.pdf)**
**[Sinh viên xem "Danh sách sinh viên đủ điều kiện dự thi Ứng dụng CNTT trình độ cơ bản ngày thi 31/3/2023 CA 18H30"](https://qldt.dntu.edu.vn//Files/648/file/AB%2031_3/DSSVDuthi%20(3)-%C4%91%C3%A3%20g%E1%BB%99p.pdf)**
\n
==(SINH VIÊN ĐÃ ĐĂNG KÝ DỰ THI CÒN LẠI SẼ CẬP NHẬT THÔNG BÁO ->DANH SÁCH THI -> LỊCH THI -> VÀO ĐỢT KẾ TIẾP)==
\n
Sinh viên truy cập vào trang website **[sv.dntu.edu.vn](https://sv.dntu.edu.vn)** -> Tên đăng nhập (mã sv) -> mật khẩu -> chọn mục Lịch thi -> Xem lịch thi -> xem lịch thi trong giao diện.
\n
**LƯU Ý:**
- Sinh viên có mặt lúc 16h30 tại phòng thi
- Đến chậm 15 phút sau khi bóc đề thi thì không được dự thi;
- Chỉ được mang vào phòng thi: Bút viết, thẻ sinh viên, các giấy tờ tùy thân khác. Ngoài các vật dụng và giấy tờ trên, không được mang bất kỳ tài liệu, vật dụng nào khác vào khu vực thi và phòng thi.
- Sinh viên phải xuất trình thẻ sinh viên để vào phòng thi, nếu không có thẻ sinh viên, sinh viên sẽ không được dự thi
- Sinh viên mang tài liệu, vật dụng trái phép vào phòng thi, dù chưa sử dụng cũng bị đình chỉ thi.
**Cần hỗ trợ thêm thông tin sinh viên liên hệ:**
Văn phòng Bộ phận Một cửa, Trường Đại học Công nghệ Đồng Nai.
Đường Nguyễn Khuyến, KP5, P. Trảng Dài, Tp.  Biên Hòa, tỉnh Đồng Nai.
Điện thoại : 02512.211.852
Trân trọng.
`,
},
{
  id: '13',
  title: `\n**### Thông báo thời gian tập trung học Giáo dục Quốc phòng - An ninh khóa 17 năm 2023 (ĐỢT 3)**`,
  day: '24',
  monthyear: '03/2023',
  content: `\n
Phòng Đào tạo - Khảo thí thông báo đến toàn thể sinh khóa 17 về thời gian học Giáo dục Quốc phòng - An ninh (GDQP-AN) đợt 3 như sau:
\n
I. THỜI GIAN VÀ ĐỊA ĐIỂM TẬP TRUNG NHẬN LỚP - ĐẠI ĐỘI ĐỢT 3 NHƯ SAU:
\n
==**Sinh viên tập trung lúc 7h30 ngày 27/03/2023, buổi đầu tiên sinh viên mặc đồng phục Thể dục của Trường.**==
==**Địa điểm: Hội trường G501 (Trung tâm Tích hợp)**==
==Thời gian học: **Từ ngày 27/03/2023 đến 16/4/2023, gồm các ngành:**==
- Ngôn ngữ Anh
- Ngôn ngữ Trung Quốc
- Đông phương học
- Kế toán
- Tài chính - Ngân hàng
 => [DANH SÁCH ĐẠI ĐỘI ĐỢT 3](https://qldt.dntu.edu.vn//Files/648/file/11111/DSSV%20DNTU%20%C4%91%E1%BB%A3t%203%20th%C3%A1ng%203_2023.pdf)
\n
II. QUY ĐỊNH CHUNG
Thời gian học theo quy định của đơn vị giảng dạy GDQP-AN:
- Buổi sáng: 7h30-11h30
- Buổi chiều:13h30-17h30
- Sinh viên thi rớt phải đóng lệ phí thi lại theo quy định
- Sinh viên vắng học sẽ bị cấm thi theo quy định
- Sinh viên phải mang đồng phục quân sự theo quy định
- Sinh viên đóng lệ phí đăng ký thuê quân trang, nhận và trả đồng phục theo hướng dẫn của giảng viên đơn vị giảng dạy GDQP-AN.
- Sinh viên đọc kỹ ==**NỘI QUY MÔN HỌC GDQP-AN**== này để đảm bảo quyền lợi và trách nhiệm của mình.
\n
Cần hỗ trợ thêm thông tin sinh viên liên hệ Bộ phận một cửa tại Tầng trệ nhà G hoặc qua số điện thoại 02512.211.852.
\n
Trân trọng thông báo.
`,
},
{
  id: '14',
  title: `\n**### Thông báo lịch thi Ứng dụng CNTT trình độ nâng cao ngày thi 04/4/2023**`,
  day: '23',
  monthyear: '03/2023',
  content: `\n
Hội đồng Thi Tin học, Trường Đại học Công nghệ Đồng Nai Thông báo lịch thi Ứng dụng CNTT trình độ nâng cao ngày thi 04/4/2023 như sau:
==Đề nghị sinh viên hoàn thành học phí trước ngày 25/3/2023==
==Sau ngày 25/3/2023 sinh viên chưa hoàn thành học phí sẽ bị cấm thi theo quy định==
==Ngày 26/3/2023 xét tư cách dự thi==
Sinh viên cập nhật danh sách SINH VIÊN ĐỦ ĐIỀU KIỆN DỰ THI vào thông báo tiếp theo
Sinh viên xem lịch thi tại -> sv.dntu.edu.vn -> Lịch thi ->Xem lịch thi
Cần hỗ trợ thêm thông tin sinh viên liên hệ trực tiếp tại Bộ phận một cửa hoặc qua sdt 0251.2211.852
\n
Trân trọng thông báo.
`,
},
{
  id: '15',
  title: `\n**### Thông báo về việc mở lớp tiếng Anh chuẩn đầu ra tháng 4/2023**`,
  day: '23',
  monthyear: '03/2023',
  content: `\n
**Khoa ngoại ngữ thông báo mở các lớp tiếng Anh chuẩn đầu ra như sau:**
I. **Đối tượng đăng ký:** Sinh viên chưa hoàn thành học phần Tiếng Anh chuẩn đầu ra.
II. **Đăng ký học và thi:**
- Sinh viên vào website sv.dntu.edu.vn.
- Đăng nhập theo mã sinh viên và mật khẩu.
- Click mục **Đăng ký HP**
- Chọn mục **Đăng ký học phần**    
- Tại mục “Những môn bắt buộc” click vào tên môn “Tiếng Anh chuẩn đầu ra”
click “Đăng ký” vào lớp mình chọn.
- Đóng học phí trực tiếp tại phòng TCKT hoặc qua tài khoản ngân hàng theo thông báo ngày 10/3/2023 của Trường Đại học Công nghệ Đồng Nai
a. Đơn vị hưởng: Trường Đại học Công nghệ Đồng Nai
Số tài khoản: ==113000018996==
Tại Ngân hàng: Ngân hàng TMCP Công thương Việt Nam Chi nhánh Đồng Nai
\n
b. Đơn vị hưởng: Trường Đại học Công nghệ Đồng Nai
Số tài khoản: ==5900201006856==
Tại Ngân hàng: Ngân hàng Nông nghiệp và Phát triển nông thôn Chi nhánh Đồng Nai
==Nội dung chuyển tiền: NTKSV  Mã sinh viên  Họ tên ==
==Ví dụ: NTKSV 1100706  Nguyễn Thu Hà==
\n
III. **Ngày bắt đầu đăng ký:** 9h30 ngày 27/3/2023
IV.  **Ngày hết hạn đăng ký**: 31/3/2023
V. **Ngày hết hạn hủy học phần:** 31/3/2023
VI. **Ngày hết hạn đóng học phí:** 31/3/2023
VII. **Ngày thi dự kiến:** Sau khi hoàn thành lớp ôn
\n
~~** Lưu ý: **~~
- **Sinh viên tự trang bị thiết bị (máy tính, sạc, tai nghe,…) để dự thi.**
- Nếu sĩ số sinh viên đăng ký vào các lớp học phần mở ra đầy trước thời hạn, Nhà trường sẽ không giải quyết việc ĐKHP thêm cho sinh viên vào các lớp theo quy định, sinh viên sẽ chờ mở lớp và ĐKHP vào các đợt kế tiếp.
- **Sau ngày 31/3/2023 sinh viên chưa đóng học phí sẽ không có tên trong danh sách dự thi theo quy định của Nhà trường.**
- Sinh viên vào website sv.dntu.edu.vn tại mục “**Cá nhân**” chọn mục “**Thông tin cá nhân**” kiểm tra lại thông tin (họ tên, giới tính, ngày sinh, nơi sinh, dân tộc, lớp). Nếu thông tin sai sinh viên tự điều chỉnh đồng thời liên hệ Đào tạo để được xác nhận. Nhà trường sẽ căn cứ thông tin trên website để cấp chứng chỉ, mọi sai sót sinh viên tự chịu trách nhiệm.
\n
**Mọi chi tiết xin vui lòng liên hệ:**
Văn phòng Khoa Ngoại ngữ, Trường Đại học Công nghệ Đồng Nai.
Đường Nguyễn Khuyến, KP5, P. Trảng Dài, Tp.  Biên Hòa, tỉnh Đồng Nai.
Điện thoại : 02512 211 218  
Trân trọng.
`,
},
];



const StudentNewsScreen = ({ navigation }) => {
  const RenderListItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.list_container} onPress={() => navigation.navigate('News', { item: item })}>
        <View style={styles.date_container}>
          <View style={styles.date}>
            <View style={styles.line}><Text style={styles.day}>{item.day}</Text></View>
            <Text style={styles.monthyear}>{item.monthyear}</Text>
          </View>
        </View>
        <View style={styles.title_container}>
          <Text numberOfLines={3}><MarkFormat text = { item.title } /></Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.main}>
          <View>
            <View style={styles.category}>
              <Text style={styles.category_name}>Bản tin danh cho sinh viên DNTU</Text>
              <AntDesign name="right" size={25} />
            </View>
            <View>
              <FlatList
                data={listNews}
                renderItem={({ item }) => <RenderListItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};


export default StudentNewsScreen;
