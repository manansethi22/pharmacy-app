import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable
} from "react-native";
import React from "react";
import PetFavCards from "../../components/Homepage/petfavourites/PetFavCards";

const EarScreen = ({navigation}) => {
  const data = [
    {
      id: "1",
      logo: require("../../assets/pet_favourites/logo.png"),
      image: require("../../assets/pet_favourites/med.png"),
      category: "Flea-Tick",
      medname: "NexGard (afoxolaner) Chewables",
      price: "$456",
      oldprice: "$599",
    },
    {
      id: "2",
      logo: require("../../assets/pet_favourites/logo.png"),
      image: require("../../assets/pet_favourites/med2.png"),
      category: "Pain",
      medname: "Rimadyl (carprofen)",
      price: "$396",
      oldprice: "$499",
    },
    {
      id: "3",
      logo: require("../../assets/pet_favourites/logo.png"),
      image: require("../../assets/pet_favourites/med.png"),
      category: "Flea-Tick",
      medname: "NexGard (afoxolaner) Chewables",
      price: "$456",
      oldprice: "$599",
    },
    {
      id: "4",
      logo: require("../../assets/pet_favourites/logo.png"),
      image: require("../../assets/pet_favourites/med2.png"),
      category: "Pain",
      medname: "Rimadyl (carprofen)",
      price: "$396",
      oldprice: "$499",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContent}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image
            source={require("../../assets/ProfileScreen/backbutton.png")}
            style={styles.backBtnImage}
            resizeMode="contain"
          />
        </Pressable>

        <Text style={styles.profileText}>Ear</Text>
        <View style={styles.emptyBtn}></View>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <PetFavCards
              logo={item.logo}
              image={item.image}
              category={item.category}
              medname={item.medname}
              price={item.price}
              oldprice={item.oldprice}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default EarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#f8f8f8'
  },

  headContent: {
    flexDirection: "row",

    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  backBtnImage: {
    width: 13,
    height: 19,
    marginRight: 3,
  },
  emptyBtn: {
    backgroundColor: "#F8F8F8",
    width: 45,
    height: 45,
    borderRadius: 33,
  },
  profileText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    color: "#0A0C11",
  },
  cardContainer:{
    marginTop:34.5
  }
});
