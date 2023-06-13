import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SellBtn from './SellBtn';

const Navbar = () => {
  const [active, setActive] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => setActive(1)}>
          {active === 1 ? (
            <Icon name="ios-home" size={35} color={'#3A1078'} />
          ) : (
            <Icon name="ios-home-outline" size={35} />
          )}
        </TouchableOpacity>
        <Text style={styles.boxText}>Home</Text>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => setActive(2)}>
          {active === 2 ? (
            <Icon name="heart" size={35} color={'#3A1078'} />
          ) : (
            <Icon name="heart-outline" size={35} />
          )}
        </TouchableOpacity>
        <Text style={styles.boxText}>Fav</Text>
      </View>
      <SellBtn />
      <View />
      <View />
      <View style={styles.box}>
        <TouchableOpacity onPress={() => setActive(3)}>
          {active === 3 ? (
            <Icon name="ios-help-circle" size={35} color={'#3A1078'} />
          ) : (
            <Icon name="ios-help-circle-outline" size={35} />
          )}
        </TouchableOpacity>
        <Text style={styles.boxText}>Help</Text>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => setActive(4)}>
          {active === 4 ? (
            <Icons name="account-circle" size={35} color={'#3A1078'} />
          ) : (
            <Icons name="account-circle-outline" size={35} />
          )}
        </TouchableOpacity>
        <Text style={styles.boxText}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#E3DFFD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  boxText:{
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
});

export default Navbar;
