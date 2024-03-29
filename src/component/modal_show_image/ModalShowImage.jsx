
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, Image, Button ,TouchableOpacity,Dimensions} from 'react-native';
import {AntDesign} from 'react-native-vector-icons'


const ModalShowImage = ({ url }) => {
  const [isImageOpen, setImageOpen] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  console.log(windowHeight)

  const openImage = () => {
    setImageOpen(true);
  };

  const closeImage = () => {
    setImageOpen(false);
  };
  
  const handleImageLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    
    let newWidth = windowWidth * 1;
    let newHeight = newWidth * (height / width);
    
    if (newHeight > windowHeight * 1) {
      newHeight = windowHeight * 1;
      newWidth = newHeight * (width / height);
    }
    
    setImageSize({ width: newWidth, height: newHeight });
  };


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={openImage}>
        <View style={{width:'100%'}}>
          <Image
            source={{ uri: url }}
            style={[styles.logo]}
            onLayout={handleImageLayout}
            resizeMode='contain'
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal transparent visible={isImageOpen}>
        <TouchableWithoutFeedback onPress={closeImage}>
          <View style={styles.modal}>
            <Image
              source={{ uri: url }}
              style={[styles.fullLogo, imageSize,{width:windowWidth}]}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={closeImage} style={{width:40,height:40,position:'absolute',top:45,right:15}} ><AntDesign name="close" size={35} style={styles.btn_close}/></TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
    height:230
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0,0, 1)',
  },
  fullLogo: {
    marginTop:40
  },
  btn_close:{
    color:'#ffff'
  }
});

export default ModalShowImage;
