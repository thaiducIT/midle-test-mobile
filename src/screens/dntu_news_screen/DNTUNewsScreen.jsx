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


const listNews = [
  {
    id: 1,
    title: "New Study Shows Benefits of Yogurt",
    content: `\n# LỊCH TRÌNH DU LỊCH ĐỒNG NAI
    Chào mừng đến Đồng Nai - một nơi kết hợp giữa lịch sử, nghệ thuật, ẩm thực và cảnh quan đẹp. Dưới đây là lịch trình của chúng tôi cho chuyến đi của bạn với ngân sách là **5 triệu đồng** và bạn muốn một kỳ nghỉ đôi. Hãy sẵn sàng cho một chuyến đi tuyệt vời và đáng nhớ!
    
    ## Ngày 1: Khám phá thành phố Biên Hòa
    ### Trùng Khánh Memorial House
    
    - Địa chỉ: 168T Trần Hưng Đạo, Phường Tân Tiến, Biên Hòa
    - Giá vé: miễn phí\n- Giờ tham quan: 8:00 sáng - 5:00 chiều
    [>r] Trùng Khánh Memorial House nằm tại trung tâm thành phố Biên Hòa với kiến trúc phương Tây kết hợp với kiểu Nhật, tọa lạc trong khuôn viên rộng và yên tĩnh. **Nơi đây bao gồm một __bảo tàng__ với các tài liệu, hiện vật** về Trần Trọng Kim - người sáng lập ra Đài Truyền hình Việt Nam và một nhà văn, kịch tác tài ba.
    
    ### Công Viên Văn Hóa Đồng Nai\n\n- Địa chỉ: Số 13 đường Phan Chu Trinh, Phường Tân Phong, Biên Hòa
    - Giá vé: miễn phí\n- Giờ tham quan: 6:00 sáng - 9:00 tối
    
    Công Viên Văn Hóa Đồng Nai là một công viên rộng lớn với những cảnh quan đẹp, dường như được thiết kế để thu hút các tín đồ của nghệ thuật và giải trí. Nơi đây cũng là nơi diễn ra các hoạt động văn hóa cho địa phương và các sự kiện giải trí hàng năm.
    
    ### Ăn tối tại Chợ Bến Thành
    
    - Địa chỉ: 150-152 Lê Duẩn, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
    - Giá vé: từ 100.000 đồng - 200.000 đồng
    - Thời gian hoạt động: 6:00 sáng - 10:00 tối
    
    Chợ Bến Thành là một nơi không thể bỏ qua khi đến Sài Gòn, nơi bạn có thể thưởng thức hơn 300 loại đặc sản, các món ăn đường phố và những món ăn truyền thống của Nam Bộ. Đây là nơi lý tưởng cho bữa tối đầu tiên của bạn tại Đồng Nai!\n\n## Ngày 2: Tham quan các điểm đến ngoài trời\n\n### Thiên Đường Thác Bà Đôn\n\n- Địa chỉ: Phường Tân Tiến, Thành phố Biên Hòa\n- Giá vé: 25.000 đồng - 30.000 đồng\n- Giờ tham quan: 8:00 sáng - 5:00 chiều\n\nThác Bà Đôn là một trong những điểm du lịch nổi tiếng tại Đồng Nai, thu hút khách du lịch với giai điệu nhạc nước và những thước phim nước đang chảy. Bạn có thể dạo bộ trên cây cầu xoắn thắt, quan sát thác nước và tìm hiểu sự sống động của đặc sản địa phương.\n\n### Công viên Sơn Tiên\n\n- Địa chỉ: Khu đại lộ Võ Thị Sáu, Phường Tân Phong, TP. Bạn có thể tìm hiểu về lịch sử của thành phố và địa phương này thông qua các hiện vật và trưng bày tại đây.\n\n### Ăn tối tại Nhà hàng Thúy Nga\n\n- Địa chỉ: 180-182 Phạm Văn Thuận, Phường Tân Mai, TP. Biên Hòa \n- Giá vé: từ 200.000 đồng - 350.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nNhà hàng Thúy Nga có không gian sang trọng và menu đa dạng với nhiều món ăn đặc sản và các món ăn được làm từ đặc sản của địa phương.\n\n## Ngày 4: Hưởng thụ nghệ thuật và giải trí\n\n### Sân vận động Thống Nhất\n\n- Địa chỉ: Đường Lê Đức Thọ, Phường Phú Hữu, Quận 9, TP. Hồ Chí Minh\n- Giá vé: từ 50.000 đồng - 200.000 đồng\n- Giờ hoạt động: cả ngày\n\nNếu bạn muốn tham gia một trận bóng đá, đây là nơi lý tưởng để trải nghiệm. Sân vận động Thống Nhất là sân nhà của đội tuyển bóng đá quốc gia Việt Nam và cũng là nơi tổ chức các trận đấu quan trọng của giải bóng đá quốc gia.\n\n### Bảo tàng Mỹ thuật Đông Nam Á\n\n- Địa chỉ: số 7 Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh\n- Giá vé: từ 50.000 đồng - 100.000 đồng\n- Giờ tham quan: 9:00 sáng - 5:00 chiều\n\nBảo tàng Mỹ thuật Đông Nam Á hiện có hơn 20.000 tác phẩm của hơn 3.000 nghệ sĩ từ Đông Nam Á và các quốc gia khác. Bạn có thể ngắm nhìn những kiệt tác của nghệ thuật của Đông Nam Á và cảm nhận không gian nghệ thuật độc đáo.\n\n### Câu lạc bộ Thăng Long\n\n- Địa chỉ: số 74 Đỗ Quang, Phường Cống Vị, Quận Ba Đình, TP. Hà Nội\n- Giá vé: từ 50.000 đồng - 200.000 đồng\n- Giờ hoạt động: 9:00 sáng - 10:00 tối\n\nCâu lạc bộ Thăng Long là một nơi tuyệt vời để thưởng thức các bộ phim mình yêu thích, tập trung vào những bộ phim độc đáo, kinh điển của điện ảnh trong nước và nước ngoài. Nơi đây có một quầy bar và các hoạt động giải trí khác để bạn thư giãn sau khi xem phim.\n\n### Ăn tối tại Quán Ăn Người Làm Phim\n\n- Địa chỉ: 74 Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, TP.Hà Nội \n- Giá vé: từ 100.000 đồng - 300.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nQuán Ăn Người Làm Phim là một nhà hàng với thiết kế độc đáo, tôn vinh nghệ thuật điện ảnh, với món ăn ngon và giá cả hợp lý.\n\n## Ngày 5: Tận hưởng cuối tuần tuyệt vời\n\n### Khu Du lịch Thác Giang Điền\n\n- Địa chỉ: Xã Phú Lý, Huyện Vĩnh Cửu, Đồng Nai\n- Giá vé: 50.000 đồng - 100.000 đồng\n- Giờ tham quan: 7:00 sáng - 5:30 chiều\n\nKhu Du lịch Thác Giang Điền nằm trong khu rừng Ngầm, với nhiều thác nước đẹp và các khu vườn hoa được bố trí đẹp mắt. Bạn có thể khám phá các khu vườn, thưởng thức đặc sản và tham gia các trò chơi dân gian.\n\n### Chợ Bàu Sen\n\n- Địa chỉ: thị trấn Bến Cát, Huyện Bến Cát, Tỉnh Bình Dương\n- Giá vé: miễn phí\n- Giờ tham quan: 7:00 sáng - 12:00 trưa\n\nChợ Bàu Sen là một chợ nổi tiếng với các loại hàng hoá đa dạng, bao gồm thực phẩm, quần áo, giày dép và đồ dùng gia đình. Bạn có thể tìm mua các món ăn đặc sản và đồ lưu niệm cho những người thân yêu.\n\n### Ăn tối tại Nhà hàng Phố Cổ\n\n- Địa chỉ: 20 Đào Duy Từ, Phường Hàng Buồm, Quận Hoàn Kiếm, TP. Hà Nội \n- Giá vé: từ 200.000 đồng - 400.000 đồng\n- Giờ hoạt động: 10:00 sáng - 10:00 tối\n\nNhà hàng Phố Cổ nằm ở trung tâm Hà Nội, với kiến trúc cổ điển và tinh tế. Nơi đây có các món ăn đặc sản phong phú, đa dạng từ đủ các vùng miền của Việt Nam.\n\n## Tổng kết\n\nĐó là lịch trình của chúng tôi cho chuyến đi tới Đồng Nai, hy vọng rằng bạn sẽ tận dụng hết ngày nghỉ của mình để khám phá được nhiều địa điểm mới lạ, trải nghiệm ẩm thực, tận hưởng không gian thiên nhiên, và tham gia các hoạt động giải trí thú vị. Chúc bạn có một chuyến đi đáng nhớ!\n`,
    author: "Jane Smith",
    date: "07/08/2022",
    image:
      "https://dntu.edu.vn/images/resized/dang-ky-hien-mau-tinh-nguyen-lan-2-nam-hoc-2022-2023.jpg",
  },
  {
    id: 2,
    title: "Global Demand for Renewable Energy on the Rise",
    content:
      "As concerns over climate change continue to grow, the demand for renewable energy sources such as solar and wind power is increasing worldwide. Experts predict that this trend will continue to accelerate in the coming years.",
    author: "John Doe",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/phucuong.jpg",
  },
  {
    id: 3,
    title: "New Vaccine Shows Promise Against Deadly Virus",
    content:
      "Scientists have developed a new vaccine that appears to be effective against a deadly virus that has been spreading rapidly in recent years. Clinical trials have shown promising results, with the vaccine producing a strong immune response in participants.",
    author: "Samantha Lee",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/cowsoso%20vatchat.jpg",
  },
  {
    id: 4,
    title: "Local Restaurant Wins Award for Best Burger",
    content:
      "A popular restaurant in town has won an award for their delicious burger, which features a unique blend of spices and seasonings. Customers have been raving about the burger, and the restaurant is thrilled to receive this recognition.",
    author: "Mike Johnson",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/chuphinhluuniem.jpg",
  },
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
          <Text style={styles.news_title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.news_content} numberOfLines={4}>{item.content}</Text>
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
