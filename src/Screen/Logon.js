import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";
import { useFonts } from 'expo-font';
import React from "react";
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import Colors from "../Colors/Color";
import Input from "../Component/Input";
import Button from "../Component/Button";
import Loader from "../Component/Loader";

const Logon = ({ navigation }) => {

  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, seterror] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("please input email", "email");
      valid = false;
    } 
    

    if (!inputs.password) {
    valid = false;
     handleError("Enter Your password", "password");
    }

    if (valid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true }),
          );
          navigation.navigate("Onboard")
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "user does not exist");
      }
    }, 3000);
  };
  const handleOnChange = (text, input) => {
    setInputs((preState) => ({ ...preState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    seterror((preState) => ({ ...preState, [input]: errorMessage }));
  };

  return (
    
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <StatusBar translucent backgroundColor={Colors.darkblue}/>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text
          style={{
            color: Colors.black,
            fontSize: 40,
            fontWeight: "bold",
            fontFamily:"Poppins",
            // textAlign: "center",
          }}
        >
          Login
        </Text>
        <Text style={{ color: Colors.grey, fontSize: 18, marginVertical: 10 ,  fontFamily:"Poppins"}}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            placeholder="Enter Your Email address"
            iconName="email-outline"
            label="Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          />

          <Input
            placeholder="Enter Your  password"
            iconName="lock-outline"
            label="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            
            }}
            
            onChangeText={(text) => handleOnChange(text, "password")}
            password
          />
          <Button title="Login" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Registration")}
            style={{
              color: Colors.black,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily:"Poppins"
            }}
          >
            Don't have an account? sign-up
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Logon;
