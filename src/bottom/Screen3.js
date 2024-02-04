import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchHeader from './SearchScreenComponent/SearchHeader';
import NoImageCard from './SearchScreenComponent/NoImageCard';

const Screen3 = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <SearchHeader />
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          marginBottom: -20,
          fontSize: 24,
          fontFamily: 'Poppins-Regular',
          fontWeight: 600,
          color: '#202121',
        }}>
        Trending On Inc42
      </Text>
      <NoImageCard>
        Amazon Seller Appario Retail’s FY23 Revenue Falls 8.2% To INR
        14,604.2...
      </NoImageCard>
      <NoImageCard>
        GVFL Partners With Brinc To Launch Multi-Stage Startup Accelerator
      </NoImageCard>
      <NoImageCard>
        Jio, TM Forum Open Innovation Hub In Mumbai To Step Up Gen AI, LLM
        Pla...
      </NoImageCard>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          marginBottom: -20,
          fontSize: 24,
          fontFamily: 'Poppins-Regular',
          fontWeight: 600,
          color: '#202121',
        }}>
        In-Depth Stories
      </Text>
      <NoImageCard>
        Amazon Seller Appario Retail’s FY23 Revenue Falls 8.2% To INR
        14,604.2...
      </NoImageCard>
      <NoImageCard>
        GVFL Partners With Brinc To Launch Multi-Stage Startup Accelerator
      </NoImageCard>
      <NoImageCard>
        Jio, TM Forum Open Innovation Hub In Mumbai To Step Up Gen AI, LLM
        Pla...
      </NoImageCard>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          marginBottom: -20,
          fontSize: 24,
          fontFamily: 'Poppins-Regular',
          fontWeight: 600,
          color: '#202121',
        }}>
        2022 Year In Review
      </Text>
      <NoImageCard>
        Amazon Seller Appario Retail’s FY23 Revenue Falls 8.2% To INR
        14,604.2...
      </NoImageCard>
      <NoImageCard>
        GVFL Partners With Brinc To Launch Multi-Stage Startup Accelerator
      </NoImageCard>
      <NoImageCard>
        Jio, TM Forum Open Innovation Hub In Mumbai To Step Up Gen AI, LLM
        Pla...
      </NoImageCard>
    </ScrollView>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
