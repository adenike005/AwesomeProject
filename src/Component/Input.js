import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { useFonts } from 'expo-font';
import Colors from "../Colors/Color";
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocue] = React.useState(false);
  const [hiddenpassword, setHidepassword] = React.useState(password);
  // const [fontsLoaded] = useFonts({
  //   "Poppins-Light.tff": require("../../assets/fonts/Poppins-Light.tff")
  // })
  // if(!fontsLoaded){
  //   return undefined;
  // }
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Colors.red
              : isFocused
              ? Colors.darkblue
              : Colors.light,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: Colors.darkblue, marginRight: 10 }}
        />
        <TextInput
         secureTextEntry={hiddenpassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocue(true);
          }}
          onBlur={() => {
            setIsFocue(false);
          }}
          style={{ color: Colors.darkblue, flex: 1 }}
          {...props}
        />
        {password && (
             <Icon 
             onPress={() => setHidepassword(!hiddenpassword)}
             style={{fontSize: 22, color: Colors.darkblue}}
             name={hiddenpassword ? "eye-outline": "eye-off-outline"}
             />
        )}
    
     
    
     
      </View>
        {error &&    <Text style={{color: Colors.red,fontSize: 12, marginTop: 7}}>
        {error}</Text>}

  
   
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.grey,
  
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderWidth: 0.5,
  
  },
});

export default Input;
