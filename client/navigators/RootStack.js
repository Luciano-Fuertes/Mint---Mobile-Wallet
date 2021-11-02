import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckNav from "./CheckNav";
import LoginStack from "./LoginStack";
import { CredentialsContext } from "../loginComponents/CredentialsContext";

const Stack = createStackNavigator();


function RootStack() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator initialRouteName={"LoginStack" || "LandingPage"}>
            {!storedCredentials ? (
              <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="CheckNav"
                component={CheckNav}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}



export default RootStack;
