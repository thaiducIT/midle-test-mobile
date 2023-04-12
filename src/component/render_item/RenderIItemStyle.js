import { StyleSheet } from "react-native";
import { app_c, app_sh, app_sp, app_typo } from "@assets/globals/styles"

const styles=StyleSheet.create({
  list_item_container:{
    flexDirection:'row',
    height:152,
    marginBottom:12,
    flex:1,
    padding:8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    // elevation property for Android
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
  cover_image_container:{
    flex:4.5,
  },
  cover_image:{
    width:141,
    height:133
  },
  news_content_container:{
    marginLeft:8,
    flex:5.5
  },
  news_title:{
    color:app_c.HEX.fourth,
    ...app_typo.size.sz_16,
    fontWeight:'600'
  },
  news_content:{
    ...app_sp.mt_6
  },
  date:{
    paddingTop:12,
    position:'absolute',
    bottom:0,
    left:0,
    color:'red',
    fontWeight:'600',
    fontSize:13
  }
})

export default styles