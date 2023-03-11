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
  }
})

export default styles