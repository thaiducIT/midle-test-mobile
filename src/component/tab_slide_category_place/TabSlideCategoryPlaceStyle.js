import { app_c,app_sp, app_typo } from "@assets/globals/styles";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
  tab:{
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: app_c.HEX.ext_primary,
    
  },
  active:{
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor:app_c.HEX.fourth,
   
  },
  text_active:{
    color:'#fff',
    fontSize:14,
    fontWeight:700
  },
  text_normal:{
    color:app_c.HEX.fourth,
    fontSize:14,
    fontWeight:700
  },
  header:{
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header_title:{
    fontSize:25,
    fontWeight:'700',
    color:app_c.HEX.fourth,
    marginLeft:6
  },
  option_time:{
    backgroundColor:app_c.HEX.sub_fourth,
    paddingHorizontal:20,
    paddingVertical:12,
    borderRadius:8
  },
  option_time_name:{
    color:app_c.HEX.ext_primary,
    fontWeight:'700'
  }
})

export default styles