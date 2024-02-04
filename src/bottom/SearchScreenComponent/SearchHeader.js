import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import NoImageCard from './NoImageCard';
import axios from 'axios';
import SmallCard from '../Content/SmallCard';
import { ScrollView } from 'react-native-gesture-handler';
const SearchHeader = () => {
  const [text, setText] = useState('');
  const [alldata,setAlldata]=useState(null);

  const [searchResult,setSearchResult]=useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://inc42-data.onrender.com/');
        if(response.status==200)
        {
          let data=response.data;
          const wrappedArray = [data.headline, data.slickData, data.smallheadlineData, data.trendingData];
          // console.log(wrappedArray);
          setAlldata(wrappedArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

// console.log(setAlldata)
  const handleChangeText = inputText => {
    setText(inputText)
    let searchedArray=[]
    console.log(inputText)
    if(alldata!==null)
    {
      alldata.map((arr)=>{
        arr.map((obj)=>{
          if(obj.text!==undefined && (obj.text).includes(text))
            searchedArray.push(obj);
        })
      })
      setSearchResult(searchedArray);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Svg
        width="87"
        height="34"
        viewBox="0 0 87 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <G
          id="VD-Explorations"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd">
          <G
            id="Inc42-VD---Story-Page-Normal-Scrolled"
            transform="translate(-104.000000, -19.000000)">
            <G id="Group-11">
              <G id="Page-1" transform="translate(104.000000, 19.000000)">
                <Path
                  d="M48.7413762,7.02303158 C46.3346118,6.55797895 43.8905497,6.31587368 42.1718863,6.31587368 C36.0948963,6.31587368 33.9070443,8.84282105 33.9070443,13.2632421 L33.9070443,17.2632421 C33.9070443,21.2693474 35.402345,24.0000842 42.5957244,24.0000842 C44.5036314,24.0000842 46.8546611,23.8274526 49.1652142,23.3685053 L49.1652142,19.7895579 C47.3571211,20.1285053 45.6757555,20.2106105 43.0195625,20.2106105 C40.1684039,20.2106105 38.5692629,18.8274526 38.5692629,16.4211368 L38.5692629,14.1053474 C38.5692629,11.5598737 39.8359029,10.1053474 42.3838054,10.1053474 C42.8067958,10.1053474 43.6362468,10.1108211 44.0791576,10.2221895 L44.0791576,12.8421895 L48.7413762,12.8421895 L48.7413762,7.02303158 Z M29.2448257,12.8421895 C29.2448257,8.08218947 27.0654504,6.31587368 23.0991739,6.31587368 C21.5979395,6.31587368 20.1431154,6.73166316 18.4369553,7.57903158 L18.0131173,6.73692632 L11.8674655,6.73692632 L11.8674655,10.5264 L14.4104938,10.5264 L14.4104938,20.2106105 L12.2913036,20.2106105 L12.2913036,24.0000842 L21.1919027,24.0000842 L21.1919027,20.2106105 L19.0727124,20.2106105 L19.0727124,10.5352421 C20.0280434,10.1960842 20.9833744,10.1053474 22.0749693,10.1053474 C24.810632,10.1053474 24.5826071,12.4775579 24.5826071,14.1141895 L24.5826071,24.0000842 L31.787854,24.0000842 L31.787854,20.2106105 L29.2448257,20.2106105 L29.2448257,12.8421895 Z M7.20524691,20.2106105 L9.74827524,20.2106105 L9.74827524,24.0000842 L0,24.0000842 L0,20.2106105 L2.54302832,20.2106105 L2.54302832,3.78955789 L0.423838054,3.78955789 L0.423838054,8.42105263e-05 L9.32443718,8.42105263e-05 L9.32443718,3.78955789 L7.20524691,3.78955789 L7.20524691,20.2106105 Z"
                  id="Fill-1"
                  fill="#000000"></Path>
                <Path
                  d="M82.2245824,8 C82.2245824,6.24863158 81.5943352,3.78947368 78.621959,3.78947368 C75.4963652,3.78947368 74.0508656,6.80547368 75.0148852,10.1052632 L70.843683,10.1052632 C70.5277117,9.15915789 70.3388919,6.52589474 71.3493218,4.43221053 C72.4640159,2.12231579 75.0941429,0 78.5689792,0 L69.9332789,0 L62.728032,0 L53.8274328,13.2631579 L53.8274328,18.9473684 L63.363789,18.9473684 L63.363789,15.1578947 L58.2777324,15.1578947 L65.6948983,3.78947368 L65.9068174,3.78947368 L65.9068174,24 L69.9332789,24 C69.9332789,16.5298947 74.3117379,14.1096842 78.4100399,12.4014737 C80.6650703,11.4614737 82.2245824,10.3027368 82.2245824,8 M86.462963,7.78947368 L86.462963,20.2105263 L75.8670116,20.2105263 C75.8670116,18.1052632 77.8493022,17.7467368 80.3173112,16.4210526 C83.4863483,14.7187368 86.462963,12.6315789 86.462963,7.78947368"
                  id="Fill-4"
                  fill="#F42534"></Path>
              </G>
            </G>
          </G>
        </G>
      </Svg>
      <View style={styles.searchBox}>
        <Feather name="search" size={30} style={{padding: 4, margin: 4}} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={text}
          onChangeText={handleChangeText}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={()=>setText("")}>
          <Feather name="x" size={30} style={{padding: 4, margin: 4}} />
        </TouchableOpacity>
      </View>
      {text.length>0 &&
      <ScrollView style={styles.result}>
        {searchResult.map((obj)=>(
        <SmallCard key={obj.text}>{obj}</SmallCard>
        ))}
      </ScrollView>
      }
    </ScrollView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  result:{
    height:"100%",
  },
  container: {
    padding: 15,
    backgroundColor: '#e6ecf0',
  },
  img: {
    width: 100,
    height: 50,
  },
  searchBox: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 10,
    height: 50,
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    // justifyContent:"center",
  },
  input: {
    fontFamily: 'Roboto-Regular',
    alignContent: 'center',
    fontSize: 23,
    color:"#4d4a49",
    width: '74%',
  },
});
