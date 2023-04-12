 import { View, Text, TouchableOpacity, FlatList, ScrollView,Button} from "react-native";
import React, { useState, useEffect } from "react";
import {Entypo ,Ionicons} from 'react-native-vector-icons'

import { app_c,app_sp, app_typo } from "@assets/globals/styles";
import styles from "./TabSlideCategoryPlaceStyle";
import { useNavigation } from "@react-navigation/native";
import tabOptions from "@src/api/Category";
import NewsDntu from "@src/api/NewsDntu";
import RenderItem from "@component/render_item/RenderItem";
import { SectionList } from "react-native";
import OptionView from "@component/option_view/OptionView";



const TabSlideCategoryPlace = () => {
  const [tab, setTab] = useState(tabOptions[0]);
  const [post, setPost] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isLatestToOldest, setIsLatestToOldest] = useState(true);


  const handlePressTab = ({ tab }) => {
    setTab(tab);
    setSelectedId(tab.id);
    console.log(tab.name);
  };
  console.log(selectedId);

  useEffect(() => {
    if(tab.id == 0 )
    {
      const filterCategoryItem=NewsDntu.map(news=>news)
      setPost(filterCategoryItem)
    }
    else{
      const filterCategoryItem=NewsDntu.filter((news)=>news.categoryId===selectedId)
      setPost(filterCategoryItem)
    }
    
  }, [selectedId]);

  const getButtonStyle = (buttonId) => {
    if (buttonId === selectedId) {
      return styles.active;
    }
    return styles.tab;
  };

  const colorText = (buttonId) =>{
    if(buttonId ===selectedId)
    {
      return styles.text_active
    }
    return styles.text_normal
  }

  // sắp xếp theo thời gian
  const toggleOrder = () => setIsLatestToOldest(!isLatestToOldest);

  const sortedData = [...post].sort((a, b) => {
    if (isLatestToOldest) {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  console.log(post)

  return (
    <View>
      <View style={styles.header}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons name='options-outline' size={40}/>
          <Text style={styles.header_title}>Lựa Chọn</Text>
        </View>
        <TouchableOpacity style={styles.option_time} onPress={toggleOrder}><Text style={styles.option_time_name}>
          {isLatestToOldest ? <Text>Mới nhất đến cũ <Entypo size={20} name="chevron-down"/></Text>:<Text>Cũ nhất đến mới <Entypo size={20} name="chevron-up"/></Text> }</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flexDirection: "row" ,paddingTop:12}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabOptions.map((tab, index) => {
          return (
            <TouchableOpacity
              style={[getButtonStyle(tab.id),{  marginLeft: index !== 0 ? 10 : 0,}]}
              key={tab.id}
              onPress={() => handlePressTab({ tab })}
            >
              <Text style={colorText(tab.id)}>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
        <View style={{paddingTop:22}}>
          <FlatList
          data={sortedData}
          renderItem={({item})=><RenderItem item={item}/>}
          keyExtractor={(item)=>item.id}
          />
        </View>
    </View>
  );
};

export default TabSlideCategoryPlace;
