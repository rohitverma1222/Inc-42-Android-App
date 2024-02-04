import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainHeader from '../bottom/Content/Header/MainHeader';
import Banner from './Banner';
import SmallCard from '../bottom/Content/SmallCard';
import axios from 'axios';
import LoadMore from './LoadMore';
import SkeletonTrendingCard from '../bottom/Screen2Component/SkeletonTrendingCard';

const Videos = ({navigation}) => {
  const [newData, setnewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://inc42-data.onrender.com/resources',
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
        keys="res"
        text={"The lineage of data-backed feeds catering to in-depth information about businesses, entrepreneurs, startups and founders. We believe in empowering our community. Share your views and thoughts with us on Indian Startup Ecosystem."}
      />
    {!newData ? (
        <>
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
          <SkeletonTrendingCard />
        </>
      ) : (
        newData != undefined &&
        newData.map(obj => <SmallCard redheading="RESOURCES" key={obj.href}>{obj}</SmallCard>)
      )}
      <LoadMore />
    </ScrollView>
  );
};

export default Videos

const styles = StyleSheet.create({})