import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DB } from "../config/firebase";
import { Firestore, collection, doc, setDoc, getDoc, getDocsFromServer } from "firebase/firestore";
import { async } from "@firebase/util";

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const getdata =
  }, []);

  async function getPost() {
    const docref = doc(FIREBASE_DB, "posts", "BGMI")
    const getref = await getDoc(docref)
    try {
        if (getref.exists()) {
            setData(getref.data())
            console.log("my document data", getref.data())
        } 
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>text</Text>
      <Button title="click me" onPress={() => getPost()} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
