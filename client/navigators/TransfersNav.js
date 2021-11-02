import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transfers from "../components/Transfers/index.js";
import CardContact from "../components/CardContact/index.js";

const Stack = createStackNavigator();

function TransfersNav() {
    return (
        <Stack.Navigator initialRouteName="TransferIndex" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="TransferIndex" component={Transfers} />
            <Stack.Screen name="Card Contact" component={CardContact} />
        </Stack.Navigator>
    )
}

export default TransfersNav