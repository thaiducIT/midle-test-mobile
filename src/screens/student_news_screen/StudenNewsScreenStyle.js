import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#F9F7F7',
        paddingHorizontal:16,
    },
    category:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:8,
        paddingBottom:4,
        marginBottom:20
      },
      category_name:{
        fontWeight:'700',
        fontSize:20
      },
      list_container:{
        flexDirection:'row',
        height:130,
        marginBottom:25,
        flex:1,
        padding:8,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
      },
      date_container:{
        flex: 3.5,
        backgroundColor:'white',
        borderRightWidth:2,
        marginRight:10,
      },
      date:{
        height:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      },
      day:{
        fontSize:50,
        fontWeight:700,
        color:'tomato',
      },
      line:{
        borderBottomWidth:3,
        paddingHorizontal:20,
        marginBottom:10,
        borderBottomColor:'tomato'
      },
      monthyear:{
        fontSize:18,
        fontWeight:600
      },
      title_container:{
        flex:6.5,
      },
      title:{
        fontSize:18,
        paddingTop:10,
        fontWeight:700
      }


})
export default styles