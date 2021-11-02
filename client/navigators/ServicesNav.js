import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesIndex from "../components/Services/index.js";
import ServiceDetail from "../components/Services/ServiceDetail/index.js";

const Stack = createStackNavigator();

function ServicesNav() {
  return (
    <Stack.Navigator
      initialRouteName="ServicesIndex"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ServicesIndex" component={ServicesIndex} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
}

export default ServicesNav;
