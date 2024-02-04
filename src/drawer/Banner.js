import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

const Banner = ({keys, text}) => {
  const images = {
    news: require('../../Images/news_banner.png'),
    indepth: require('../../Images/indepth_banner.png'),
    res: require('../../Images/Resources_banner.png'),
    startup: require('../../Images/startup_Banner.png'),
  };
  return (
    <LinearGradient
      colors={[
        '#ef2f63',
        '#ed2e5a',
        '#ea2d52',
        '#e72d49',
        '#e42e41',
        '#e62c3b',
        '#e72a35',
        '#e8292e',
        '#ee2228',
        '#f41b21',
        '#fa1019',
        '#ff000f',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.card}>
        <Image source={images[keys]} resizeMode="contain" style={styles.img} />
        <View style={styles.container}>
          {/* <Text style={styles.txt}>{text}</Text> */}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Banner;

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'red',
    // margin: 10,
    // display:"flex",

    // borderRadius: 10,
    padding: '20px',
  },
  container:{
    // backgroundColor:"green",
  },
  txt: {
    margin:"20px !important",
     padding:"20px !important",
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize:10,
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
    height: responsiveHeight(50),
  },
});
