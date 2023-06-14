import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  Linking,
  Button,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
// import HomeHeader from '../components/HomeHeader';
import Home from "../components/Home";
// import profile from '../assets/profile.png';
// Tab ICons...
import home from "../assets/home.png";
import search from "../assets/heart.png";
import notifications from "../assets/bell.png";
import settings from "../assets/bell2.png";
import logout from "../assets/logout.png";
// Menu
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import WishlistScreen from "./WishlistScreen";
import AccountScreen from "./AccountScreen";
import HelpScreen from "./HelpScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import HeartIcon from "react-native-vector-icons/Ionicons";
import BackIcon from "react-native-vector-icons/Feather";
import { userAuthContext } from "../utils/context/userAuthContext";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const {
    data,
    favourite,
    setFavourite,
    user,
    setGetSearchData,
    getSearchData,
  } = useContext(userAuthContext);

  const [currentTab, setCurrentTab] = useState("Home");
  const [searchInput, setSearchInput] = useState(false);
  const [searchData, setSearchData] = useState("");

  // console.log(currentTab)
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  function handleSearchInput() {
    let searchLowerData = searchData.toLowerCase();
    if (searchLowerData.length === 1 || searchLowerData.length <= 1) {
      setSearchInput(false);
    }
    if (searchLowerData.length >= 2) {
      setSearchInput(true);
      let tempdata = data.filter((object) => {
        let title = object.title.toLowerCase();

        if (title.includes(searchLowerData)) {
          return object;
        }
      });
      setGetSearchData(tempdata);
    }
  }

  return (
    // <View style={styles.container}>
    //   {/* <View style={{height: 20}} /> */}
    //   <Home />
    // </View>
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 50 }}>
        <View />

        <View style={{ flexGrow: 1, marginTop: 100 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Favourite", search)}
          {TabButton(currentTab, setCurrentTab, "Help", notifications)}
          {TabButton(currentTab, setCurrentTab, "Follow Us", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          overflow: "hidden",
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 10,
              // borderWidth: 1,
              width: "100%",
              marginTop: 20,
            }}
          >
            <View style={{ marginTop: 20, width: "70%", borderWidth: 0 }}>
              {currentTab === "Home" && (
                <TextInput
                  style={{
                    height: 40,
                    fontSize: 20,
                    backgroundColor: "#EFF5F5",
                    width: "100%",
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    borderColor: "gray",
                  }}
                  placeholder="Search"
                  cursorColor={"#000"}
                  onChange={() => handleSearchInput()}
                  onChangeText={setSearchData}
                  value={searchData}
                />
              )}

              {(currentTab === "Favourite" ||
                currentTab === "Help" ||
                currentTab === "Follow Us") && (
                <TouchableOpacity onPress={() => setCurrentTab("Home")}>
                  <BackIcon name="arrow-left" size={40} />
                </TouchableOpacity>
              )}
            </View>
            <View style={{ position: "relative" }}>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: 40,
                  width: 50,
                }}
                onPress={() => setCurrentTab("Favourite")}
              >
                <Icon name="favorite" size={40} color={"#000"} />
                <Text
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    fontSize: 12,
                    fontWeight: "600",
                    color: "white",
                    borderRadius: 50,
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    backgroundColor: "red",
                  }}
                >
                  {favourite.length}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // Do Actions Here....
                  // Scaling the view...
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 0.9,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValue, {
                    // YOur Random Value...
                    toValue: showMenu ? 0 : -200,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(closeButtonOffset, {
                    // YOur Random Value...
                    toValue: !showMenu ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setShowMenu(!showMenu);
                }}
              >
                <Image
                  source={showMenu ? close : menu}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "black",
                    marginTop: 20,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>

          {searchInput ? (
            <View>
              <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
                Showing results for "{searchData}"
              </Text>

              <View style={{ marginTop: 50, rowGap: 10 }}>
                {getSearchData.map((item) => {
                  return (
                    <View
                      style={{
                        borderWidth: 2,
                        padding: 4,
                        height: 120,
                        borderRadius: 10,
                        justifyContent: "space-evenly",
                        borderColor: "#DFDFDE",
                      }}
                      key={item.uid}
                    >
                      <View style={styles.textBox}>
                        <Text style={styles.myText}>#{item.category}</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                          {item.title.slice(0, 25)}
                        </Text>
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
                          style={{
                            position: "absolute",
                            right: 5,
                            top: 5,
                          }}
                          onPress={() =>
                            navigation.navigate("ProductDetails", {
                              product: item,
                            })
                          }
                        >
                          <Text
                            style={{
                              backgroundColor: "#0003",
                              color: "#000",
                              paddingHorizontal: 10,
                              paddingVertical: 7,
                              borderRadius: 5,
                              fontWeight: "800",
                            }}
                          >
                            Check details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          ) : (
            <View>
              {currentTab === "Home" && <Home />}
              {currentTab === "Favourite" && <WishlistScreen />}
              {currentTab === "Help" && <HelpScreen />}
              {currentTab === "Follow Us" &&  <AccountScreen /> }
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const TabButton = (currentTab, setCurrentTab, title, image) => {
  const navigation = useNavigation();
  const { logOut, validUser, setValidUser } = useContext(userAuthContext);

  return (
    <TouchableOpacity
      onPress={async () => {
        if (title == "LogOut") {
          // Do your Stuff...
          logOut();
          try {
            await AsyncStorage.removeItem("user");
            setValidUser(null);
            console.log("user deleted");
          } catch (error) {
            console.log(error);
          }

          navigation.dispatch(StackActions.replace("Login"));
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#222" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#222" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     position: 'relative',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
});

export default HomeScreen;
