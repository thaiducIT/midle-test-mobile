import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SettingScreen from "../../screens/settings_screen/SettingsScreen";
import DNTUNewsScreen from "../../screens/home_screen/HomeScreen";
import StudentNewsScreen from "../../screens/dntu_news_screen/DNTUNewsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "DNTU News") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if(route.name==="Student News")
            {
              iconName= focused ? "ios-newspaper":"newspaper-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}>
        <Tab.Screen  name="DNTU News" component={DNTUNewsScreen} />
        <Tab.Screen name="Student News" component={StudentNewsScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
