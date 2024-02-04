import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainHeader from './Content/Header/MainHeader';
import TrendingCard from './Screen2Component/TrendingCard';
import axios from 'axios';
import SkeletonTrendingCard from './Screen2Component/SkeletonTrendingCard';

const Screen2 = ({navigation}) => {
  const [Data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://inc42-data.onrender.com/');
        if(response.status==200)
        {
          setData(response.data.trendingData)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log("fetching new data")
    fetchData();
  }, []);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <MainHeader navigate={navigation} />
      <View style={styles.trendContainer}>
        <Text style={styles.textstyle}>Trending Articles</Text>
        {Data === null ? (
          <>
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
          </>
        ) : (
          Data.map((item, index) => (
            <TrendingCard key={index}>{item}</TrendingCard>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  trendContainer: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
  },
  textstyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: '#262625',
  },
});
