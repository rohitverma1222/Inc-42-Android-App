import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const LoadMore = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          '#ef2f63',
          '#ed2e5a',
          '#ea2d52',
          '#e72d49',
          '#e42e41',
          '#e62c3b',
          '#e72a35',
          '#e8292e',
          '#ee2228',
          '#f41b21',
          '#fa1019',
          '#ff000f',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Load More</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default LoadMore;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 15, // Optional: if you want rounded corners
  },
  button: {
    // backgroundColor: 'red',
    padding: 5,
    width: 150, // Specify your desired width here
    alignItems: 'center', // This centers the text inside the TouchableOpacity
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
  },
});
