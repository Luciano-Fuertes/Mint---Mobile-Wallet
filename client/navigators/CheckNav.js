import React, { useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNav from "./DrawerNav";
import NewRegisterExt from "../LoginScreens/NewExtendedRegister";
import { useSelector, useDispatch } from "react-redux";
import { CredentialsContext } from "../loginComponents/CredentialsContext";
import { getUser } from "../store/actions/userActions";

const Stack = createStackNavigator();

export default function CheckNav() {
  const dispatch = useDispatch();

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email } = storedCredentials;

  useEffect(() => {
    email ? dispatch(getUser(email)) : (user = {});
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <Stack.Navigator>
      {Object.keys(user).length === 0 ? (
        <Stack.Screen
          name="NewRegisterExt"
          component={NewRegisterExt}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
