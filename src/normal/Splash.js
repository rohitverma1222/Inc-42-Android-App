import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Parent');
        }, 2000);
    },[])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/launch_screen.png')}
        style={styles.image}
      >
      </ImageBackground>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' for different scaling options
    justifyContent: 'center',
  },
});