import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StudentNewsScreen from "@screens/student_news_screen/StudentNewsScreen";
import DetailStudentNewsScreen from "@screens/detail_notic_screen/DetailStudentNewsScreen";

const StudentNewsStack = createNativeStackNavigator();

const StudentNewsNavigation = () => {
  return (
    <StudentNewsStack.Navigator
      initialRouteName="SettingScreen"
    >
      <StudentNewsStack.Screen name="Student Notificate" >
      {(props) => <StudentNewsScreen {...props} />}
      </StudentNewsStack.Screen>
      <StudentNewsStack.Screen name="News">
      {(props) => <DetailStudentNewsScreen {...props} />}
      </StudentNewsStack.Screen>
    </StudentNewsStack.Navigator>
  );
};

export default StudentNewsNavigation;
