import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShopByPet_Cards from "./shopbypet/ShopByPet_Cards";

const ShopByPet = () => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 40) / 3;
  return (
    <View style={{ paddingHorizontal: 20 , marginBottom:30}}>
      <Text style={styles.HeadText}>Shop By Pet</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cards}>
          <ShopByPet_Cards
            image={require("../../assets/pet/Dog.png")}
            name="Dog"
            width={cardWidth}
          />
          <ShopByPet_Cards
            image={require("../../assets/pet/Cat.png")}
            name="Cat"
            width={cardWidth}
          />
          <ShopByPet_Cards
            image={require("../../assets/pet/Rabbit.png")}
            name="Rabbit"
            width={cardWidth}
          />
        </View>
        <View style={styles.cards}>
          <ShopByPet_Cards
            image={require("../../assets/pet/Parrot.png")}
            name="Parrot"
            width={cardWidth}
          />
          <ShopByPet_Cards
            image={require("../../assets/pet/Fish.png")}
            name="Fish"
            width={cardWidth}
          />
          <ShopByPet_Cards
            image={require("../../assets/pet/Petshampoo.png")}
            name="Pet Shampoo"
            width={cardWidth}
          />
        </View>
      </View>
    </View>
  );
};

export default ShopByPet;

const styles = StyleSheet.create({
  HeadText: {
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#0A0C11",
    marginBottom: 15,
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardContainer: {
    justifyContent: "space-between",
  },
});
