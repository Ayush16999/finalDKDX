import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { userAuthContext } from "../utils/context/userAuthContext";
import Toast from "react-native-root-toast";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import {
  onAuthStateChanged,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { StackActions, useNavigation } from "@react-navigation/native";
import {
  auth,
  app,
  result,
  setResult,
  setCountryCode,
  CountryCode,
} from "../config/firebase";

const LoginPage = ({ navigation }) => {
  const {
    user,
    setUser,
    sendOtpToPhone,
    signInWithPhone,
    number,
    setNumber,
    verifyNumber,
    onChangeNumber,
    setConfirm,
    confirm,
    result,
    setResult,
    countryCode,
    setCountryCode,
    validUser,
  } = useContext(userAuthContext);
  const recaptchaVerifier = useRef(null);
  // const [countryCode, setCountryCode] = useState("+91");
  // const [number, setNumber] = useState("");
  // const [verifyNumber, onChangeNumber] = useState("");
  // const [result, setResult] = useState("");
  // const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  // console.log(user)

  const attemptInvisibleVerification = false;
  const firebaseConfig = app ? app.options : undefined;

  async function handleSubmit() {
    if (number === "" || number.length <= 9) {
      setError("Error: please enter a valid number");
    } else {
      try {
        const sendCode = sendOtpToPhone(auth, number, recaptchaVerifier);
        console.log(sendCode);
        setConfirm(false);
      } catch (error) {
        setError(`Error : ${error.message}`);
        setConfirm(true);
      }
      Toast.show("Success : Verification code has been sent to your phone");
      console.log(result);
    }
  }

  async function handleVerifySubmit() {
    if (verifyNumber === "") {
      setError(true);
      Toast.show("Please enter a OTP to continue");
      onChangeNumber("");
    } else {
      try {
        console.log("entry in phone auth provider");
        const verifyMyCode = signInWithPhone(auth, result, verifyNumber);
        console.log("redirecting to home page", verifyMyCode);
        setConfirm(true);
      } catch (error) {
        setError(`Error : ${error.message}`);
        console.log(`Error : ${error.message}`);
        setConfirm(true);
      }
      Toast.show("Success: Login Successfully");
      navigation.dispatch(StackActions.replace("Home"));
    }
  }


  return (
    <>
      <View style={styles.main}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          style={{
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              alignContent: "center",
            },
          }}
        />
        <View style={styles.box1}>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.box1Image}
          />
          <Text style={styles.box1Text}>Welcome! Login to continue</Text>
        </View>
        {confirm ? (
          <View style={styles.box2}>
            <View>
              <TextInput
                style={styles.inputPre}
                onChangeText={setCountryCode}
                value={countryCode}
                textAlign="center"
                keyboardType="default"
                autoComplete="tel"
              />
              <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                placeholder="Enter your phone number"
                maxLength={10}
                textAlign="center"
                caretHidden={true}
                keyboardType="numeric"
                autoComplete="tel"
              />
            </View>
            {error && <Text style={{ color: "red", margin: 5 }}>{error}</Text>}
            <View>
              <TouchableOpacity style={styles.box2BTN}>
                <Button
                  title="Get otp"
                  color={"#000"}
                  button
                  onPress={() => handleSubmit()}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.box2}>
            <Text style={styles.box2Text}>Enter the OTP below</Text>
            <TextInput
              style={styles.inputVerification}
              onChangeText={onChangeNumber}
              value={verifyNumber}
              keyboardType="number-pad"
              maxLength={6}
              textAlign="center"
            />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <View style={styles.box2BTN}>
              <Button
                title="Verify Otp"
                color={"#000"}
                onPress={() => handleVerifySubmit()}
              />
            </View>
          </View>
        )}
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-evenly",
  },
  box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box1Text: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10,
    color: "#000",
  },
  box1Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  box2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: 'row'
  },
  box2Text: {
    marginBottom: 5,
    color: "gray",
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 10,
    borderColor: "#000",
    paddingHorizontal: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    position: "relative",
  },
  inputPre: {
    height: 50,
    width: 50,
    // marginBottom: 10,
    borderColor: "#000",
    // paddingHorizontal: 20,
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    // borderRadius: 5,
    borderWidth: 1,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
    // borderWidth: 2,
  },
  inputVerification: {
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
    width: 150,
    marginTop: 20,
  },
});
