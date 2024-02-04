import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import News from './News';
import InDepth from './InDepth';
import Startup_stories from './Startup_stories';
import Resources from './Resources';
import Videos from './Videos';
import Research_reports from './Research_reports';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false, // Applies to all screens
        drawerActiveTintColor: '#e91e63',
        drawerInactiveTintColor: '#333',
        drawerActiveBackgroundColor: '#ffc4c5',
        drawerItemStyle: {padding: 5,marginHorizontal:0,marginVertical:0},
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        // For adjusting the style of the drawer itself
        drawerStyle: {
          backgroundColor: '#f6f6f6',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Drawer.Screen
          name="NEWS"
          component={News}
          options={{headerShown: false}}
          key={"INDEPTH"}
        />
        <Drawer.Screen
          name="IN DEPTH"
          component={InDepth}
          options={{headerShown: false}}
          key={"INDEPTH"}
        />
        <Drawer.Screen
          name={"STARTUP STORIES"}
          component={Startup_stories}
          options={{headerShown: false}}
          key={"STARTUP"}
        />
        <Drawer.Screen
          name={"RESOURCES"}
          component={Resources}
          options={{headerShown: false}}
          key={"RES"}
        />
        <Drawer.Screen
          name={"VIDEO"}
          component={Videos}
          options={{headerShown: false}}
          key={"VIDEOS"}
        />
       
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
