import { StyleSheet } from "react-native";
import { app_c, app_sh, app_sp, app_typo } from "@assets/globals/styles"

const styles = StyleSheet.create({
  text: {
    color: app_c.HEX.sub_third
  },
  location_block: { 

    backgroundColor: '#F9F7F7' 
  },
  location: {
    paddingHorizontal: 16,
    height: 110,
    alignItems: 'center',
    flexDirection: 'row',
  },
  temperature_block: {
    width:270,
  },
  btn_reload_temperature: {
    width: 50,
    height: 50,
    backgroundColor: "#ECECEC",
    ...app_sh.rounded_6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
    marginLeft:22
  },
  // main
  main:{
    paddingHorizontal:16,
    ...app_sp.mt_8,
    backgroundColor:'#F9F7F7'
    
  },
  category:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:8,
    paddingBottom:4
  },
  category_name:{
    ...app_typo.size.sz_22,
    fontWeight:'700',
  },
  // item
  list_item_container:{
    flexDirection:'row',
    height:152,
    marginBottom:25,
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
  item_container:{
    ...app_sp.pt_8
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
  cover_image_container:{
    flex:4.5,
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