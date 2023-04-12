import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./LocationInfoStyle";
import { EvilIcons, FontAwesome,FontAwesome5 } from "react-native-vector-icons";
import { app_c, app_sp, app_typo } from "@assets/globals/styles";

const weatherConditions = {
  'clear sky': 'Trời nắng chói như nụ cười của Em',
  'few clouds': 'Ít mây nhưng mà yêu Em',
  'scattered clouds': 'Trời âm u kiểu thiếu Em',
  'broken clouds': 'Mây tan hoang',
  'shower rain': 'Mưa rào',
  'rain': 'Mưa',
  'thunderstorm': 'Dông tố bảo bùng như đời chị Dậu',
  'snow': 'Tuyết rơi',
  'mist': 'Sương mù',
  'overcast clouds' : 'Mây trời u ám, kiểu thiếu Em'
};

const LocationInfo = ({ latitude, longitude }) => {
  const [location, setLocation] = useState(null);
  const [temp, setTemp] = useState(null);
  const [win,setWin] = useState(null)
  const [condition,setCondition] = useState(null)
  // const API_KEY = '795b1a0c197fe09b2e9953455311dfea';
  // const CITY = location;
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
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
  },[]);

  console.log(location)
  console.log(longitude)
  console.log(latitude)

  useEffect(() => {
    const API_KEY = '795b1a0c197fe09b2e9953455311dfea';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
    setTemp(data.main.temp.toFixed(0));
    setWin(data.wind.speed)
    setCondition(data.weather[0].description)
    })
    .catch(error => {
    console.error(error);
    });
    }, []);

    const translateWeatherCondition = (condition) => {
      if (weatherConditions.hasOwnProperty(condition)) {
        return weatherConditions[condition];
      } else {
        return condition;
      }
    };
    const vietnameseCondition = translateWeatherCondition(condition)
  return (
    <View>
      <View style={{width:'100%'}}>
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
          <View style={{flexDirection:'row',width:'30%',justifyContent:'space-around'}}>
            {temp !== null && <View>
              <Text style={{ ...styles.temperature_cur }}>
                {Math.round(temp - 273)}°C
              </Text>
              <Text style={{ ...styles.temperature_cur }}>
                {(temp -273) * (9/5) + 32}°F
              </Text>
            </View>}
          
          </View>
          <View style={{width:'70%'}}>
            <View style={{...styles.temperature_other_curr}}>
              
              {win !== null &&(<Text style={{...styles.temperature_other_curr_value}}><FontAwesome5 name="wind" size={15} color={app_c.HEX.fourth}/> {win} Km/h</Text>)}
            </View>
            <View style={{...styles.temperature_other_curr}}>
              
              {condition !== null &&(<Text numberOfLines={0} style={{...styles.temperature_other_curr_value}}><FontAwesome5 name="cloud-rain" size={15} color={app_c.HEX.fourth}/> {vietnameseCondition}</Text>)}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationInfo;
