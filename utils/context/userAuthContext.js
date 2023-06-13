import React, { createContext, useEffect, useState } from "react";

import {
  onAuthStateChanged,
  PhoneAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";

import { auth, app, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { get, ref, set, onValue } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

if (!app?.options || Platform.OS === "web") {
  throw new Error(
    "This example only works on Android or iOS, and requires a valid Firebase config."
  );
}

const userAuthContext = createContext();

function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [duplicate, setDuplicate] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [getSearchData, setGetSearchData] = useState([]);
  const [verifyNumber, onChangeNumber] = useState("");
  const [result, setResult] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [number, setNumber] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [firebaseData, setFirebaseData] = useState(null);
  const [newFetchdata, setnewfetchdata] = useState([]);
  const [category, setCategory] = useState("All");
  const [isSignedIN, setIsSignedIn] = useState(false);



  async function sendOtpToPhone(auth, number, recaptchaVerifier) {
    const userPhone = countryCode + number;
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const result = await phoneProvider.verifyPhoneNumber(
        userPhone,
        recaptchaVerifier.current
      );
      setResult(result);
      console.log(result);
      await AsyncStorage.setItem("user", userPhone);
      setValidUser(userPhone)
    } catch (error) {
      console.log("sending otp error", error);
    }
  }

  

  async function signInWithPhone(auth, result, verifyNumber) {
    try {
      const credential = PhoneAuthProvider.credential(result, verifyNumber);
      await signInWithCredential(auth, credential);
      console.log(result);
      console.log(user);
      // setIsSignedIn(true)
    } catch (error) {
      console.log("verifying otp error", error);
    }
  }

  function logOut() {
    signOut(auth);
  }

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");

      if (value !== null) {
        setValidUser(value);
        console.log(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  // const readWishlistData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("wishlist");

  //     if (value !== null) {
  //       setFavourite(value);
  //     }
  //   } catch (e) {
  //     alert("Failed to fetch the input from storage");
  //   }
  // };

  function onCategory(category) {
    setCategory(category);
    console.log(category);
  }

  function getFilterData() {
    if (category === "All") {
      return data;
    } else {
      return data.filter((object) => object.category === category);
    }
  }

  async function fetch() {
    const usersRef = ref(db, "/posts");

    onValue(usersRef, (snapshot) => {
      const FetchedData = snapshot.val();
      for (id in FetchedData) {
        var _data = FetchedData[id];
        var title = id;
        var desc = _data.desc;
        var category = _data.category;
        var img = _data.img;
        var uid = _data.uid;
        var price = _data.price;
        var obj = { title, desc, category, img, uid, price };
        newFetchdata.push(obj);
      }
      // console.log(newFetchdata);
      setData(newFetchdata);
      setGetSearchData(newFetchdata);
    });
  }

  // console.log(data);
  useEffect(() => {
    // readWishlistData();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      readData();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetch();
  }, [newFetchdata]);

  return (
    <userAuthContext.Provider
      value={{
        data,
        setData,
        favourite,
        setFavourite,
        search,
        setSearch,
        duplicate,
        setDuplicate,
        user,
        setUser,
        verifyNumber,
        onChangeNumber,
        result,
        setResult,
        number,
        setNumber,
        countryCode,
        setCountryCode,
        sendOtpToPhone,
        signInWithPhone,
        setConfirm,
        confirm,
        setValidUser,
        validUser,
        logOut,
        firebaseData,
        onCategory,
        getFilterData,
        category,
        setGetSearchData,
        getSearchData,
        setIsSignedIn,
        isSignedIN,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export { userAuthContext, UserAuthContextProvider };
