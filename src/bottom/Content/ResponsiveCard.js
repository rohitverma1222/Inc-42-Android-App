import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window');

const ResponsiveCard = () => {
  const aspectRatio = 16 / 9; // Adjust based on your image's aspect ratio

  const responsiveWidth = width - 20; // Adjust margins or padding as needed
  const responsiveHeight = responsiveWidth / aspectRatio;

  return (
    <View style={styles.card}>
      <Image
        // source={require('../../Images/firstNews.jpg')}
        resizeMode='cover'
        style={{ width: responsiveWidth, height: responsiveHeight }}
      />
      <Text>Working on it, please change it</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ResponsiveCard;
