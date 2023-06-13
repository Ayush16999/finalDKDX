import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>

      </View>
      <View style={styles.box2}>
        <Text>dkasdjkahdskjdas</Text>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: "100%",
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row'
    },
    box1:{
        borderWidth: 1,
        height: '100%',
        width: '40%',
        backgroundColor: '#0005',
        paddingVertical: 50
    },
    box2:{
        borderWidth: 1,
        height: '100%',
        width: '60%',
        paddingVertical: 50
    }
})