import { Linking, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import RenderHtml from 'react-native-render-html';

const DetailStudentNewsScreen = ({route}) => {
const {item} = route.params
console.log(item)
const { width } = useWindowDimensions();
  return (
    <ScrollView>
        <View style={{paddingHorizontal:16}}>
            <Text style = {[styles.text_bold,styles.title]}>{item.title}</Text>
            <RenderHtml
            contentWidth={width}
            source={item.content}
            tagsStyles={item.mixedStyles}
            />
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