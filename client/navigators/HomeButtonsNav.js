import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesNav from "./ServicesNav.js";
import TransfersNav from "./TransfersNav.js";
import Deposit from "../components/Deposit/index.js";
import QRScan from "../components/QRScanner/index.js";
import Home from "../components/Home/index";
import AddContact from "../components/AddContact/index.js";

const Stack = createStackNavigator();

function HomeButtonsNav() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={Home} />
      <Stack.Screen name="Transfers" component={TransfersNav} />
      <Stack.Screen name="Services" component={ServicesNav} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="QRScan" component={QRScan} />
      <Stack.Screen name="Add Contact" component={AddContact} />
    </Stack.Navigator>
  );
}

export default HomeButtonsNav;
