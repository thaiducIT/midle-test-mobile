import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./LocationInfoStyle";
import { EvilIcons, FontAwesome,FontAwesome5 } from "react-native-vector-icons";
import { app_c, app_sp, app_typo } from "@assets/globals/styles";

const LocationInfo = ({ latitude, longitude }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setLocation(responseJson);
      })
      .catch((error) => {
        setLocation({ error: error });
      });
  }, []);

  return (
    <View>
      <View>
        <View style={styles.location_block}>
          <View>
            <EvilIcons name="location" size={30} color={'red'}/>
          </View>
          {location ? (
            <View style={styles.location}>
              <Text style={styles.location_name}>
                {location.address.city || location.address.town}
              </Text>
            </View>
          ) : (
            <Text style={{color:'red',...app_typo.size.sz_16,fontWeight:'400'}}>Loading Your Location ...</Text>
          )}
        </View>
          <View style={styles.temperature}>
            <View style={{flexDirection:'row',width:'50%',justifyContent:'space-around'}}>
              <Text style={{ ...styles.temperature_cur }}>
                30 <FontAwesome name="thermometer-0" /> C
              </Text>
             <Text style={{ ...styles.temperature_cur }}>
                86 <FontAwesome name="thermometer-0" /> F
              </Text>
            </View>
            <View style={styles.temperature_other}>
              <View style={{...styles.temperature_other_curr}}>
                <FontAwesome5 name="wind" size={15} color={app_c.HEX.fourth}/>
                <Text style={{...styles.temperature_other_curr_value}}>15 Km/h</Text>
              </View>
              <View style={{...styles.temperature_other_curr}}>
                <FontAwesome5 name="cloud-rain" size={15} color={app_c.HEX.fourth}/>
                <Text style={{...styles.temperature_other_curr_value}}> Rain</Text>
              </View>
            </View>
          </View>
      </View>
      <View>
        
      </View>
    </View>
  );
};

export default LocationInfo;
