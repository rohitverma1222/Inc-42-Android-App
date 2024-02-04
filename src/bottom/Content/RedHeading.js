import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RedHeading({children}) {
  return (
    <View>
      <Text style={styles.redButton} >{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    redButton:{
      // backgroundColor:"#000",
        color:"#D6322E",
        paddingLeft:12,
        paddingTop:8,
        paddingBottom:-4,
        letterSpacing:1,
        fontWeight:"900",
        textTransform: 'uppercase',
        fontFamily:"Roboto-Bold",
        // backgroundColor:"yellow",
    }
})