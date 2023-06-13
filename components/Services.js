import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useCallback, useContext } from 'react';
import {Service} from '../utils/Service';
import { userAuthContext } from '../utils/context/userAuthContext';

const Services = () => {

  const {onCategory} = useContext(userAuthContext)

 

  return (
    <View style={styles.container}>
      {Service.map(item => {
        return (
          <View key={item.id} style={styles.box}>
            <TouchableOpacity style={styles.imageBox} 
            onPress={() => onCategory(item.name)}
            >
              <Image source={item.img} style={styles.ServiceImage} />
            </TouchableOpacity>
            <Text style={styles.serviceText}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  ServiceImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  imageBox: {
    borderRadius: 100,
  },
  serviceText : {
    fontWeight: '500',
    color : '#000',
    fontSize: 12,
    marginTop: 5,
    textTransform: 'uppercase', 
  },
});
