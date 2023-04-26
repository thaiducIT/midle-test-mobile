import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./RenderIItemStyle";
import { useNavigation } from "@react-navigation/native";
import { AntDesign} from 'react-native-vector-icons'
import { useSelector, useDispatch } from 'react-redux';
import { saveArticle } from "../../../redux/warehouse/warehouseSlice";
import { selectCurrentSavedPost } from "../../../redux/warehouse/warehouseSlice";

import { app_c } from "@assets/globals/styles";
const RenderItem = ({ item }) => {
  const savedArticles = useSelector(state => state.savedArticles);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [ liked , setLiked ] = useState(false)

  const handleLikeBtn = ()=>{
    setLiked(!liked)
    dispatch(saveArticle(item.id));
  }
  console.log('like:'+liked)

  console.log(savedArticles)

  return (
    <TouchableOpacity
      style={styles.list_item_container}
      onPress={() => navigation.navigate("News", { item: item })}
    >
      <View style={styles.cover_image_container}>
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          style={styles.cover_image}
        />
      </View>
      <View style={styles.news_content_container}>
        <View style={styles.new_content_header}>
          <Text style={styles.news_title} numberOfLines={2}>
            {item.title}
          </Text>
          <TouchableOpacity style={styles.btn_like} onPress={handleLikeBtn}>
            {
              !liked ?  <AntDesign name="hearto" size={18} color={app_c.HEX.fourth}/> : <AntDesign name="heart" size={18} color={app_c.HEX.fourth}/> 
            }
           
          </TouchableOpacity>
        </View>
        <Text style={styles.news_content} numberOfLines={4}>
          {item.content}
        </Text>
        <Text style={styles.date} numberOfLines={1}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;
