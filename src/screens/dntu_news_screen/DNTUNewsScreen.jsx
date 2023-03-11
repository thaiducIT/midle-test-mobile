import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as Location from "expo-location";

import styles from "./DNTUNewsScreenStyles";
import ModalShowImage from "@component/modal_show_image/ModalShowImage";
import LocationInfo from "@component/location_info/LocationInfo";
import { Ionicons } from "react-native-vector-icons";
import { app_c } from "@assets/globals/styles";

const DNTUNewsScreen = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getCurrentLocationAsync();
  });
  
  const handleReloadLocation = () => {
    getCurrentLocationAsync();
  };

  return (
    <Layout style={{ flex: 1 }}>
      <View style={styles.location_block}>
        <View style={styles.location}>
          <View style={styles.temperature_block}>
            {location && (
              <LocationInfo
                longitude={location.coords.longitude}
                latitude={location.coords.latitude}
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.btn_reload_temperature}
            onPress={handleReloadLocation()}
          >
            <Ionicons
              name="reload-circle-outline"
              size={30}
              color={app_c.HEX.fourth}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default DNTUNewsScreen;
