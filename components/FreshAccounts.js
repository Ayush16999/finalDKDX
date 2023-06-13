import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { userAuthContext } from "../utils/context/userAuthContext";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FreshAccounts = () => {
  const { data, favourite, setFavourite, getFilterData } =
    useContext(userAuthContext);

  const navigation = useNavigation();
  // console.log(data)

  async function handleWishlist(itemID) {
    if (favourite.some((prev) => prev.uid === itemID.uid)) {
      // const filterData = 
      setFavourite((prevlist) =>
        prevlist.filter((obj) => obj.uid !== itemID.uid)
      );
      // favourite.push(filterData)
      // await AsyncStorage.setItem("wishlist", JSON.stringify(favourite));
      Toast.show("Item Removed from favourites");
    } else {
      // const newData = 
      setFavourite((prevlist) => [...prevlist, itemID]);
      // favourite.push(newData);
      // console.log(favourite)
      // await AsyncStorage.setItem("wishlist", JSON.stringify(favourite));
      Toast.show("Item Added to favourites");
    }
  }

  // console.log(favourite)

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        getFilterData().map((item) => {
          return (
            <View style={styles.box} key={item.uid}>
              <View style={styles.boxImg}>
                <Image source={{ uri: item.img }} style={styles.itemImage} />
                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 0,
                    backgroundColor: "#fff",
                    padding: 5,
                    borderRadius: 100,
                  }}
                >
                  <TouchableOpacity onPress={() => handleWishlist(item)}>
                    {favourite.some((prev) => prev.uid === item.uid) ? (
                      <Icon name="heart" size={25} color={"red"} />
                    ) : (
                      <Icon name="heart" size={25} color={"pink"} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.myText}>#{item.category}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title.slice(0, 25)}</Text>
                {/* <Text style={{ fontWeight: "bold" }}>{item.uid}</Text> */}
                <Text style={{}}>{item.desc.slice(0, 50)}...</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    fontSize: 20,
                    marginLeft: 10,
                  }}
                >
                 ₹{item.price}
                </Text>
                <TouchableOpacity
                  style={{ position: "absolute", right: 10, bottom: 10, zIndex: 999 }}
                  onPress={() =>
                    navigation.navigate("ProductDetails", { product: item })
                  }
                >
                  <Text
                    style={{
                      backgroundColor: "#0003",
                      color: "#000",
                      paddingHorizontal: 10,
                      paddingVertical: 7,
                      borderRadius: 5,
                      fontWeight: '800',
                      borderWidth: 1,
                      borderColor: '#f2f2f2'
                    }}
                  >
                    Check details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <Text>Checking All available accounts</Text>
          <ActivityIndicator color={"#000"} size={"large"} />
        </View>
      )}
    </View>
  );
};

export default FreshAccounts;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 150,
    marginTop: 20,
    flexDirection: 'column-reverse'
  },
  box: {
    borderWidth: 2,
    borderColor: "#EFF5F5",
    height: 130,
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: '#333',
    padding: 2
  },
  textBox: {
    width: "70%",
    padding: 5
  },
  boxImg: {
    width: "30%",
    height: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  itemImage: {
    width: 100,
    height: 80,
  },
  myText: {
    // width: "60%",
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    fontWeight: "400",
    fontSize: 12,
    // textAlign:
  },
});
