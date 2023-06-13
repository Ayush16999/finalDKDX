/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const SellBtn = () => {
  return (
    <View style={styles.sellBox}>
        <TouchableOpacity style={styles.sellInnerBox}>
          <Icon name="add" size={70} style={{marginLeft: 5}} color={'purple'} />
        </TouchableOpacity>
        <Text style={styles.boxText}>Sell</Text>
      </View>
  );
};

export default SellBtn;

const styles = StyleSheet.create({
    sellBox: {
        width: '105%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 8,
    },
    sellInnerBox: {
        backgroundColor: '#f2f2f2',
        borderRadius: 100,
        borderWidth: 6,
        borderColor: 'purple',
    },
    boxText:{
        fontSize: 12,
        color: '#000',
        fontWeight: '400',
      },
});
