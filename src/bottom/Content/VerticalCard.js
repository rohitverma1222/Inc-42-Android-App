import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import RedHeading from './RedHeading';

const {height, width} = Dimensions.get('window');
export default function VerticalCard({imageHeight, newsData, ImageUrl}) {
  const flatListRef = useRef(null);
  const [currPage, setCurrPage] = useState(0);
  const [data, Setdata] = useState(null);
  const [imgLinks,setImgLinks]=useState([]);
  const handleEndReached = () => {
    // When reaching the end, scroll to the beginning to create a circular effect
    flatListRef.current.scrollToIndex({index: 0, animated: false});
  };
//   const imgLinks=[]
  useEffect(() => {
    Setdata(newsData);

  }, [newsData]);
  const img="../../Images/cleantech.png"

  if (data == null) {
    return '';
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          marginTop: responsiveHeight(8),
          top: 0,
          left: 0,
          zIndex: 1001,
          height: responsiveScreenHeight(45),
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={newsData}
          horizontal
          ref={flatListRef}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          pagingEnabled
          onScroll={e => {
            const page = e.nativeEvent.contentOffset.x;
            setCurrPage((page / (width / 4).toFixed(0)).toFixed(0));
          }}
          renderItem={(item, index) => (
              <View
              key={item.item.text}
              style={{
                  width: width / 2,
                  //   height: height / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  //   margin:5,
                }}>
                    
              <TouchableOpacity
                style={{
                  width: '90%',
                  // height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  padding: 2,
                  flex: 1,
                }}
                key={item.item.href}
                >
                <Image
                  source={{uri:item.item.href}} 
                  resizeMode="contain"
                  style={{
                    borderRadius: 10,
                    width: '100%',
                    height: imageHeight != null ? imageHeight : '40%',
                  }}
                  key={item.item.href}
                />
                <RedHeading>News</RedHeading>
                <Text style={styles.text} key={item.item.text}>{item.item.text}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          {newsData.map((point, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: currPage == index ? 13 : 10,
                  height: currPage == index ? 13 : 10,
                  margin: 5,
                  backgroundColor: currPage == index ? '#F32735' : 'grey',
                  borderRadius: 20,
                  padding: 5,

                }}
                key={index}
                ></TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 12,
    padding: 8,
    color: '#030303',
    fontSize: responsiveFontSize(2),
  },
  mainDiv: {
    margin: 2,
  },
  box: {
    margin: 12,
    width: '65%', // Adjust the width as needed
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  verContainer: {
    position: 'absolute',
    marginTop: responsiveHeight(8),
    top: 0,
    left: 0,
    zIndex: 1001,
    // height: responsiveScreenHeight(35),
  },
});
