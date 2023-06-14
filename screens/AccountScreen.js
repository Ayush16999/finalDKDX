import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '90%', width: '100%'}}>
      <View>
      <Text style={{fontSize: 20, fontWeight: '500'}}>Follow me on my Youtube channel</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>

        <Image source={require('../assets/logo.jpg')} style={{width: 300, height: 300}} />
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>DkdX Gaming</Text>
      </View>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16}}>Click on the Button</Text>
        <TouchableOpacity 
        onPress={() => Linking.openURL("https://www.youtube.com/@DkdXGaming1")}
        >
        <Icon name='logo-youtube' size={70} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
