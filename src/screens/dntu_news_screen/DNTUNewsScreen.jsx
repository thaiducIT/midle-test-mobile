import React,{useState,useEffect} from "react";
import { View } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import styles from "./DNTUNewsScreenStyles";
import ModalShowImage from "@component/modal_show_image/ModalShowImage"

const images='https://i.redd.it/w721qxx92w021.png'

const DNTUNewsScreen = () => {
  const[image,SetImage]=useState(images)

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  
      <ModalShowImage url={image}  />
    </Layout>
  );
};

export default DNTUNewsScreen;
