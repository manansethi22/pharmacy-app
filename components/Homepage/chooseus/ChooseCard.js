import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ChooseCard = ({ image, name, desc }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.headText}>{name}</Text>
        <Text style={styles.descText}>{desc}</Text>
      </View>
    </View>
  );
};

export default ChooseCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 39,
    height: 39,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },

  headText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#0A0C11",
    fontStyle: "normal",
  },
  descText: {
    fontSize: 12,
    fontWeight: 400,
    color: "#444444",
    fontStyle: "normal",
  },
});
