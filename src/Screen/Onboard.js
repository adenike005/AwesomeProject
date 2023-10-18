import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import Colors from "../Colors/Color";
import Button from "../Component/Button";
import { useFonts } from 'expo-font';

const Onboard = ({navigation}) => {
    const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    //    <View></View>
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar translucent backgroundColor={Colors.tranparent} />
      <Image
        source={require("../../assets/image/onboardImage.jpg")}
        style={style.image}
      />
      <View style={style.indicatorsContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActivity]} />
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <View>
          <Text style={style.title}>Find Your</Text>
          <Text style={style.title}>Sweet Home</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={style.textStyle}>
            Schedule visits in just a few click
          </Text>
          <Text style={style.textStyle}>visits in just a few click</Text>
        </View>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}
        >
        {/* <Pressable onPress={() => navigation.navigate("Homescreen")}/> */}
       <View style={style.btn}>
       
        <Text
           onPress={() => navigation.navigate('Homescreen')}
            style={{
              color: Colors.white,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily:"Poppins"
            }}
          >
            Get Started
          </Text>
        {/* <Button title="Login" /> */}
       </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorsContainer: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: Colors.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActivity: {
    backgroundColor: Colors.darkblue,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginHorizontal: 10,
    // fontFamily: "Poppins"
    fontFamily:"Poppins"

  },
  textStyle: {
    fontSize: 14,
    color: Colors.grey,
    marginHorizontal: 10,
    fontFamily:"Poppins"

  },
  btn:{
    height: 60,
    width: "100",
    // paddingVertical: 100,
    marginHorizontal: 20,
    // borderRadius: 15,
    backgroundColor: Colors.darkblue,
    justifyContent:"center",
    alignItems: "center"
  }
});

export default Onboard;
