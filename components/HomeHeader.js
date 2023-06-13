import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.bigText}>DKDX Mart</Text>
        <Text style={styles.smallText}>Buy/Sell Accounts</Text>
      </View>
      <View>
        <Icon name="notifications-active" size={25} color={'#000'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#E3DFFD',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  box1: {
    display: 'flex',
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  smallText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  notiImage: {
    width: 25,
    height: 25,
  },
});

export default HomeHeader;
