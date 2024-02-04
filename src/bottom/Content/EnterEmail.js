import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const EnterEmail = () => {
  const [enteredText, setEnteredText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const showEnteredText = () => {
    setDisplayedText('You entered: ' + enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type here..."
        onChangeText={(text) => setEnteredText(text)}
        value={enteredText}
      />
      {/* <Button title="Submit" style={styles.butn} onPress={showEnteredText} /> */}
    <View style={styles.butn}><Text style={styles.sub}>SUBMIT</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
    backgroundColor:"#EE747B",
    marginTop:20,
    borderRadius:5,
  },
  textInput: {
    // height: 40,
    // borderWidth: 1,
    width: 200,
    color:"#fff",
    fontSize:responsiveFontSize(2),
    // marginVertical: 10,
    // paddingHorizontal: 10,
  },

  butn:{
    backgroundColor:"#fff",
    height:"98%",
    padding:10,
    paddingRight:15,
},
    sub:{
        color:"#030303",
    fontSize:20,
  }
});

export default EnterEmail;
