import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import WhatsappIcon from "react-native-vector-icons/Ionicons";
import { userAuthContext } from "../utils/context/userAuthContext";

const ProductDetail = ({ navigation, route }) => {
  const selectedProduct = route.params.product;
  console.log(selectedProduct.id);

  const {validUser} = useContext(userAuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image source={{ uri: selectedProduct.img }} style={styles.box1Image} />
        <View
          style={{
            position: "absolute",
            bottom: 15,
            right: 10,
            backgroundColor: "#f2f2f2",
            padding: 5,
            borderRadius: 100,
          }}
        >
          <Icon name="heart" size={40} color={"red"} />
        </View>
      </View>
      <View style={styles.box2}>
        <View style={{minHeight: '40%', display: 'flex', justifyContent: 'space-evenly',paddingHorizontal: 8 }}>
          <Text style={{fontSize: 14}}>#{selectedProduct.category}</Text>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>{selectedProduct.title}</Text>
          <Text style={{fontSize: 15}}>{selectedProduct.desc}</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>₹{selectedProduct.price}</Text>
        </View>
        <View style={{height: 50, width: '100%', backgroundColor: '#2ab318', }}>
          <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=' + validUser
            )
          }}
          style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%'}} >
            <WhatsappIcon name="logo-whatsapp" size={30}  color={'#fff'}/>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, marginLeft: 10}}>Chat on whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  box1: {
    height: "40%",
    // borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  box1Image: {
    width: 350,
    height: 280,
  },
  box2: {
    height: "60%",
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
