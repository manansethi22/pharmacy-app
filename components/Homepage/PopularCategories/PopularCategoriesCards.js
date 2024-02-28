import React from "react";
import { Text, View, StyleSheet,Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const PopularCategoriesCards = ({ name }) => {
  return (
    <View style={styles.cards}>
      <Text style={styles.cardsText}>{name}</Text>
    </View>
  );
};

export default PopularCategoriesCards;

const styles = StyleSheet.create({
  cards: {
    justifyContent: "center",
    alignItems: "center",
    width: (WIDTH-60)/3,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 10,
  },
  cardsText: {
    fontSize:12,
   fontWeight:500,
   color: '#121212'
    
    
  },
});
