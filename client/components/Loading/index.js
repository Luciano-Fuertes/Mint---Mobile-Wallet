import React, { useEffect } from "react";
import {  View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userActions";
import {styles} from "./styles"

export default function Loading({ navigation }) {

  const dispatch = useDispatch();


  let token= useSelector((state)=>state.users.jwtToken)
  console.log(" here is the token: ", token);

  let json = token.payload
  console.log("this is the json ", json)

  const mail= json.sub.split("|")[0]==="google-oauth2" ? json.nickname +'@gmail.com' :  json.name 
      
  console.log("this is the mail ", mail)


useEffect(()=>{
  dispatch(getUser(mail))
}, [])

const state= useSelector((state)=>state.users.user)


console.log(Object.keys(state).length)

Object.keys(state).length!==0 ?navigation.navigate("Drawer"):navigation.navigate("RegisterExtended")



    return (
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
}