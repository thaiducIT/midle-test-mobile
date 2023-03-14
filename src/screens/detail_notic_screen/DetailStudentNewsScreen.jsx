import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const DetailStudentNewsScreen = ({route}) => {
    const {item} =route.params
  return (
    <ScrollView>
        <View style={{paddingHorizontal:16}}>
            <Text style = {[styles.text_bold,styles.title]}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text onPress={()=>Linking.openURL(item.url)}>{item.url}</Text>
        </View>
    </ScrollView>
  )
}

export default DetailStudentNewsScreen

const styles = StyleSheet.create({
    text_bold:{
        fontWeight:'700',
        fontSize:15,
        marginBottom:5
    },
    title:{
        fontSize:25,
        marginTop:50,
        marginBottom:20
    },
    text1:{
        marginLeft:20,
        marginBottom:15
    },
    mg_bottom:{
        marginBottom:20
    }
})