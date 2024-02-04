import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import MainHeader from './Content/Header/MainHeader';
import Svg, {G, Path} from 'react-native-svg';

const Screen4 = ({navigation}) => {
  const [selected, setSelected] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <MainHeader navigate={navigation}></MainHeader>
      <View
        style={{
          borderColor: '#fff',
          borderWidth: 1,
          margin: 10,
          borderRadius: 20,
        }}>
        <View style={styles.header}>
          <Text
            style={{fontFamily: 'Poppins-Bold', color: '#fff', fontSize: 32}}>
            My Account
          </Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={selected == 1 ? styles.SelectMenuItem : styles.menuItem}
            onPress={() => setSelected(1)}>
            <Text style={styles.menuText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selected == 2 ? styles.SelectMenuItem : styles.menuItem}
            onPress={() => setSelected(2)}>
            <Text style={styles.menuText}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selected == 3 ? styles.SelectMenuItem : styles.menuItem}
            onPress={() => setSelected(3)}>
            <Text style={styles.menuText}>Membership</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selected == 4 ? styles.SelectMenuItem : styles.menuItem}
            onPress={() => setSelected(4)}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.details}>
          Hello <Text style={styles.name}>Rohit</Text>
        </Text>
        <Text style={styles.details}>
          From your account dashboard here, you can view & manage your{' '}
          <Text style={styles.link}>Inc42 Plus membership</Text>, manage your{' '}
          <Text style={styles.link}>billing details</Text>, and edit{' '}
          <Text style={styles.link}>your profile & account details.</Text>
        </Text>
        <Text style={styles.details}>
          In case you need to change your account password,{' '}
          <Text style={styles.link}>Click Here</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: 'red', // or any other color for the name
  },
  link: {
    color: 'red', // or any other color for links
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Thin',
  },
  menuContainer: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  SelectMenuItem: {
    margin: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    padding: 5,
    borderRadius: 10,
  },
  menuItem: {
    margin: 5,
    backgroundColor: '#4a4946',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    padding: 5,
    borderRadius: 10,
  },
  menuText: {
    color: 'red',
    fontSize: 16,
  },
  details: {
    padding: 10,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default Screen4;
