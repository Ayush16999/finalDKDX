import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import React from 'react'
import Menu from './Menu';
import { useNavigation } from '@react-navigation/native';

const MenuBtn = () => {

  const navigation = useNavigation()

    function handleMenu(){
        navigation.navigate('Menu')
    }

  return (
    <View>
      <TouchableOpacity>
      <Icon name="menu" color={'#fff'} size={30} onPress={() => handleMenu()} />
      </TouchableOpacity>
    </View>
  )
}

export default MenuBtn

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '75%',
    zIndex: 999
}
})