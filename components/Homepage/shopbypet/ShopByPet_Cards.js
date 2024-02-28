import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

const ShopByPet_Cards = ({ image, name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.petImage} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.petText}>{name}</Text>
      </View>
    </View>
  );
};

export default ShopByPet_Cards;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: (WIDTH - 60) / 3,
    height: 110,
    paddingBottom: 13,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  imageContainer: {
    marginBottom: 10,
  },
  petImage: {
    width: (WIDTH - 120) / 3,
    height: 62,
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  petText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#121212",
  },
});
