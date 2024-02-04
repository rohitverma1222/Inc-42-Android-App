import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainHeader from '../bottom/Content/Header/MainHeader';
import Banner from './Banner';
import SmallCard from '../bottom/Content/SmallCard';
import axios from 'axios';
import LoadMore from './LoadMore';
import SkeletonTrendingCard from '../bottom/Screen2Component/SkeletonTrendingCard';

const Startup_stories = ({navigation}) => {
  const [newData, setnewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://inc42-data.onrender.com/startup',
        );
        if (response.status == 200) {
          console.log('working');
          setnewsData(response.data.smallheadlineData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log('fetching news data');
    fetchData();
  }, []);
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <MainHeader navigate={navigation} />
      <Banner
        keys="startup"
        text={
          'The latest startup news from the Indian Startup Ecosystem including new startup fundings, acquisitions, government policies, investments funds, and more.'
        }
      />
      {!newData ? (
        <>
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
        </>
      ) : (
        newData != undefined &&
        newData.map(obj => <SmallCard redheading={"BRANDLABS"} key={obj.href}>{obj}</SmallCard>)
      )}
      <LoadMore />
    </ScrollView>
  );
}

export default Startup_stories

const styles = StyleSheet.create({})