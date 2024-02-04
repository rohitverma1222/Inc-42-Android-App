import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'

export default function HeadingforSmallCard({children}) {
  return (
    <View key={children}>
      <Text style={styles.subheading}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subheading:{
        padding:4,
        paddingTop:-2,
        paddingLeft:14,
        fontSize:responsiveScreenFontSize(1.8),
        color:"#030303",
        fontWeight:"400",
    }
})