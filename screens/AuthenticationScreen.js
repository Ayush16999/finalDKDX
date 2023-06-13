import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import MenuBtn from "../components/MenuBtn";
import Menu from "../components/Menu";
import ProductDetail from "./ProductDetail";
import WishlistScreen from "./WishlistScreen";

const AuthenticationScreen = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerBackVisible: false,
          title: "Home",
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#fff",
          headerRight: () => <MenuBtn />,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MenuBtn"
        component={MenuBtn}
        options={{ headerBackVisible: false, title: "" }}
      />

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{ title: "", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetail}
        options={{
          title: "Account Details",
          headerTitleAlign: "center",
          animation: "fade_from_bottom",
        }}
      />
    </>
  );
};

export default AuthenticationScreen;
