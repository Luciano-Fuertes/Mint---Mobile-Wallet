import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../LoginScreens/Login";
import Signup from "../LoginScreens/Signup";
import RegisterExntended from "../LoginScreens/ExtendedRegister";
import FAQ from "../components/FAQ";

const Stack = createStackNavigator();

function LoginStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterExtended"
          component={RegisterExntended}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="F.A.Q." component={FAQ} options={{}} />
      </Stack.Navigator>
    );
  }


  export default LoginStack