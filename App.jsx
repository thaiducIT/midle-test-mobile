import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import store from "./redux/store";
import { Provider } from "react-redux";

import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "@ui-kitten/components";
import {
  mapping,
  light as lightTheme,
  dark as darkTheme,
} from "@eva-design/eva";

import BottomTabNavigator from "@navigation/bottom_tab_navigation/BottomTabNavigation";

import SplashScreen from "@screens/splash_screen/SplashScreen";
import { VirtualizedList } from "react-native";
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'Roboto-Bold': require('@assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('@assets/fonts/Roboto-BoldItalic.ttf'),
   
  });
}

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    loadFonts()
  })
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={theme === "light" ? lightTheme : darkTheme}
      >
        {isVisible ? <SplashScreen /> : <BottomTabNavigator />}
      </ApplicationProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#222B45",
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default App;
