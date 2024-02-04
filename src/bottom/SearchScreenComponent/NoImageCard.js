import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RedHeading from '../Content/RedHeading';

const NoImageCard = ({children}) => {
  return (
    <View>
      <View style={styles.newsCard}>
        <View>
          <Text style={styles.redButton}>NEWs</Text>
        </View>
        <Text style={styles.newsTitle}>
          {children}
        </Text>
        <Text>By Tapanjana R.</Text>
      </View>
    </View>
  );
};

export default NoImageCard;

const styles = StyleSheet.create({
  newsCard: {
    padding: 10,
    margin: 10,
  },
  redButton:{
    // backgroundColor:"#000",
      color:"#D6322E",
      paddingTop:8,
      paddingBottom:-4,
      letterSpacing:1,
      fontWeight:"900",
      textTransform: 'uppercase',
      fontFamily:"Roboto-Bold",
      // backgroundColor:"yellow",
  },
  newsTitle:{
    fontFamily:"Roboto-Medium",
    fontSize:17,
    color:"#000",
    marginTop:8,
    paddingBottom:10,
    lineHeight:30,
  }
});
