import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import PetFavCards from "./petfavourites/PetFavCards";
import { FlatList } from "react-native";

const PetFavourites = ({navigation}) => {
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
  const handleViewAllPress = () => {
    console.log("View All pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.popularText}>Discover Pet Favourites</Text>
        <Pressable onPress={handleViewAllPress}>
          <Text style={styles.viewText}>View All</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("ProductScreen")}>
              <PetFavCards
                logo={item.logo}
                image={item.image}
                category={item.category}
                medname={item.medname}
                price={item.price}
                oldprice={item.oldprice}
              />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default PetFavourites;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  popularText: {
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#0A0C11",
  },
  viewText: {
    fontSize: 14,
    color: "#7D2354",
    fontWeight: 400,
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "right",
  },
});
