import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainContainer from "../Navigation/MainContainer";
import Setting from "../Navigation/Setting";
import Profile from "../Navigation/Profile";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import  Colors  from "../Colors/Color";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={MainContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? Colors.black : Colors.darkblue}
              />
            );
          },
        }}
      />
      <Tab.Screen name="profile" component={Profile} 
       options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={"search-sharp"}
              size={24}
              color={focused ? Colors.black : Colors.darkblue}
            />
          );
        },
      }}
      />

      <Tab.Screen name="Search" component={Setting} 
       options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? Colors.black : Colors.darkblue}
            />
          );
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
