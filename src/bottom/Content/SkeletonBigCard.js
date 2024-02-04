import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, Animated} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import RedHeading from './RedHeading';

const BigCard = ({news}) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateSkeleton = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animateSkeleton();
  }, [animation]);

  const animatedStyle = {
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    }),
  };

  return (
    <View style={styles.card}>
      <Animated.View
        style={[
          styles.skeletonImage,
          {
            backgroundColor: '#b8b8b8',
          },
          animatedStyle,
        ]}
      />
      {/* <RedHeading>FEATURES</RedHeading> */}
      <Animated.View
        style={[
          styles.skeletonText,
          {
            backgroundColor: '#b8b8b8',
          },
          animatedStyle,
        ]}
      />
      <Animated.View
        style={[
          styles.skeletonText,
          {
            backgroundColor: '#b8b8b8',
            marginTop:0,
            width:"60%"
          },
          animatedStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#fff',
    margin: 10,
    padding:15,
    borderRadius: 10,
  },
  skeletonImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: responsiveHeight(35),
  },
  skeletonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: responsiveFontSize(2),
    paddingLeft: 12,
    padding: 8,
    margin: 8,
    borderRadius: 5,
  },
});

export default BigCard;
