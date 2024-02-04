import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'

export default function ShowEditorNews({children,sno}) {
  return (
    <>
    <View style={styles.detailcontainer}>
        <Text style={styles.sn}>{sno}</Text>
      <Text style={styles.info}>{children}</Text>
    </View>
    <Text style={styles.line}>s</Text>
    </>
  )
}

const styles = StyleSheet.create({
    line:{
        height:2,
        width:"90%",
        marginLeft:"5%",
        backgroundColor:"#F1F1F1",
        textAlign:"center"
    },
    detailcontainer:{
        // backgroundColor:"red",
        // height:responsiveScreenHeight(10),
        flex:1,
        flexDirection:"row",
        padding:14,
        borderRadius:10,
    },
    sn:{
        fontSize:responsiveFontSize(5),
        color:"#DC2340",
        fontWeight:"900",
    },
    info:{
        fontSize:responsiveScreenFontSize(2),
        padding:8,
        paddingLeft:14,
        width:"98%",
        fontWeight:"600",
        color:"#030303"
    }
})