import { StyleSheet, Text, Touchable, View } from 'react-native'
import React, { Children } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import EnterEmail from './EnterEmail';


export default function Subscibe({heading,children,isCenter}) {
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
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}>
    <View style={isCenter?styles.headerColor:styles.headerColorleft}>
        <Text style={styles.iconStyle}>{heading}</Text>
        {children}
    </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  headerColor:{
    flex:1,
    minHeight:responsiveScreenHeight(10),
    justifyContent:"center",
    position:"relative",
    alignItems:"center",
    flexDirection:"column",
    padding:14,
    color:"#fff",
  },
  headerColorleft:{
    flex:1,
    minHeight:responsiveScreenHeight(25),
    position:"relative",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    flexDirection:"column",
    padding:14,
    color:"#fff",
    // marginBottom:190,
    // paddingBottom:responsiveScreenHeight(80),
  },
  extraborder:{
    height:responsiveScreenHeight(10),
    backgroundColor:"#fff",
  },
  iconStyle:{
    fontWeight:"800",
    color:"#fff",
    fontSize:responsiveFontSize(2.5),
    textAlign:"center",
  }
})