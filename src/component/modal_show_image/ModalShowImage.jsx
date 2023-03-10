import { app_c, app_sh, app_sp } from '@assets/globals/styles';
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View, Image, Button ,TouchableOpacity,Dimensions} from 'react-native';
import {AntDesign} from 'react-native-vector-icons'


const ModalShowImage = ({ url }) => {
  const [isImageOpen, setImageOpen] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


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
    
    if (newHeight > windowHeight * 0.8) {
      newHeight = windowHeight * 1.2;
      newWidth = newHeight * (width / height);
    }
    
    setImageSize({ width: newWidth, height: newHeight });
  };


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={openImage}>
        <Image
          source={{ uri: url }}
          style={styles.logo}
          onLayout={handleImageLayout}
          resizeMode='contain'
        />
      </TouchableWithoutFeedback>

      <Modal transparent visible={isImageOpen}>
        <TouchableWithoutFeedback onPress={closeImage}>
          <View style={styles.modal}>
            <Image
              source={{ uri: url }}
              style={[styles.fullLogo, imageSize]}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={closeImage} style={{...app_sh.circle,width:50,height:50,backgroundColor:app_c.HEX.ext_second,justifyContent:'center',alignItems:'center',marginTop:20}} ><AntDesign name="close" size={30} style={styles.btn_close}/></TouchableOpacity>
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
    width: 150,
    height: 150,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fullLogo: {
    marginTop:40
  },
  btn_close:{
    color:app_c.HEX.sub_primary,
  }
});

export default ModalShowImage;
