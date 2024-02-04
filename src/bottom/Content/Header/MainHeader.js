import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Logo from '../Logo'
import Svg, { Path,G } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import SidebarMenu from './SidebarMenu';

export default function MainHeader({navigate}) {
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
    end={{ x: 1, y: 0 }} >
    <View style={styles.headerColor}>
      <SidebarMenu navigate={navigate}/>
      <Logo/>
      <Icon name="bars" style={[styles.iconStyle,styles.hiddenIcon]}/>
    </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  headerColor:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:14,
  },
  hiddenIcon:{
    opacity: 0, height: 0
  },
  iconStyle:{
    // backgroundColor:"yellow",
    width:40,
    color:"#fff",
    fontSize:40,
  }
})

