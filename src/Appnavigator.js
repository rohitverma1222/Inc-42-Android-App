import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';


const Stack = createNativeStackNavigator();
const Appnavigator = () => {
  return (
    <NavigationContainer>  
        <Stack.Navigator >
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Parent" component={Parent} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigator

const styles = StyleSheet.create({})