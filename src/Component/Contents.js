import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from 'react'
import { categoriesData } from "../Constants/Index";
import {
    widthPercentageToDP as wp,
     heightPercentageToDP as hp} 
     from 'react-native-responsive-screen';
export default function Contents() {
  return (
    <View>
           <View style={styles.container}>
        <Text style={styles.titlMain}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 10
        }}
        showsHorizontalScrollIndicator={false}
      >

       {
          categoriesData.map((category, index) =>{
            return(
              <TouchableOpacity key={index} style={styles.card}>
                <Image source={category.image} style={styles.cardImage}/>
                <Text style={styles.cardTitle}>{category.title}</Text>
              </TouchableOpacity>
            )
          } )
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
      },
    
      titlMain:{
        fontSize: wp(4),
        fontWeight: "bold",
        color:"gray",
      },
      subTitle:{
        fontSize: wp(4),
        color: "blue"
      },
      Card:{
        alignItems:"center"
      },
      cardImage:{
        width:wp(20),
        height: wp(20),
        borderRadius: wp(5),
    },
    cardTitle:{
        fontSize: wp(4),
        fontWeight: "bold",
        alignSelf:"center",
        paddingVertical: 5,

    }
})