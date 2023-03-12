import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const RectangleButton = ({ buttonView, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View >{buttonView}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonView: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RectangleButton;
