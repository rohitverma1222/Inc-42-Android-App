import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Feather from 'react-native-vector-icons/Feather';
import MainHeader from './Content/Header/MainHeader';
import MainContent from './Content/MainContent';
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  const size = 30;
   
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // Adjust the height as needed
        },
        tabBarShowLabel: false, // Hide the labels
      }}>
      <Bottom.Screen
        name="s1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Feather name="home" color={tabInfo.focused?"#D6322E":"grey"} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="s2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Feather name="trending-up" color={tabInfo.focused?"#D6322E":"grey"} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="s3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Feather name="search" color={tabInfo.focused?"#D6322E":"grey"} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="s4"
        component={Screen4}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Feather name="user" color={tabInfo.focused?"#D6322E":"grey"} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
