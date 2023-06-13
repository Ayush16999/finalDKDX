import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Toast from "react-native-root-toast";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { userAuthContext } from "../utils/context/userAuthContext";
import { auth } from "../config/firebase";

const OtpVerification = ({ route, navigation }) => {
  const {VerificationId, setVerificationId } = useContext(userAuthContext)

  const [number, onChangeNumber] = useState("");
  const [error, onError] = useState(false);
  const { userPhoneNumber } = route.params;
  const { countryCode } = route.params;
  // const { VerificationId } = route.params;

  // console.log(VerificationId);

  async function handleSubmit() {
    if (number === "") {
      onError(true);
      Toast.show("Please enter a OTP to continue");
      onChangeNumber("");
    } else {
      try {
        console.log("entry in phone auth provider");
        const credential = PhoneAuthProvider.credential(VerificationId, number);
        await signInWithCredential(auth, credential);
        console.log("redirecting to home page");
        Toast.show("Success: Login Successfully");
        navigation.navigate("Home");
      } catch (error) {
        onError(`Error : ${error.message}`);
        console.log(`Error : ${error.message}`);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.box1Image}
        />
        <Text style={styles.box1Text}>
          A 6 digit verification code was sent to{" "}
          {countryCode + "-" + userPhoneNumber}{" "}
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.box2Text}>Enter the OTP below</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="number-pad"
          maxLength={6}
          textAlign="center"
        />
        {error && <Text style={{ color: "red" }}>{error}</Text>}
        <View style={styles.box2BTN}>
          <Button
            title="Verify Otp"
            color={"#000"}
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box1Text: {
    fontSize: 14,
    fontWeight: "500",
  },
  box1Image: {
    width: 200,
    height: 200,
  },
  box2Text: {
    marginBottom: 5,
    color: "gray",
  },
  input: {
    height: 50,
    width: 250,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 26,
    letterSpacing: 10,
    textAlign: "justify",
    fontWeight: "500",
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  box2BTN: {
    width: 120,
  },
});
