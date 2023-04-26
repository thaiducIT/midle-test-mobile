import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image,ScrollView,Platform} from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as Location from "expo-location";

import styles from "./DNTUNewsScreenStyles";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { app_c } from "../../../assets/globals/styles";
import { FlatList } from "react-native-gesture-handler";

import ModalShowImage from "@component/modal_show_image/ModalShowImage";
import LocationInfo from "@component/location_info/LocationInfo";
import RectangleButton from "@component/retangle_button/RetangleButton";
import { MarkFormat } from '@libs/mark-format/react-native';



const listNews = [
  {
    id: 1,
    title: `\n**###### Đại hội Thể Thao sinh viên Tỉnh Đồng Nai 2023, Chức “Vô địch” gọi tên DNTU**`,
    content: `
Đại hội Thể Thao sinh viên Tỉnh Đồng Nai năm 2023 được tổ chức trong 2 ngày 22, 23/04/2023 với các môn thi đấu: Bóng đá, Bóng chuyền, Bóng rỗ, Kéo co, Bơi lội, nhảy dây đồng đội. Các đội tuyển của Trường Đại học Công nghệ Đồng Nai đã xuất sắc đạt vị trí “Hạng nhất” toàn đoàn.
Đại hội Thể thao sinh viên Tỉnh Đồng Nai năm 2023 với sự tham dự của Đại học, Cao đẳng trên địa bàn tỉnh Đồng Nai. Đoàn vận động viên Trường Đại học Công nghệ Đồng Nai đã xuất sắc đạt 6/8 môn thi đấu:
- Bơi lội: Hạng nhất, nhì, ba
- Nhảy dây đồng đội: Hạng ba
- Môn kéo co (Nam): Hạng nhất
- Bóng đá: Vô địch
- Bóng chuyền: Vô địch
- Bóng rỗ: Vô địch
![Hạng Nhất Kéo co (Nam)](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0121.JPG)
![Hạng 3 - Nhảy dây đồng đội](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0156.JPG)
![Hạng Nhất, Nhì, Ba - Bơi lội](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0156.JPG)
![DNTU FC Vô địch bộ môn Bóng đá](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0247.JPG)
![CLB bóng chuyền DNTU Vô đich Bộ môn Bóng Chuyền](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0192.JPG)
![CLB Bóng rỗ DNTU Vô địch bộ môn Bóng rổ](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0221.JPG)
![Hình ảnh Các vận động viên DNTU các môn thi đấu tại Đại hội Thể thao sinh viên Tỉnh Đồng Nai 2023](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0300.JPG)
Trường Đại học Công nghệ Đồng nai với 2 Trung tâm liên hợp thể thao, Cơ sở vật chất hiện đại là đơn vị tài trợ địa điểm thi đấu cho các vận động viên ở giải đấu năm nay.
\n
Tham gia hội thao, hơn 600 vận động viên là sinh viên các trường đại học, cao đẳng trên địa bàn tỉnh đã tham gia thi đấu các môn: bóng chuyền, bóng rổ, bóng đá, kéo co, nhảy bao bố, bơi, cờ vua.
![Đồng chí Nguyễn Đình Thái - Bí thư Đoàn trường DNTU đã nổ lực rất nhiều trong công tác Đại hội Thể thao sinh viên Tỉnh Đồng Nai với cương vị là "chủ nhà".](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0046.JPG)
Được đánh giá là hạt giống số 1 của Đại hội Thể thao sinh viên DNTU năm 2023, Trường Đại học Công nghệ Đồng Nai đã hoàn thành xuất sắc chỉ tiêu mà Ban Giám hiệu đã đề ra…hướng tới việc tuyển chọn các vận động viên cho các giải đấu cấp cao hơn.
![Toàn cảnh Tất cả các Trường Đại học, Cao đẳng trên địa bàn Tỉnh Đồng Nai tham gia Đại hội Thể thao sinh viên Tỉnh Đồng Nai 2023.](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0297.JPG)
\n
Xin chúc mừng các vận động viên DNTU.
`,
    author: "Jane Smith",
    date: "25/04/2023",
    image: "https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/DSC_0297.JPG",
  },
  {
    id: 2,
    title: `\n**# Trường Đại học Công nghệ Đồng Nai tổ chức Hội thảo khoa học quốc gia 2023 “Phát huy giá trị văn hóa các dân tộc trong giảng dạy Ngôn ngữ tại các trường Đại học ở Việt Nam hiện nay”**`,
    content:
`
Dự kiến ngày 28/4/2023, Trường Đại học Công nghệ Đồng Nai (DNTU) phối hợp Viện KHXH vùng Tây Nguyên, Trường Đại học Đà Lạt, trường Đại học Sài Gòn đồng tổ chức Hội thảo khoa học quốc gia 2023 chủ đề: “Phát huy giá trị văn hóa các dân tộc trong giảng dạy Ngôn ngữ tại các trường Đại học ở Việt Nam hiện nay”.
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/backdround-man-chieu-1.jpg)
Chủ đề của Hội thảo đang được các nhà khoa học, các nhà quản lý giáo dục quan tâm hiện nay. Việc kết hợp những giá trị văn hoá truyền thống với những giá trị văn hoá mới trong hoạt động giảng dạy đang là xu hướng mới nhằm bảo tồn cũng như kế thừa và phát huy các giá trị của văn hoá truyền thống của các dân tộc đáng tự hào của ông cha chúng ta.
\n
Hội thảo sẽ xoay quanh các chủ đề sau:
1. Lý luận chung về văn hóa, ngôn ngữ;
1. Thực tiễn vận dụng và phát huy các giá trị văn hóa truyền thống của các dân tộc trong giảng dạy ngôn ngữ tại trường Đại học;
1. Các giải pháp khoa học nhằm vận dụng và phát huy các giá trị văn hóa truyền thống của các dân tộc trong giảng dạy ngôn ngữ tại trường Đại học trong thời gian tới.
\n
Chương trình làm việc dự kiến xem [tại đây](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/Ch%C6%B0%C6%A1ng-tr%C3%ACnh-H%E1%BB%99i-th%E1%BA%A3o-T04_2023-F.jpg)
`,
    author: "John Doe",
    date: "25/04/2023",
    image: "https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/backdround-man-chieu-1.jpg",
  },
  {
    id: 3,
    title: `**# Đại diện Trường Đại học Công nghệ Đồng Nai làm việc với Công ty LIXIL**`,
    content:
`
Ngày 18/4/2023 Trường Đại học Công nghệ Đồng Nai (DNTU) đã có buổi làm việc với Công ty TNHH Sản xuất toàn cầu LIXIL (LIXIL Global Manufacturing Vietnam Co., Ltd). Công ty TNHH Sản xuất toàn cầu LIXIL (LIXIL) nằm ở khu công nghiệp Long Đức, Đồng Nai, là nhà máy chuyên sản xuất khung cửa sổ, cửa ra vào, các sản phẩm ngoại thất trong kiến trúc nhà ở.
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/LX3.jpg)
Tham dự buổi làm việc, về phía DNTU:
\n
- TS. Trần Đức Thuận -  Phó Hiệu trưởng
- PGS. TS Lê Thế Vinh - Giảng viên Khoa Công nghệ
- Thầy Nguyễn Đình Thuật - Trưởng phòng Quan hệ doanh nghiệp
- Thầy Vũ Vi Minh Quân - Phó phòng Quan hệ doanh nghiệp
Về phía Công ty LIXIL:
\n
- Ông Dương Đình Hơn - Trưởng phòng Hành chính Nhân sự
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/LX4.jpg)
Chương trình làm việc bao gồm các nội dung trọng điểm sau:
\n
- Kế hoạch giới thiệu việc làm, tổ chức cho sinh viên kiến tập, thực tập tại công ty trong thời gian tới.
- Trao đổi các thông tin tuyển dụng nhân sự, các yêu cầu về trình độ chuyên môn và kỹ năng mềm của ứng viên.
- Thực hiện khảo sát, tham gia góp ý của công ty trong việc ứng dụng chương đào tạo theo nhu cầu hiện nay của công ty nói riêng và doanh nghiệp trên địa bản tỉnh nói chung
- Tổ chức cho giảng viên DNTU đến tham quan học hỏi mô hình sản xuất, vận hành theo kỹ thuật tân tiến hiện nay.
![Thầy TS. Trần Đức Thuận - Phó Hiệu trưởng Nhà trường trao đổi các nội dung hợp tác với đại diện công ty LIXIL](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/LX1.jpg)
Trong những năm gần đây, Nhà trường luôn chú trọng vấn đề liên kết đào tạo giữa nhà trường và doanh nghiệp nhằm đào tạo nguồn nhân lực có chất lượng, đáp ứng được yêu cầu của doanh nghiệp.
\n
Việc doanh nghiệp cùng tham gia vào việc xây dựng chương trình đào tạo, tổ chức đào tạo và đánh giá người học, định hướng nghề nghiệp cho sinh viên, hỗ trợ sinh viên đến các doanh nghiệp thực tập có ý nghĩa rất quan trọng, giúp sinh viên có cơ hội tiếp cận và cọ sát với môi trường thực tế, góp phần rút ngắn khoảng cách từ nhà trường đến doanh nghiệp. Từ đó giúp các doanh nghiệp giải quyết được bài toán về nguồn nhân lực chất lượng cao cũng như giúp cho sinh viên Nhà trường tìm kiếm được việc làm phù hợp ngay sau khi ra trường. 
`,
   author: "Samantha Lee",
    date: "22/04/2023",
    image: "https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/LX3.jpg",
  },
  {
    id: 4,
    title: `**# Trường Đại học Công nghệ Đồng Nai tham dự lễ kỷ niệm 15 năm thành lập nhà máy Bosch tại Long Thành- Đồng Nai**`,
    content:
`
Ngày 19/4/2023, Trường Đại học Công nghệ Đồng Nai (DNTU) tham dự lễ kỷ niệm 15 năm thành lập Nhà máy Bosch tại KCN Long Thành (H.Long Thành, tỉnh Đồng Nai) và 10 năm thành lập Trung tâm Đào tạo nghề kỹ thuật công nghiệp Bosch tại Đồng Nai (Bosch TGA). Sau 15 năm thành lập, Tập đoàn Bosch đã đầu tư vào nhà máy ở Đồng Nai gần 400 triệu USD để mở rộng các dây chuyền sản xuất. Bosch là một trong những nhà máy được công nhận ứng dụng công nghệ cao sớm nhất trên địa bàn tỉnh Đồng Nai. Đến nay, Nhà máy Bosch đã sản xuất ra hơn 50 triệu sản phẩm xuất khẩu vào thị trường châu Á - Thái Bình Dương và Bắc Mỹ.
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/BO5.jpg)
Tham dự buổi lễ có **đồng chí Nguyễn Sơn Hùng - Phó Chủ tịch UBND tỉnh Đồng Nai, về phía DNTU có: TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường, Thầy Nguyễn Đình Thuật - Trưởng phòng Quan hệ Doanh nghiệp và Thầy Lê Thế Vinh.**
\n
Là một trong những đối tác cung cấp nguồn nhân lực chất lượng cao cho Bosch hàng năm, DNTU vinh dự là trường đại học duy nhất tại Đồng Nai được Công ty TNHH Bosch Việt Nam lựa chọn mời tham dự lễ kỷ niệm với tư cách là đối tác giáo dục.
1[TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường gặp gỡ đồng chí Nguyễn Sơn Hùng - Phó Chủ tịch UBND tỉnh Đồng Nai](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/BO1.jpg)
Phát biểu tại buổi lễ, đồng chí Nguyễn Sơn Hùng - Phó Chủ tịch UBND tỉnh Đồng Nai cho biết sẽ luôn tạo mọi điều kiện thuận lợi để các doanh nghiệp đang hoạt động tại Đồng Nai nói chung và Bosch nói riêng hoạt động hiệu quả và lớn mạnh.
![Đồng chí Nguyễn Sơn Hùng - Phó Chủ Tịch UBND tỉnh Đồng Nai phát biểu nhân dịp thành lập nhà máy Bosch](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/BO3.jpeg)
Sau buổi lễ, TS. Phan Ngọc Sơn đã có các cuộc gặp bên lề với lãnh đạo Trường Đại học Sư Phạm Kỹ Thuật Thành phố Hồ Chí Minh (HCMUTE). Hai bên cùng thống nhất những nội dung hợp tác trọng điểm trong thời gian tới như: **trong tháng 6 sẽ tổ chức chương trình Uni tour với sự tham gia của 02 trường chủ quản là DNTU và HCMUTE nhằm thảo luận các vấn đề về chiến lược hợp tác của 02 đơn vị, kết nối trong lĩnh vực đào tạo và nghiên cứu khoa học trong tương lai.**
![TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường gặp gỡ lãnh đạo Trường Đại học Sư Phạm Kỹ Thuật Thành phố Hồ Chí Minh](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/BO4.jpg)
TS. Phan Ngọc Sơn cũng dành thời gian để thăm hỏi, trao đổi và thảo luận với cựu sinh viên, thực tập sinh của DNTU đang làm việc tại đây. Qua buổi trao đổi ngắn, TS. Phan Ngọc Sơn đã nắm bắt được tâm tư, nguyện vọng của thực tập sinh và cựu sinh viên về chương trình đào tạo, chất lượng đào tạo cũng như cơ sở vật chất nhà trường. Từ đó có những định hướng phát triển đổi mới hơn trong tương lai.
`,
    author: "Mike Johnson",
    date: "21/04/2023",
    image: "https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/BO5.jpg",
  },
  {
    id: 5,
    title: `**# Trường Đại học Công nghệ Đồng Nai tiếp đón và làm việc với GS. Lin Pin - Chuyên gia giáo dục đến từ Đài Loan**`,
    content:
`
Chiều 17/4/2023, Trường Đại học Công nghệ Đồng Nai (DNTU) tiếp đón và làm việc với GS. Lin Pin - Chuyên gia giáo dục đến từ Đài Loan.
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L1.jpg)
Tham dự buổi làm việc:
\n
Về phía Trường Đại học Công nghệ Đồng Nai có:
\n
- TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường
-TS. Trần Đức Thuận - Phó Hiệu trưởng
- NCS. Phan Võ Quỳnh Như - Phó Hiệu trưởng
- TS. Quách An Bình - Trưởng phòng Đào tạo - Khảo thí
- TS. Trần Thanh Đại - Trưởng Khoa Y
- TS. Nguyễn Minh Thiện - Trưởng Khoa Ngoại ngữ
- Th.S Nguyễn Thị Ngọc Phương - Tổ trưởng bộ môn Điều dưỡng
- Th.S Tạ Thị Lê Thu - Tổ trưởng bộ môn tiếng Hoa
\n
Về phía Công ty cổ phần Giáo dục và Tư vấn LV&F có:
\n  
- TS. Nguyễn Thanh Nhân - Chuyên gia
- GS. Lin Pin - Chuyên gia giáo dục đến từ Đài Loan
TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường chia sẻ trong buổi làm việc: “Trường Đại học Công nghệ Đồng Nai luôn nỗ lực nâng cao chất lượng đào tạo và nghiên cứu khoa học theo hướng quốc tế hóa, Nhà trường luôn xác định rõ nguồn nhân lực chính là yếu tố then chốt. Vì vậy, Nhà trường luôn tập trung đầu tư nâng cao chất lượng đội ngũ giảng viên, trong đó có nhiều giảng viên đã và đang học tập tại Đài Loan. Ngoài ra, Nhà trường cũng thu hút các nhà khoa học và chuyên gia hàng đầu về làm việc tại Trường, với nhiều chính sách hấp dẫn. Hy vọng trong thời gian tới, Nhà trường có thể tiếp đón và làm việc với các giáo sư, giảng viên cũng như có thể tổ chức nhiều hội thảo với sự tham gia của các trường Đại học tại Đài Loan đặc biệt là ngành Điều Dưỡng và tiếng Hoa.”
![TS. Phan Ngọc Sơn - Chủ tịch Hội đồng trường chia sẻ trong buổi làm việc](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L2.jpg)
Chương trình làm việc bao gồm các nội dung nổi bật sau:
\n
- **DNTU đề xuất các chương trình đào tạo quốc tế với các đối tác Đài Loan nói chung và Trường Đại học Á Châu (Asia University) nói riêng cho ngành Điều dưỡng và Tiếng  Hoa của Nhà trường.**
- **Hai bên cùng thống nhất đề xuất triển khai các chương trình đào tạo 1+4, 2+2 trong đó sinh viên sẽ tham gia học tập tại Việt Nam 1 năm sau đó sẽ qua Đài Loan để tiếp tục chương trình học. Hoặc sinh viên cũng có thể tham gia chương trình đào tạo song bằng, cùng lúc học tập tại DNTU và Trường Đại học tại Đài Loan.**
- **DNTU đề xuất các chương trình trao đổi, tổ chức các khóa học ngắn hạn về văn hóa và học thuật tại Đài Loan nhằm tạo điều kiện cho giảng viên và sinh viên bước đầu trải nghiệm các nền văn hóa và môi trường học tập mới, hướng đến tổ chức các chuyến đi với thời gian dài hạn hơn;**
Cũng trong buổi làm việc, GS. Lin Pin chia sẻ “ Hiện nay Đài Loan có rất nhiều chính sách thu hút du học sinh quốc tế đến học tập và làm việc tại các bệnh viện trong nước, điều này đảm bảo đầu ra việc làm cho sinh viên ngành Điều dưỡng cũng như nhiều ngành nghề khác sau khi tốt nghiệp. Về chi phí, tùy vào từng chương trình học, sinh viên có thể xin cấp học bổng hoặc có thể làm thêm để chi trả cho khoản sinh hoạt phí tại Đài Loan”.
![GS. Lin Pin - Chuyên gia giáo dục đến từ Đài Loan chia sẻ trong buổi làm việc](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L5.jpg)
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L4.jpg)
Sau buổi gặp mặt, hai bên hi vọng sẽ có những dịp triển khai các chương trình hợp tác như tổ chức hội thảo khoa học, các buổi nói chuyện chuyên đề liên quan đến các lĩnh vực mà các bên cùng quan tâm.
![](https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L3.jpg)
Bên cạnh việc đầu tư vào đội ngũ học thuật, DNTU không ngừng nâng cấp cơ sở vật chất đạt chuẩn quốc tế, ứng dụng công nghệ trong giảng dạy với quyết tâm theo đuổi chiến lược quốc tế hóa, nâng cao chất lượng đào tạo, cung cấp nguồn nhân lực có trình độ quốc tế, đáp ứng tốt thị trường nhân lực chất lượng cao trong và ngoài nước.
`,
    author: "Mike Johnson",
    date: "19/04/2023",
    image: "https://dntu.edu.vn/userfiles/images/bai-viet/04-2023/L1.jpg",
  },
//   {
//     id: 4,
//     title: `**# **`,
//     content:
// `

// `,
//     author: "Mike Johnson",
//     date: "07/08/2022",
//     image: "",
//   },
//   {
//     id: 4,
//     title: `**# **`,
//     content:
// `

// `,
//     author: "Mike Johnson",
//     date: "07/08/2022",
//     image: "",
//   },
//   {
//     id: 4,
//     title: `**# **`,
//     content:
// `

// `,
//     author: "Mike Johnson",
//     date: "07/08/2022",
//     image: "",
//   },
];

const DNTUNewsScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);

  const getCurrentLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  // useEffect(() => {
  //   getCurrentLocationAsync();
  // });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // const handleReloadLocation = () => {
  //   getCurrentLocationAsync();
  // };
  const RenderListItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.list_item_container} onPress={() => navigation.navigate('News', {item:item})}>
        <View style={styles.cover_image_container}>
          <Image
            resizeMode="cover"
            source={{ uri: item.image }}
            style={styles.cover_image}
          />
        </View>
        <View style={styles.news_content_container}>
          <View>
          <Text numberOfLines={3}><MarkFormat text = { item.title } /></Text>
          </View>
          <Text style={styles.news_content} numberOfLines={4}><MarkFormat text = { item.content } /></Text>
          <Text style={styles.date} numberOfLines={1}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.location_block}>
          <View style={styles.location}>
            <View style={styles.temperature_block}>
              {location && (
                <LocationInfo
                  longitude={location.coords.longitude}
                  latitude={location.coords.latitude}
                />
              )}
            </View>
            {/* <TouchableOpacity style={styles.btn_reload_temperature}>
              <Ionicons
                name="reload-circle-outline"
                size={30}
                color={app_c.HEX.fourth}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.main_content}>
            <View style={styles.category}>
              <Text style={styles.category_name}>Tin mới</Text>
              <AntDesign name="right" size={25} />
            </View>
            <View style={styles.item_container}>
              <FlatList
                data={listNews}
                renderItem={({ item }) => <RenderListItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
              />
            </View>
            
          </View>
          <View style={styles.main_content}>
            <View style={styles.category}>
              <Text style={styles.category_name}>Bản tin khác</Text>
              <AntDesign name="right" size={25} />
            </View>
            <View style={styles.item_container}>
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

export default DNTUNewsScreen;
