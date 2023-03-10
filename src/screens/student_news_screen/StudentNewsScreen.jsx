import React from 'react';
import { View } from 'react-native';
import * as eva from "@eva-design/eva"
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";


const StudentNewsScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Student News</Text>
    </Layout>
  );
};

export default StudentNewsScreen;
