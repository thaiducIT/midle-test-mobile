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
    content:
      "A new study has found that eating yogurt can improve gut health and boost overall immunity. Researchers believe that the probiotics in yogurt help to support beneficial gut bacteria.",
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

  useEffect(() => {
    getCurrentLocationAsync();
  });
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

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
