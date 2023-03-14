import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import ModalShowImage from '@component/modal_show_image/ModalShowImage';

const DetailNewsScreen = ({route}) => {
  const {item} = route.params
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <ModalShowImage url={item.image}/>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.content}>
          {item.content}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  date: {
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default DetailNewsScreen;
