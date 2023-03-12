import { app_c, app_sh, app_shdw, app_sp, app_typo } from "@assets/globals/styles";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  location_block: {
    flexDirection: "row",
    alignItems: "center",
    ...app_sp.pt_12,
 
  },
  location_name:{
    ...app_typo.size.sz_16,
    fontWeight:'bold',
    color:app_c.HEX.fourth
  },
  temperature:{
    flexDirection:'row',
    width:280,
    height:50,
    alignItems:'center',
    justifyContent:'space-around',
    // backgroundColor:"#ECECEC",
    ...app_sh.rounded_6,
    ...app_sp.mt_6
  },
  temperature_cur:{
    ...app_typo.size.sz_18,
    fontWeight:'900',
    color:app_c.HEX.fourth
  },
  temperature_other_curr:{
    flexDirection:'row',
    paddingVertical:3
  },
  temperature_other_curr_value:{
    color:app_c.HEX.fourth,
    ...app_typo.size.sz_14,
    fontWeight:'600'
  }
})
export default styles