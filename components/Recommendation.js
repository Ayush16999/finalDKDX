import { StyleSheet, View } from 'react-native';
import React from 'react';

const Recommendation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
      <View style={styles.box}>
        <View style={styles.boxImg} />
        <View style={styles.boxDesc} />
      </View>
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    box: {
        borderWidth: 1,
        width: 130,
        height: 120,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
    },
    boxImg: {
        borderWidth: 0,
        height: 65,
    },
});
