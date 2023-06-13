import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WishlistItems = ({favourite}) => {
    console.log(favourite)
  return (
    <View>
      <Text>{favourite}</Text>
    </View>
  )
}

export default WishlistItems

const styles = StyleSheet.create({})