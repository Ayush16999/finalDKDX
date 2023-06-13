import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./LoginPage";


const UnAuthenticationScreen = () => {
  const Stack = createStackNavigator();
    
  return (
     <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
  )
}

export default UnAuthenticationScreen

       