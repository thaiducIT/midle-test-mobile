import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image,ScrollView,Platform,FlatList} from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as Location from "expo-location";

import styles from "./DNTUNewsScreenStyles";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { app_c } from "../../../assets/globals/styles";


import ModalShowImage from "@component/modal_show_image/ModalShowImage";
import LocationInfo from "@component/location_info/LocationInfo";
import RectangleButton from "@component/retangle_button/RetangleButton";
import RenderItem from "@component/render_item/RenderItem";

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
    isNew:true,
    isImportant:false,
    isPopular:false
  },
  {
    id: 2,
    title: "Global Demand for Renewable Energy on the Rise",
    content:
      "As concerns over climate change continue to grow, the demand for renewable energy sources such as solar and wind power is increasing worldwide. Experts predict that this trend will continue to accelerate in the coming years.",
    author: "John Doe",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/phucuong.jpg",
    isNew:true,
    isImportant:false,
    isPopular:false
  },
  {
    id: 3,
    title: "New Vaccine Shows Promise Against Deadly Virus",
    content:
      "Scientists have developed a new vaccine that appears to be effective against a deadly virus that has been spreading rapidly in recent years. Clinical trials have shown promising results, with the vaccine producing a strong immune response in participants.",
    author: "Samantha Lee",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/cowsoso%20vatchat.jpg",
    isNew:false,
    isImportant:false,
    isPopular:false
  },
  {
    id: 4,
    title: "Local Restaurant Wins Award for Best Burger",
    content:
      "A popular restaurant in town has won an award for their delicious burger, which features a unique blend of spices and seasonings. Customers have been raving about the burger, and the restaurant is thrilled to receive this recognition.",
    author: "Mike Johnson",
    date: "07/08/2022",
    image: "https://dntu.edu.vn/Data/News/120/images/chuphinhluuniem.jpg",
    isNew:false,
    isImportant:false,
    isPopular:false
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
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.main_content}>
            <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Latest News')}>
              <Text style={styles.category_name}>Tin mới</Text>
              <AntDesign name="right" size={25} />
            </TouchableOpacity>
            <View style={styles.item_container}>
              <FlatList
                data={listNews}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
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
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DNTUNewsScreen;
