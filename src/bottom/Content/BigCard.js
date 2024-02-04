import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ResponsiveCard from './ResponsiveCard';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import RedHeading from './RedHeading';

export default function BigCard({news}) {
  return (
    // <ResponsiveCard/>
    <View style={styles.card}>
      <Image
        source={{uri: news.href}}
        resizeMode="contain"
        style={styles.img}
      />
      <RedHeading>FEATURES</RedHeading>
      <Text style={styles.features}>{news.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  features: {
    fontFamily: 'Poppins-Medium',
    fontSize: responsiveFontSize(2.7),
    paddingLeft: 12,
    padding: 8,
    color: '#000',
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: responsiveHeight(35),
  },
});
