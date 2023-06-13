import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { UserAuthContextProvider } from "./utils/context/userAuthContext";
import AuthStack from './AuthStack'


const App = () => {
  

  return (
    <UserAuthContextProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <StatusBar />
          <AuthStack />
        </NavigationContainer>
      </RootSiblingParent>
    </UserAuthContextProvider>
  );
};

export default App;
