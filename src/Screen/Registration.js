import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import Colors from "../Colors/Color";
import Input from "../Component/Input";
import Button from "../Component/Button";
import Loader from "../Component/Loader";
import { useFonts } from 'expo-font';


const Registration = ({ navigation }) => {
  
  // const [loaded] = useFonts({
  //   Montserrat: require('../fonts/app_icons.ttf'),
  // })
  // if (!loaded) {
  //   return null;
  // }
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: ""
  })
  const [errors, seterror] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if(!inputs.email){
      handleError("please input email", "email")
      valid = false;
    }else if(!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError("pls input valid email", "email");
      valid = false;
    }
    if(!inputs.phone){
      handleError("Enter Your PhoneNumber", "phone");
      valid = false;
    }
    if(!inputs.fullname){
      handleError("Enter Your name", "fullname")
      valid = false;
    }
    if(!inputs.password){
      handleError("Enter Your password", "password");
      valid = false;
    }else if(inputs.password < 5 && inputs.password.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError("Minimum of 5", "password");
      valid = false;
    }

    if(valid){
      register();
    }
  };

  const register = () =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("Logon");
      } catch (error) {
        Alert.alert("Error","Something went wrong")
      }
    }, 3000)
  }
  const handleOnChange = (text, input) =>{
    setInputs((preState) => ({...preState,[input]: text}))
  }
 
  const handleError = (errorMessage, input) =>{
   seterror((preState) => ({...preState,[input]: errorMessage}))
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <StatusBar translucent backgroundColor={Colors.darkblue}/>
      <Loader visible={loading}/>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text
          style={{
            color: Colors.black,
            fontSize: 40,
            fontWeight: "bold",
            // textAlign: "center",
            // fontFamily: "Montserrat"
            fontFamily:"Poppins"
          }}
        >
          Register
        </Text>
        <Text style={{ color: Colors.grey, fontSize: 18, marginVertical: 10 ,  fontFamily:"Poppins"}}>
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter Your Email address"
            iconName="email-outline"
            label="Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, 'email')
            }}
            onChangeText = {(text) => handleOnChange(text,"email")}
          />
            <Input
            placeholder="Enter Your fullname"
            iconName="account-outline"
            label="Fullname"
            error={errors.fullname}
            onFocus={() => {
              handleError(null, 'fullname')
            }}
            onChangeText = {(text) => handleOnChange(text,"fullname")}
          />
            <Input
            keyboardType = "numeric"
            placeholder="Enter Your PhoneNumber"
            iconName="phone-outline"
            label="PhoneNumber"
            error={errors.phone}
            onFocus={() => {
              handleError(null, 'phone')
            }}
            onChangeText = {(text) => handleOnChange(text, "phone")}
          />
          <Input
            placeholder="Enter Your  password"
            iconName="lock-outline"
            label="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, 'password')
            }}
            onChangeText = {(text) => handleOnChange(text,"password")}
            password
          />
          <Button title="Register" onPress={validate}/>
          <Text
           onPress={() => navigation.navigate('Logon')}
            style={{
              color: Colors.black,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Already have account ? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({});
