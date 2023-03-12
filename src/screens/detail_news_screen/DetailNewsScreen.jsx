import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const DetailNewsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>COVID-19 Vaccines: What You Need to Know</Text>
        <Image
          source={require('../../../assets/image/covid19.jpg')}
          style={styles.image}
        />
        <Text style={styles.author}>By John Smith</Text>
        <Text style={styles.date}>March 12, 2023</Text>
        <Text style={styles.content}>
          The COVID-19 pandemic has been a global health crisis that has affected millions of people worldwide. The development of vaccines has been a significant breakthrough in the fight against the virus. With the availability of several vaccines, many people are wondering about their effectiveness, safety, and side effects.
  
          Here is what you need to know about COVID-19 vaccines:
  
          1. Types of Vaccines: Currently, there are three types of COVID-19 vaccines...
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
    height: 200,
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
