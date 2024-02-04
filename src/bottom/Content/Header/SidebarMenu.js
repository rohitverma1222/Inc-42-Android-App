import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function SidebarMenu({navigate}) {
    const [sideBar,setSideBar]=useState();
    const handleClick=()=>{
        navigate.openDrawer();
    }
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container} >
        <View style={[styles.line,styles.one]}>
            <Text >one</Text>
        </View>
        <View style={styles.line}>
            <Text>two</Text>
        </View><View style={[styles.line,styles.three]}>
            <Text>three</Text>
            <Text>three</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"80%",
    },
    one:{
        marginLeft:15,
        width:"43%",
    },
    three:{
        width:"48%",
    },
    line:{
        backgroundColor:"#fff",
        height:2,
        margin:3,
        borderRadius:5,
    }
})