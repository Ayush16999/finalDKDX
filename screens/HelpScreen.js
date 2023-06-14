import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Linking } from "react-native";

const HelpScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        height: "90%",
        width: "100%",
        justifyContent: 'space-between'
      }}
    >
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" , backgroundColor: '#EFF5F5', paddingVertical: 20, }}>
          Welcome to our Help Section!{" "}
        </Text>

        <Text style={{marginTop: 10}}>
          {" "}
          We understand that you may have some queries or concerns while
          navigating through our app, which is a unique marketplace for various
          App IDs, including popular platforms like YouTube, BGMI, and Free
          Fire.{" "}
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>
            To get in touch with us via email, please follow these simple steps:
          </Text>
          <View>
            <View style={{ marginTop: 10 }}>
              <Text>
                1. Compose an email with a brief subject line indicating the
                nature of your query or issue.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text>
                2. In the body of the email, please provide as much detail as
                possible about your concern. This helps us understand the
                situation better and allows us to resolve the issue more
                efficiently. If possible, attach any relevant screenshots that
                could help us diagnose the problem.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text>
                3. Send your email to our official support address:
                dkdxgaming4@gmail.com. We aim to respond to all queries within 48
                hours.
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: "500" }}>
                If you'd prefer to speak with one of our customer support
                representatives directly, you can contact us via phone. Simply
                dial our helpline number: +91 909-859-2137. Our lines are open from
                9 am to 5 pm, Monday through Friday.{" "}
              </Text>
              <View style={{ margin: 10 }} />
              <Text>
                {" "}
                Before making a call, please make sure you have your username
                and any relevant information about your issue at hand. This will
                help us provide you with faster and more efficient support.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", marginTop: 60, borderRadius: 20 }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel: ${9098592137}`);
          }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            backgroundColor: "#0005",
            borderRadius: 20,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            Contact us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({});
