import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import DNTUNewsScreen from "@screens/dntu_news_screen/DNTUNewsScreen";
import SettingScreen from "@screens/settings_screen/SettingsScreen";
import StudentNewsScreen from "@screens/student_news_screen/StudentNewsScreen";
import DNTUNewsNavigation from "@navigation/dntu_news_navigation/DNTUNewsNavigation";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          
          tabBarLabelStyle:{
            fontSize:12,
            paddingBottom:4
          },
          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "DNTU") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Student News") {
              iconName = focused ? "ios-newspaper" : "newspaper-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="DNTU" component={DNTUNewsNavigation} />
        <Tab.Screen name="Student News" component={StudentNewsScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
