import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import HeadingforSmallCard from '../Content/HeadingforSmallCard';
const TrendingCard = ({children}) => {
  return (
    <TouchableOpacity style={{backgroundColor:"#fff"}}>
      <View style={styles.smallCardContainer}>
        <Image
          source={{uri: children.href}}
          resizeMode="contain"
          style={styles.img}
          key={children.href}
        />
        <View style={{width: '60%'}}>
          <HeadingforSmallCard key={children.text}>
            {children.text}
          </HeadingforSmallCard>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  smallCardContainer: {
    height: responsiveScreenHeight(10),
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },

  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '40%',
    height: '100%',
  },
});
