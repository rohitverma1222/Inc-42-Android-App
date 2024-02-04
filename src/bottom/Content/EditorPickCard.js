import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import ShowEditorNews from './ShowEditorNews'

export default function EditorPickCard() {
    const editorsNews = [
        "Tesla’s India Entry: Govt Asked To Fast-Track Approvals By Jan 24",
        "Up To 101X Returns: Early Investors Kunal Bahl, Shilpa Shetty Set For Mamaearth ...",
        "Nykaa Q2 Highlights: BPC Powers Profitable Quarter, Fashion Vertical Makes Consi...",
        "Zomato CEO Deepinder Goyal Gets 33,422 Mamaearth Shares",
        "Zomato Rallies Further To Touch A New 52-Week High At INR 123.9 After Strong Q2 ..."
      ];
      
      // Now editorsNews is an array containing the news headlines
      let idx=1;
  return (
    <View style={styles.editorcard}>
      <Text style={styles.heading}>Editor's Pick</Text>
      {editorsNews.map((news)=>{
       return (<ShowEditorNews key={idx} sno={idx++}>{news}</ShowEditorNews>)
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    editorcard:{
        margin:8,
        backgroundColor:"#fff",
    },
    heading:{
        color:"#DC2340",
        fontSize:responsiveScreenFontSize(5),
        fontWeight:"900",
        fontFamily:'Rotob',
        padding:8,
    }
})