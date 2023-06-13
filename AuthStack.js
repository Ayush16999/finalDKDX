import { View, Text } from "react-native";
import React, { useContext } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import Starting from "./screens/Starting";
import OtpVerification from "./screens/OtpVerification";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./components/Navbar";
import MenuBtn from "./components/MenuBtn";
import Menu from "./components/Menu";
import ProductDetail from "./screens/ProductDetail";
import WishlistScreen from "./screens/WishlistScreen";
import { userAuthContext } from "./utils/context/userAuthContext";
import Test from "./screens/Test";

const AuthStack = () => {
  const Stack = createStackNavigator();
  const { validUser } = useContext(userAuthContext);

  return (
    <Stack.Navigator initialRouteName="Login">
      {validUser ? (
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
            options={{ title: "" }}
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
          <Stack.Screen name="Test" component={Test} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
