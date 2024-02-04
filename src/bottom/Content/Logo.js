import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Svg
        width="116px"
        height="32px"
        viewBox="0 0 116 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <G
          id="VD-Explorations"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <G
            id="Inc42-VD---Desktop-Hover-&amp;-Sponsored-States"
            transform="translate(-104.000000, -32.000000)"
            fill="#FFFFFF">
            <G id="Group-64">
              <G id="Page-1" transform="translate(104.000000, 32.000000)">
                <Path
                  d="M64.9885016,9.36404211 C61.7794824,8.74397193 58.5207329,8.42116491 56.2291818,8.42116491 C48.1265284,8.42116491 45.2093924,11.7904281 45.2093924,17.6843228 L45.2093924,23.0176561 C45.2093924,28.3591298 47.2031266,32.0001123 56.7942992,32.0001123 C59.3381752,32.0001123 62.4728814,31.7699368 65.553619,31.158007 L65.553619,26.3860772 C63.1428281,26.838007 60.9010074,26.9474807 57.3594166,26.9474807 C53.5578718,26.9474807 51.4256839,25.1032702 51.4256839,21.8948491 L51.4256839,18.8071298 C51.4256839,15.4131649 53.1145372,13.4737965 56.5117405,13.4737965 C57.0757277,13.4737965 58.1816624,13.4810947 58.7722101,13.629586 L58.7722101,17.1229193 L64.9885016,17.1229193 L64.9885016,9.36404211 Z M38.9931009,17.1229193 C38.9931009,10.7762526 36.0872672,8.42116491 30.7988986,8.42116491 C28.7972527,8.42116491 26.8574872,8.97555088 24.5826071,10.1053754 L24.0174897,8.98256842 L15.8232873,8.98256842 L15.8232873,14.0352 L19.2139918,14.0352 L19.2139918,26.9474807 L16.3884047,26.9474807 L16.3884047,32.0001123 L28.2558702,32.0001123 L28.2558702,26.9474807 L25.4302832,26.9474807 L25.4302832,14.0469895 C26.7040579,13.5947789 27.9778325,13.4737965 29.4332924,13.4737965 C33.0808427,13.4737965 32.7768095,16.6367439 32.7768095,18.8189193 L32.7768095,32.0001123 L42.3838054,32.0001123 L42.3838054,26.9474807 L38.9931009,26.9474807 L38.9931009,17.1229193 Z M9.60699588,26.9474807 L12.9977003,26.9474807 L12.9977003,32.0001123 L0,32.0001123 L0,26.9474807 L3.39070443,26.9474807 L3.39070443,5.05274386 L0.565117405,5.05274386 L0.565117405,0.000112280702 L12.4325829,0.000112280702 L12.4325829,5.05274386 L9.60699588,5.05274386 L9.60699588,26.9474807 Z"
                  id="Fill-1"></Path>
                <Path
                  d="M109.632777,10.6666667 C109.632777,8.33150877 108.792447,5.05263158 104.829279,5.05263158 C100.66182,5.05263158 98.7344874,9.07396491 100.019847,13.4736842 L94.458244,13.4736842 C94.036949,12.2122105 93.7851892,8.70119298 95.1324291,5.90961404 C96.6186878,2.82975439 100.125524,0 104.758639,0 L93.2443718,0 L83.6373759,0 L71.7699104,17.6842105 L71.7699104,25.2631579 L84.485052,25.2631579 L84.485052,20.2105263 L77.7036432,20.2105263 L87.5931978,5.05263158 L87.8757565,5.05263158 L87.8757565,32 L93.2443718,32 C93.2443718,22.0398596 99.0823172,18.8129123 104.54672,16.5352982 C107.553427,15.2819649 109.632777,13.7369825 109.632777,10.6666667 M115.283951,10.3859649 L115.283951,26.9473684 L101.156015,26.9473684 C101.156015,24.1403509 103.79907,23.6623158 107.089748,21.8947368 C111.315131,19.6249825 115.283951,16.8421053 115.283951,10.3859649"
                  id="Fill-4"></Path>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});