import React,{useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import MainContent from './Content/MainContent';
import MainHeader from './Content/Header/MainHeader';

const MyComponent = ({navigation}) => {
  
  const [refreshing, setRefreshing] = useState(false);

  const [reload,setreload]=useState(0);
  const onRefresh = () => {
    setRefreshing(true);
    reload==0?setreload(1):setreload(0);

    console.log("refreshing")

    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Adjust the timeout as needed
  };


  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <MainHeader navigate={navigation} reload={reload}/>
      <MainContent />
    </ScrollView>
  );
};

export default MyComponent;
