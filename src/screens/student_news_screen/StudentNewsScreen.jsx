import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as eva from "@eva-design/eva"
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import styles from './StudenNewsScreenStyle';

const listNews = [
  {
    id: '1',
    title: "Thông báo về việc đóng học phí học kỳ III khóa 15, khóa 18 học kỳ II năm học 2022-2023",
    day: '11',
    monthyear: '03/2023',
    content:{
    html:
      `
      <p class='title'>
         Hello World!
      </p>
      `
    },
    mixedStyles:`{
      p:{
        font-size:25
      }
    }`
  },
  {
    id: '2',
    title: "Đóng học phí qua tài khoản của ngân hàng",
    day: '10',
    monthyear: '03/2023',
    content: ``,
  },
  {
    id: '3',
    title: "Thông báo về việc rà soát tiến độ học và thi các môn kỹ năng",
    day: '02',
    monthyear: '03/2023',
    content: ``,
  },
  {
    id: '4',
    title: "Thông báo về việc mở lớp học lại và cải thiện",
    day: '01',
    monthyear: '03/2023',
    content: ``,
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
          <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
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
