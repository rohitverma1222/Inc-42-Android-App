import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import React, {useState, useEffect} from 'react';
import BigCard from './BigCard';
import SmallCard from './SmallCard';
import EditorPickCard from './EditorPickCard';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Subscibe from './Subscribe';
import EnterEmail from './EnterEmail';
import VerticalCard from './VerticalCard';
import OutLet from './OutLet';
import axios from 'axios';
import MainHeader from './Header/MainHeader';
import SkeletonBigCard from './SkeletonBigCard';
import SkeletonTrendingCard from '../Screen2Component/SkeletonTrendingCard';

export default function MainContent({reload}) {
  const [Data, setData] = useState();
  const [headline, setHeadLine] = useState(null);
  const [smallCardNews, setSmallCardNews] = useState();
  const [slickData, setSlickData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://inc42-data.onrender.com/');
        if(response.status==200)
        {
          console.log("working");
          setHeadLine(response.data.headline);
          setSmallCardNews(response.data.smallheadlineData);
          setSlickData(response.data.slickData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log("fetching new data")
    fetchData();
  }, [reload]);

  return (
    <ScrollView>
      {headline===null ? (
        <>
          <SkeletonBigCard />
          <View style={{padding: 10}}>
            <SkeletonTrendingCard />
            <SkeletonTrendingCard />
          </View>
        </>
      ) : (
        <View style={styles.container}>
          {headline.length > 0 ? (
            <>
              <BigCard news={headline[0]} />
              <SmallCard>{headline[1]}</SmallCard>
              <SmallCard>{headline[2]}</SmallCard>
            </>
          ) : (
            ''
          )}
          <EditorPickCard></EditorPickCard>
          <Subscibe
            isCenter={true}
            heading="Stay on top - Get the daily news from Inc42 in your inbox">
            <EnterEmail />
          </Subscibe>
          <Text style={styles.latestFrom}>Latest From Inc42</Text>
          {smallCardNews != undefined ? (
            <>
              {smallCardNews.length > 0 &&
                smallCardNews[0].map((smallnewDataobj, index) => (
                  <SmallCard key={index * 1}>{smallnewDataobj}</SmallCard>
                ))}
            </>
          ) : (
            ''
          )}
          {slickData.length > 0 && (
            <OutLet>
              <VerticalCard newsData={slickData[0]}></VerticalCard>
              <Subscibe heading="Moneyball"></Subscibe>
            </OutLet>
          )}
          {smallCardNews != undefined ? (
            <>
              {smallCardNews.length > 0 &&
                smallCardNews[1].map((smallnewDataobj, index) => (
                  <SmallCard key={index * 2}>{smallnewDataobj}</SmallCard>
                ))}
            </>
          ) : (
            ''
          )}
          {slickData.length > 0 && (
            <OutLet>
              <VerticalCard newsData={slickData[1]}></VerticalCard>
              <Subscibe heading="Inc42 BrandLabs"></Subscibe>
            </OutLet>
          )}
          {smallCardNews != undefined && (
            <>
              {smallCardNews.length > 0 &&
                smallCardNews[2].map((smallnewDataobj, index) => (
                  <SmallCard key={index * 3}>{smallnewDataobj}</SmallCard>
                ))}
            </>
          )}
          {slickData.length > 0 && (
            <OutLet>
              <VerticalCard
                newsData={slickData[2]}
                imageHeight={'100%'}></VerticalCard>
              <Subscibe heading="Explore By Industry"></Subscibe>
            </OutLet>
          )}
          {smallCardNews != undefined && (
            <>
              {smallCardNews.length > 0 &&
                smallCardNews[3].map((smallnewDataobj, index) => (
                  <SmallCard key={index * 4}>{smallnewDataobj}</SmallCard>
                ))}
            </>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    // height:800,
  },
  latestFrom: {
    fontSize: responsiveFontSize(5),
    margin: 8,
    fontFamily: 'Robo',
    color: '#030303',
    fontWeight: '800',
  },
});
