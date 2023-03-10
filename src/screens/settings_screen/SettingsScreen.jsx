import React, {useState} from "react";
import * as eva from "@eva-design/eva";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { Layout, Text } from "@ui-kitten/components";


const SettingScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting</Text>
    </Layout>
  );
};

export default SettingScreen;
