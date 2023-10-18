import { Fontisto, Ionicons, Icons} from "@expo/vector-icons";
// import { Icons } from "@expo/vector-icons";
// import Icon from 'react-native-ionicons'
import houses from "../Constants/houses";
import React from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  FlatList
} from "react-native";
import Colors from "../Colors/Color";
const {width} = Dimensions.get("screen");

const MainContainer = ({navigation}) => {
  const categoryList = ['Popular', 'Recommended', 'Nearest'];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };
  const Listoptions = () => {
    const optionsList  = [
      {title: "Buy a Home", img: require("../../assets/image/house1.jpg")},
      {title: "Rent a Home", img: require("../../assets/image/house2.jpg")},
    ];
    return <View style={style.optionlistcontainer}>
      {optionsList.map((option, index)=> (
        <View style={style.optionCard}  key={index}>
          <Image source={option.img} style={style.optionCardImage}/> 
          <Text style={{marginTop: 5, fontSize: 18, fontWeight:"bold", color: Colors.darkblue}}>{option.title}</Text>
        </View>
      ))}
    </View>;
  };
  const Card = ({house}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Profile', house)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {house.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: Colors.blue, fontSize: 16}}>
                $1,500
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: Colors.grey, fontSize: 14, marginTop: 5}}>
              {house.location}
            </Text>

            {/* Facilities container */}
            {/* <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icons name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icons name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icons name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View> */}
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={Colors.darkblue}
        barStyle="dark-content"
      />
      
      <View style={style.header}>
        <View>
          <Text style={{ color: Colors.grey }}>Location</Text>
          <Text
            style={{ color: Colors.black, fontSize: 20, fontWeight: "bold", }}
          >
            Nigeria
          </Text>
        </View>
        <Image
          source={require("../../assets/image/avater.png")}
          style={style.profileImage}
        />
      </View>


      <ScrollView>
        {/* <Welcome /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={style.searchInput}>
            {/* <Icon name="search" size={24} color={Colors.grey}/> */}
            <Ionicons name="search" size={25} color={Colors.white} />
            <TextInput
              placeholder="Search address, city, location"
              style={style.input}
            />
          </View>
          <View style={style.sortBtn}>
            {/* <MaterialIcons name="tune" size={25} color={Colors.white}/> */}
            <Ionicons name="camera-outline" size={25} color={Colors.white} />
          </View>
        </View>
        <Listoptions />
        <ListCategories/>
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 30,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInput: {
    height: 50,
    backgroundColor: Colors.darkblue,
    flex: 1,
    color: Colors.tranparent,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,

    // justifyContent:"space-between",
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: Colors.darkblue,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  input: {
    color: Colors.white,
    marginHorizontal: 15,
  },

  optionlistcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionCard:{
    height: 200,
    // width: width / 2 - 30,
    width: "48%",
    elevation: 25,
    backgroundColor: Colors.white,
    alignItems:"center",
    borderRadius: 10,
    marginTop: 10,
   
    // paddingHorizontal: 10,
  },
  optionCardImage:{
    height: "80%",
    borderRadius: 10,
    width: "100%"
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: Colors.darkblue,
  },
  activeCategoryListText: {
    color: Colors.darkblue,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: Colors.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: Colors.grey},
});

export default MainContainer;
