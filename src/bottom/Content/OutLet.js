import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import Subscibe from './Subscribe'
import VerticalCard from './VerticalCard'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

export default function OutLet({children}) {
  return (
    <View>
        {children}
      <View style={styles.extrawhitespace}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    extrawhitespace:{
        // backgroundColor:"red",
        height:responsiveScreenHeight(30)
    }
})