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
    paddingBottom:8,

  },
  category_name:{
    ...app_typo.size.sz_22,
    fontWeight:'700',
  },
  // item
  
  item_container:{
    ...app_sp.pt_8
  },



  cover_image_container:{
    flex:4.5,
  },


})

export default styles