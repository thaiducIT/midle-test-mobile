import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailNewsScreen from "@screens/detail_news_screen/DetailNewsScreen";
import DNTUNewsScreen from "@screens/dntu_news_screen/DNTUNewsScreen";
import ListNewScreen from "@screens/list_new_screen/ListNewScreen";

const DNTUNewsStack = createNativeStackNavigator();

const DNTUNewsNavigation = () => {
  return (
    <DNTUNewsStack.Navigator    >
      <DNTUNewsStack.Screen name="DNTU News" >
      {(props) => <DNTUNewsScreen {...props} />}
      </DNTUNewsStack.Screen>
      <DNTUNewsStack.Screen name="News">
      {(props) => <DetailNewsScreen {...props} />}
      </DNTUNewsStack.Screen>
      <DNTUNewsStack.Screen name="Latest News">
      {(props) => <ListNewScreen {...props} />}
      </DNTUNewsStack.Screen>
    </DNTUNewsStack.Navigator>
  );
};

export default DNTUNewsNavigation;
