import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainHeader from '../bottom/Content/Header/MainHeader';
import Banner from './Banner';
import SmallCard from '../bottom/Content/SmallCard';
import axios from 'axios';
import LoadMore from './LoadMore';
import SkeletonTrendingCard from '../bottom/Screen2Component/SkeletonTrendingCard';

const InDepth = ({navigation}) => {
  const [newData, setnewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://inc42-data.onrender.com/indepth',
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
        keys="indepth"
        text={
          'Special long-form stories giving you an inside look into various industries, special events and at times topics that people are afraid to talk about. Deep insights combined with an impeccable storyline, delivered to you from the editorial desk of Inc42.'
        }
      />
      {!newData ? (
        <>
          <SkeletonTrendingCard/>
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
        </>
      ) : (
        newData != undefined &&
        newData.map(obj => <SmallCard redheading={"FEATURES"} key={obj.href}>{obj}</SmallCard>)
      )}
      <LoadMore />
    </ScrollView>
  )
}

export default InDepth

const styles = StyleSheet.create({})