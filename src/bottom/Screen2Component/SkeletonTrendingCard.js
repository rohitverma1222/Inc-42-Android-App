import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import {
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const SkeletonTrendingCard = () => {
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
        ])
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
    <View style={styles.smallCardContainer}>
      <Animated.View
        style={[
          {
            width: '40%',
            height: responsiveScreenHeight(10),
            borderRadius: 10,
            backgroundColor: '#DEDEDE',
          },
          animatedStyle,
        ]}
      />
      <View style={{ width: '60%' }}>
        <View style={[styles.skeletonCss, { width: 'auto' }]} />
        <View style={[styles.skeletonCss, { width: '60%' }]} />
        <View style={[styles.skeletonCss, { width: 'auto' }]} />
      </View>
    </View>
  );
};

export default SkeletonTrendingCard;

const styles = StyleSheet.create({
  skeletonCss: {
    height: 13,
    backgroundColor: '#DEDEDE',
    margin: 5,
    borderRadius: 5,
  },
  smallCardContainer: {
    flexDirection: 'row',
    height: responsiveScreenHeight(12),
    margin: 8,
    borderRadius: 10,
  },
});
