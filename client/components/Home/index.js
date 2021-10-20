import React, { useEffect, useMemo, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/userActions";

//
import { CredentialsContext } from "../../loginComponents/CredentialsContext";

function Home({ route }) {
  const dispatch = useDispatch();

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email, name, photoUrl } = storedCredentials;

  useEffect(() => {
    console.log("in use efect get user");
    dispatch(getUser(email));
  }, [dispatch]);

  const balance = useSelector((state) => state.account.accounts);

  //;
  console.log(balance);

  /*

  const balance = useSelector((state) => state.account.accounts);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user) {
      dispatch(getAccount(user.idusuario));
    } else {
      const dataFiltered = {
        nombre: name.split(" ")[0],
        apellidos: name.split(" ")[1],
        mail: email,
        direccion: "",
        nickname: email.split("@")[0],
        dni: "",
        telefono: "",
        foto: photoUrl,
        codigo_postal: "",
      };

      dispatch(createUser(dataFiltered));
      dispatch(getAccount(user.idusuario));
    }
    if (balance[0]) dispatch(getTransfers(balance[0].idcuentas));
  }, [balance]);
*/

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.welcome}>Welcome, {name}</Text>
        <Text style={styles.title}>Current balance</Text>
        <Text style={styles.title}>{balance[0]?.saldo || 0} ARS</Text>
      </View>
    </View>
  );
}

export default Home;
