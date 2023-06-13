import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { userAuthContext } from "../utils/context/userAuthContext";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import EmptyIcon from "react-native-vector-icons/MaterialIcons";
import Toast from "react-native-root-toast";
// import empty from "../assets/empty.svg";

const WishlistScreen = () => {
  const navigation = useNavigation();

  const { favourite, setFavourite, validUser } = useContext(userAuthContext);

  function handleWishlist(itemID) {
    if (favourite.some((prev) => prev.uid === itemID.uid)) {
      setFavourite((prevlist) =>
        prevlist.filter((obj) => obj.uid !== itemID.uid)
      );
      Toast.show("Item Removed from favourites");
    }
  }

  return (
    <View style={{ height: "94%", width: "100%" }}>
      <View>
        <Text style={{ fontSize: 18, marginTop: 20, fontWeight: "800" }}>
          Your Favourite Accounts
        </Text>
      </View>
      {favourite.length === 0 ? (
        <View
          style={{
            height: "94%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmptyIcon name="library-add" size={100} color={'#999'} />
          <Text style={{color: '#000', fontSize: 22, fontWeight: '500'}}>Your Wishlist is empty</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 25 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              // borderWidth: 1,
              padding: 2,
              paddingVertical: 10,
              justifyContent: "space-between",
              rowGap: 20,
              width: "100%",
            }}
          >
            {favourite.map((item) => {
              return (
                <View
                  key={item.uid}
                  style={{
                    height: 250,
                    width: 180,
                    borderWidth: 3,
                    borderRadius: 20,
                    borderColor: "#DDDDDD",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handleWishlist(item)}
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      top: 0,
                      right: 0,
                    }}
                  >
                    <Icon name="close-circle" size={30} color={"#E76161"} />
                  </TouchableOpacity>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingVertical: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={{ width: 150, height: 100 }}
                    />
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 8,
                      minHeight: 70,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                      #{item.category}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.title}</Text>
                    <Text style={{ fontSize: 12 }}>{item.uid}</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "green",
                      }}
                    >
                      ₹{item.price}
                    </Text>
                  </View>
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("ProductDetails", { product: item })
                      }
                      style={{
                        marginTop: 7,
                        alignItems: "center",
                        width: "80%",
                        backgroundColor: "#222",
                        paddingVertical: 5,
                        borderRadius: 10,
                        marginHorizontal: 5,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>See details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
