import { Linking, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MarkFormat } from '@libs/mark-format/react-native';

const DetailStudentNewsScreen = ({route}) => {
const {item} = route.params
  return (
    <ScrollView>
        <View style={{paddingHorizontal:16}}>
            <MarkFormat text={ item.title} />
            <MarkFormat text={ item.content } />
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