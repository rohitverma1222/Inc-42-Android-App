import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import RedHeading from './RedHeading';
import HeadingforSmallCard from './HeadingforSmallCard';

export default function SmallCard({children, redheading}) {
  // console.log(children[0]);
  return (
    <View style={styles.smallCardContainer}>
      <Image
        source={{uri: children.href}}
        resizeMode="contain"
        style={styles.img}
        key={children.href}
      />
      <View style={{width: '60%'}}>
        <RedHeading>{redheading ? redheading : 'News'}</RedHeading>
        <HeadingforSmallCard key={children.text}>
          {children.text}
        </HeadingforSmallCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  smallCardContainer: {
    height: responsiveScreenHeight(13),
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      // Android shadow
      android: {
        elevation: 5,
      },
    }),
  },

  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '40%',
    height: '100%',
  },
});
