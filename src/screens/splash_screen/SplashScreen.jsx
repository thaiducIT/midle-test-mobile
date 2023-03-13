
import { app_c } from '@assets/globals/styles';
import React from 'react';
import { View, Image, StyleSheet ,Text} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/image/splashimg.png')} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:app_c.HEX.fourth
  },
  image: {
    resizeMode: 'contain',
    width: 130,
    height: 130
  }
});

export default SplashScreen;
